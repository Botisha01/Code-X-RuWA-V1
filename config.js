const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=um5XCYbD#kaxhYGNUDQbsFJbjyC87y1dNFNu8MCSYf_X8QnuhONY", //put you session id
MONGODB: process.env.MONGODB || "mongodb://mongo:yqzUFafwPiAfqersdkRLcGAeDdYzbvuw@junction.proxy.rlwy.net:59749", //dont change
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};

