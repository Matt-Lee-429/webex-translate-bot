// require('dotenv').config();
const BaseTranslateService = require('./BaseTranslateService');
const {Translate} = require('@google-cloud/translate').v2;

class GoogleTranslateService extends BaseTranslateService {
    constructor() {
        super();
        this.translate = new Translate({
            key: process.env.GOOGLE_API_KEY,
        })
    }

    async translate(text, targetLang = 'en'){
        try {
            const [translation] = await translate.translate(text, targetLang);
            return translation;    
        } catch (error) {
            console.log("Error while using google translation API" + error);
            throw error;    
        }
    }
}

module.exports = GoogleTranslateService;