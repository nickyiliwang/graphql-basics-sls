const axios = require("axios");
let url = "https://countries.trevorblades.com";

exports.handler = async function (event, context, callback) {
  let countryData;
  const { query } = JSON.parse(event.body);
  console.log(query);

  countryData = await makeRequestToUrl(query);

  return {
    statusCode: 200,
    body: JSON.stringify(countryData),
  };
};

const makeRequestToUrl = async (q) => {
  try {
    const response = await axios({
      url: url,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: getProperGraphQLQuery(q),
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      message: JSON.stringify("something went wrong", error),
    };
  }
};

const getProperGraphQLQuery = (request) => {
  switch (request) {
    case "countries":
      const query = `
          {
              countries {
                name
                code
              }
            }`;

      return query;

    // case "countries":
    //   break;

    default:
      break;
  }
};
