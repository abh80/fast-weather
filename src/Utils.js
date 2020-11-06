const axios = require("axios");
module.exports.post = async (url, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        method: "post",
        url: url,
        data: payload,
      });
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports.get = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(url);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};
