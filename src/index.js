const xml2js = require("xml2js");

const parseXML = (xml) =>
  new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({ explicitArray: false });
    parser.parseString(xml, function (err, result) {
      if (err) {
        console.log("LOG:  ~ file: xml.js ~ line 7 ~ err", err.message);
        return reject(err);
      }

      return resolve(result);
    });
  });

const buildXML = (json) => {
  const builder = new xml2js.Builder();
  return builder.buildObject(json);
};

module.exports = {
  parseXML,
  buildXML,
};
