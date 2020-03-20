
const path = require("path");
const serialportNodeDestPath = path.join(__dirname, `../@serialport/bindings/build/Release/bindings.node`);
require("./native_loader").load('serialport', serialportNodeDestPath);

SerialPort = require("serialport");
module.exports = SerialPort;