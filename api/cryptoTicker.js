const axios = require("axios");

const cryptoTickerQueryConfig = {
  url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  headers: {
    "X-CMC_PRO_API_KEY": process.env.CMCAPIKey,
  },
  params: {
    limit: 3,
  },
};

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  axios(cryptoTickerQueryConfig).then((response) => {
    res.send(response.data);
  });
};
