
const path = require("path");
const detectionNodeDestPath = path.join(__dirname, `../usb-detection/build/Release/detection.node`);
require("./native_loader").load('detector', detectionNodeDestPath);

detector = require("usb-detection");
module.exports = detector;
