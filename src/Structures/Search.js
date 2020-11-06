const Constants = require("../Constants");
const { get } = require("../Utils");
const WeatherStruct = require("./Weather");
const cheerio = require("cheerio");
class Search {
  #_arb;
  #lang;
  constructor(data, lang) {
    this.#_arb = data;
    this.#lang = lang;
    this.results = this.#parseRes();
  }
  #parseRes() {
    let arr = [];
    for (let i = 0; i < this.#_arb.address.length; i++) {
      const data = {
        address: this.#_arb.address[i],
        adminDistrict: this.#_arb.adminDistrict[i],
        adminDistrictCode: this.#_arb.adminDistrictCode[i],
        city: this.#_arb.city[i],
        country: this.#_arb.country[i],
        countryCode: this.#_arb.countryCode[i],
        displayName: this.#_arb.displayName[i],
        timeZone: this.#_arb.ianaTimeZone[i],
        latitude: this.#_arb.latitude[i],
        placeId: this.#_arb.placeId[i],
        postalCode: this.#_arb.postalCode[i],
        iataCode: this.#_arb.iataCode[i],
        icaoCode: this.#_arb.icaoCode[i],
        lang: this.#lang,
      };
      arr.push(new SearchRes(data));
    }
    return arr;
  }
}
class SearchRes {
  #_placeId;
  #lang;
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
    this.#_placeId = data.placeId;
    this.postalCode = data.postalCode;
    this.iataCode = data.iataCode;
    this.icaoCode = data.icaoCode;
    this.#lang = data.lang;
  }
  async weather() {
    return new Promise((resolve, reject) => {
      const url = Constants.SearchURL(this.#_placeId, this.#lang);
      get(url).then((data) => {
        resolve(new WeatherStruct(cheerio.load(data)));
      });
    });
  }
}
module.exports = Search;
