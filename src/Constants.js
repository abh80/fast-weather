class Constants {
  constructor() {
    this.url = "https://weather.com/api/v1/p/redux-dal";
  }
  SearchURL(pageID, lang = "en-US") {
    return "https://weather.com/" + lang + "weather/today/l/" + pageID;
  }
}
module.exports = new Constants();
