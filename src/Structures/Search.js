const Constants = require("../Constants");
const { get } = require("../Utils");
const WeatherStruct = require("./Weather");
const cheerio = require("cheerio");
class Search {
  constructor(data, lang) {
    this.arb = data;
    this.lang = lang;
    this.results = this.parseRes();
  }
parseRes() {
    let arr = [];
    for (let i = 0; i < this.arb.address.length; i++) {
      const data = {
        address: this.arb.address[i],
        adminDistrict: this.arb.adminDistrict[i],
        adminDistrictCode: this.arb.adminDistrictCode[i],
        city: this.arb.city[i],
        country: this.arb.country[i],
        countryCode: this.arb.countryCode[i],
        displayName: this.arb.displayName[i],
        timeZone: this.arb.ianaTimeZone[i],
        latitude: this.arb.latitude[i],
        placeId: this.arb.placeId[i],
        postalCode: this.arb.postalCode[i],
        iataCode: this.arb.iataCode[i],
        icaoCode: this.arb.icaoCode[i],
        lang: this.lang,
      };
      arr.push(new SearchRes(data));
    }
    return arr;
  }
}
class SearchRes {
  constructor(data) {
    this.address = data.address;
    this.district = {
      name: data.adminDistrict,
      code: data.adminDistrictCode,
    };
    this.city = data.city;
    this.country = {
      name: data.country,
      code: data.countryCode,
    };
    this.name = data.displayName;
    this.timezone = data.timeZone;
    this.latitude = data.latitude;
    this.placeId = data.placeId;
    this.postalCode = data.postalCode;
    this.iataCode = data.iataCode;
    this.icaoCode = data.icaoCode;
    this.lang = data.lang;
  }
  async weather() {
    return new Promise((resolve, reject) => {
      const url = Constants.SearchURL(this.placeId, this.lang);
      get(url).then((data) => {
        resolve(new WeatherStruct(cheerio.load(data)));
      });
    });
  }
}
module.exports = Search;
