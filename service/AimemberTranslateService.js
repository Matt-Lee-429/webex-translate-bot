require('dotenv').config();
var axios = require('axios');
var bodyParser = require('body-parser');
const API_TOKEN = process.env.AIMEMBER_API_KEY;
const API_ENDPOINT = process.env.LOTTE_AI_API_ENDPOINT;

const option ={
    "Content-Type": "application/json",
    "Authorization": "Bearer " + API_TOKEN,
};

const translateChatMessagetoEN = async (text) => {
    const src_lang = 'ko'
    const tgt_lang = 'en-us';

    const body = {
        "doc": text,
        "src_lang": src_lang,
        "tgt_lang": tgt_lang,
    }

    try {
        const translation = await axios.post(API_ENDPOINT + "/api/translate", body, {headers: option});
        if (translation.data.result.length == 1){
            console.log(translation.data.result[0].DEEPL);
            return translation.data.result[0].DEEPL;
        }
        else {
            console.log(translation.data.result[1].DEEPL);
            return translation.data.result[1].DEEPL;
        }
    } catch (error) {
        console.log("Error while using Aimember translation API" + error);
        throw error;
    }
};

const translateChatMessagetoKR = async (text) => {
    const src_lang = 'en'
    const tgt_lang = 'ko';

    const body = {
        "doc": text,
        "src_lang": src_lang,
        "tgt_lang": tgt_lang,
    }

    try {
        const translation = await axios.post(API_ENDPOINT + "/api/translate", body, {headers: option});
        if (translation.data.result.length == 1){
            console.log(translation.data.result[0].DEEPL);
            return translation.data.result[0].DEEPL;
        }
        else {
            console.log(translation.data.result[1].DEEPL);
            return translation.data.result[1].DEEPL;
        }
    } catch (error) {
        console.log("Error while using Aimember translation API" + error);
        throw error;
    }
};

module.exports = {
    translateChatMessagetoEN,
    translateChatMessagetoKR
}