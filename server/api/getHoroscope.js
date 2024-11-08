const axios = require("axios");
const dotenv = require("dotenv");

const getHoroscope = async (signHS) => {
  const options = {
    method: "GET",
    url: `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${signHS}&day=TODAY`,
    headers: {
      accept: "application/json",
    },
  };
  try {
    let response = await axios.request(options);
    console.log(response);
    if (response.data.data.horoscope_data) {
      return {
        data: response.data.data.horoscope_data,
        response: {
          success: true,
          errorMessage: "",
        },
      };
    } else {
      return {
        data: "no horoscope data",
        response: {
          success: false,
          errorMessage: "Horoscope not found or API error",
        },
      };
    }
  } catch (error) {
    console.log({
      message: "Error in Horoscope",
      response: error,
    });
    return {
      data: "no horoscope data",
      response: {
        success: false,
        errorMessage: "Error fetching horoscope",
      },
    };
  }
};

module.exports = { getHoroscope };

// const getHoroscope = async (signHS) => {

//   const options = {
//     method: "GET",
//     url: `https://ohmanda.com/api/horoscope/${signHS}/`,
//     httpsAgent: agent,
//   };
//   try {
//     let response = await axios.request(options);
//     if (response.data.horoscope) {
//       return {
//         data: response.data.horoscope,
//         response: {
//           success: true,
//           errorMessage: "",
//         },
//       };
//     } else {
//       return {
//         data: {},
//         response: {
//           success: false,
//           errorMessage: "Horoscope not found or API error",
//         },
//       };
//     }
//   } catch (error) {
//     console.log({
//       message: "Error in Horoscope",
//       response: error,
//     });
//     return {
//       data: {},
//       response: {
//         success: false,
//         errorMessage: "Error fetching horoscope",
//       },
//     };
//   }
// };

// const getHoroscope = async (signHS) => {

//     const options = {
//       method: 'GET',
//       hostname: 'horoscope-astrology.p.rapidapi.com',
//       port: null,
//       path: '/horoscope?day=today&sunsign=${signHS}',
//       headers: {
//         'x-rapidapi-key': '0824a2c382mshb6a7ecac1677e76p11250cjsndc3ea1d6ec95',
//         'x-rapidapi-host': 'horoscope-astrology.p.rapidapi.com'
//       }
//     };
//     try {
//       let response = await axios.request(options);
//       console.log(response)
//       if (response.data.horoscope) {
//         return {
//           data: response.data.horoscope,
//           response: {
//             success: true,
//             errorMessage: "",
//           },
//         };
//       } else {
//         return {
//           data: {},
//           response: {
//             success: false,
//             errorMessage: "Horoscope not found or API error",
//           },
//         };
//       }
//     } catch (error) {
//       console.log({
//         message: "Error in Horoscope",
//         response: error,
//       });
//       return {
//         data: {},
//         response: {
//           success: false,
//           errorMessage: "Error fetching horoscope",
//         },
//       };
//     }
//   };
