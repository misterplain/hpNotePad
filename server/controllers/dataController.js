const Data = require("../models/dataModel");
const asyncHandler = require("express-async-handler");
const axios = require("axios");
const { nodeMailerConfirmationEmail } = require("../utils/nodeMailer");
const dotenv = require("dotenv");

const { getForecast } = require("../api/getForecast");
const { getHoroscope } = require("../api/getHoroscope");
const { getJoke } = require("../api/getJoke");
const { getMoonPhase } = require("../api/getMoonPhase");
const { getNews } = require("../api/getNews");

const errorMessage = "Error";

const nodeCronTrigger = asyncHandler(async (req, res) => {
  console.log("nodeCronTrigger");

  const fetchDataResponse = await fetchData();
  console.log(fetchDataResponse);

  if (fetchDataResponse.success) {
    console.log("Data fetched successfully for today");
    return res.json({ message: "Data fetched successfully for today" });
  } else {
    console.log("Failed to fetch data for today");
    return res.status(500).json({ message: "Failed to fetch data for today" });
  }
});

const fetchData = asyncHandler(async (req, res) => {
  console.log(process.env.RAPID_API_KEY, "process.env.RAPID_API_KEY");
  try {
    let time = new Date();
    let fetchedDataObject = {};
    fetchedDataObject.date = time;
    fetchedDataObject.horoscope = {};
    let horoscopeData = {};

    const [joke, moonPhase, forecast, news] = await Promise.all([
      getJoke(),
      getMoonPhase(),
      getForecast(),
      getNews(),
    ]).catch((error) => {
      console.error("Error fetching data:", error);
    });

    fetchedDataObject.joke = joke;

    fetchedDataObject.moonPhase = moonPhase;

    fetchedDataObject.forecast = forecast;

    fetchedDataObject.news = news;

    const horoscopeSigns = [
      "aquarius",
      "pisces",
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpio",
      "sagittarius",
      "capricorn",
    ];

    const results = await Promise.all(
      horoscopeSigns.map((sign) => getHoroscope(sign))
    );
    //below catch not necessary as error messages sent from within getHoroscope
    // .catch((error) => {
    //   console.error("Error fetching horoscopes:", error);
    //   return null;
    // });

    if (!results) {
      console.log("Error fetching horoscopes");
      horoscopeData = {
        data: {},
        response: {
          success: false,
          errorMessage: "Error fetching horoscopes",
        },
      };
    } else {
      horoscopeData = {
        data: {},
        response: {
          success: true,
          errorMessage: "",
        },
      };

      results.forEach((result, index) => {
        const sign = horoscopeSigns[index];
        horoscopeData.data[sign] = result.data;

        if (!result.response.success) {
          horoscopeData.response.success = false;
          horoscopeData.response.errorMessage =
            "One or more horoscope fetches failed";
        }
      });
    }

    fetchedDataObject.horoscope = horoscopeData;

    const saveObject = await saveDataToDB(fetchedDataObject);

    if (saveObject.success) {
      return {
        success: true,
        message: "Data Fetched and saved successfully",
      };
    } else {
      return { success: false, message: "Error saving data to DB" };
    }
  } catch (error) {
    console.error("Error in fetchData:", error.message);
    return {
      success: false,
      errorMessage: "An error occurred while fetching data.",
    };
  }
});

const saveDataToDB = async (objectToSave) => {
  let time = new Date();
  console.log(objectToSave, "objectToSave from within saveDataToDB");

  let dataToSave = {
    date: time,
    horoscope: objectToSave.horoscope || {
      data: {},
      response: {
        success: false,
        errorMessage: "Horoscope data not available",
      },
    },
    joke: objectToSave.joke || {
      data: {},
      response: { success: false, errorMessage: "Joke data not available" },
    },
    moonPhase: objectToSave.moonPhase || {
      data: {},
      response: {
        success: false,
        errorMessage: "Moon phase data not available",
      },
    },
    forecast: objectToSave.forecast || {
      data: [],
      response: { success: false, errorMessage: "Forecast data not available" },
    },
    news: objectToSave.news || {
      data: [],
      response: { success: false, errorMessage: "News data not available" },
    },
  };

  console.log(dataToSave);

  const newData = new Data(dataToSave);
  console.log(newData);

  try {
    await newData.save();
    console.log("saved to db");
    // nodeMailerConfirmationEmail("HPNotePad", newData);
    return { success: true, message: "Data saved to DB" };
  } catch (error) {
    console.error("Error in saveDataToDB:", error.message);
    return { success: false, message: "Error saving data to DB" };
  }
};

const getDataByDate = asyncHandler(async (req, res) => {
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  try {
    const dateToFind = req.params.date;
    const startOfDay = new Date(dateToFind);
    const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000 - 1);

    let data = await Data.find({
      date: { $gte: startOfDay, $lte: endOfDay },
    }).exec();

    console.log(data);

    if (data.length === 0 && dateToFind === formatDate(new Date())) {
      console.log("No data found for today's date");

      const fetchDataResponse = await fetchData();
      console.log(fetchDataResponse);

      if (fetchDataResponse.success) {
        data = await Data.find({
          date: { $gte: startOfDay, $lte: endOfDay },
        }).exec();

        console.log("Data fetched successfully for today");
        return res.json(data);
      } else {
        console.log("Failed to fetch data for today");
        return res
          .status(500)
          .json({ message: "Failed to fetch data for today" });
      }
    } else if (data.length === 0 && dateToFind !== formatDate(new Date())) {
      console.log("No data found for this date (not today)");
      return res.status(404).json({ message: "Data not found for this date" });
    }

    if (data && data.length > 0) {
      return res.json(data);
    } else {
      console.log("No data found for this date");
      return res.json({ message: "No data found for this date" });
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    return res.status(500).json({
      message:
        "Internal server error - triggered getDataByDateFunction" +
        error.message,
    });
  }
});

//function to delete all data from before february 12th, 2023
const deleteAllData = asyncHandler(async (req, res) => {
  console.log("deleteAllData");

  const dateToFind = "2024-10-14";
  const startOfDay = new Date(dateToFind);
  console.log(startOfDay);
  const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000 - 1);

  try {
    const data = await Data.deleteMany({
      date: { $lte: endOfDay },
    });
    res.json(data);
    console.log("data deleted");
  } catch (error) {
    console.log(error.message);

    res.status(500).end();
  }
});

module.exports = { fetchData, getDataByDate, deleteAllData, nodeCronTrigger };
