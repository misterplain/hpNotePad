const axios = require("axios");
const dotenv = require("dotenv");

const getNews = async () => {
    console.log(process.env.RAPID_API_KEY, "process.env.RAPID_API_KEY")
    const options = {
      method: "GET",
      url: "https://cnbc.p.rapidapi.com/news/v2/list-trending",
      params: {
        tag: "Articles",
        count: "5",
      },
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "cnbc.p.rapidapi.com",
      },
    };
  
    try {
      let response = await axios.request(options);
      if (response.status >= 200 && response.status < 300) {
        console.log("success");
        const items = response.data.data.mostPopularEntries.assets;
        const extractedData = items.slice(0, 5).map((item) => ({
          title: item.shorterHeadline,
          url: item.url,
          description: item.description,
          body: item.description,
          snippet: item.description,
          image: item.promoImage.url,
        }));
  
        return {
          data: extractedData,
          response: {
            success: true,
            errorMessage: "",
          },
        };
      } else {
        console.log("Error fetching news data");
        return {
          data: [],
          response: {
            success: false,
            errorMessage: "Error fetching news data",
          },
        };
      }
    } catch (error) {
      console.log({
        message: "Error in News",
        response: error,
      });
      return {
        data: [],
        response: {
          success: false,
          errorMessage: "Error fetching news data",
        },
      };
    }
  };

module.exports = { getNews };