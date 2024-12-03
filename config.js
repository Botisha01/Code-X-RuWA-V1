const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=u7AH0KgB#5s7j4C2IZz0u4isD1NcBBgD14TvWCvIXWLT9kbLbxnk", //put you session id
MONGODB: process.env.MONGODB || "", //dont change
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};

