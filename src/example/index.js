const { parseXML, buildXML } = require("../index.js");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<root><child>Test XML</child></root>`;

(async () => {
  const json = await parseXML(xml);

  console.log("LOG:  ~ file: index.js ~ line 7 ~ json", json);

  const xml2 = buildXML(json);

  console.log("LOG:  ~ file: index.js ~ line 7 ~ xml2", xml2);
})();
