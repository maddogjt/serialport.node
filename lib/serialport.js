
 serialportNodeRelativePath = "@serialport/bindings/build/Release/bindings.node";
const serialportNodeDestPath = require("./utils").getNodeFilePath(serialportNodeRelativePath);
require("./native_loader").load('serialport', serialportNodeDestPath);

SerialPort = require("serialport");
module.exports = SerialPort;