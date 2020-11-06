const SearchStruct = require("./Structures/Search");
const Constants = require("./Constants");
const { post } = require("./Utils");
class Weather {
  //use en-US for F
  static async search(
    query,
    options = {
      language: "en-GB",
    }
  ) {
    return new Promise(async (resolve, reject) => {
      if (!query) reject("No query was provided");
      const data = await post(Constants.url, [
        {
          name: "getSunV3LocationSearchUrlConfig",
          params: {
            query: query,
            language: options.language,
            locationType: "locale",
          },
        },
      ]);
      const SearchRes = new SearchStruct(
        data.dal.getSunV3LocationSearchUrlConfig[
          "language:" + options.language + ";locationType:locale;query:" + query
        ].data.location,
        options.language
      );
      resolve(SearchRes);
    });
  }
}
module.exports = Weather;
