// require('dotenv').config();
const BaseTranslateService = require('./BaseTranslateService');
const {Translate} = require('@google-cloud/translate').v2;
const Util = require('../StringUtils');

class GoogleTranslateService extends BaseTranslateService {
    constructor() {
        super();
        this.translateClient = new Translate({
            key: process.env.GOOGLE_API_KEY,
        })
    }

    async translate(text){
        let descLang = '';

        if(Util.startsWithDoubleDollarSign(text)){
            text = Util.deleteDoubleDollarSign(text);
            descLang = 'KO';
        } else if(Util.startsWithDoubleHash(text)){
            text = Util.deleteDoubleHash(text);
            descLang = 'MN';
        } else if(Util.startsWithDoubleCaret(text)){
            text = Util.deleteDoubleCaret(text);
            descLang = 'EN';
        } else if(Util.startsWithDoubleAmpersand(text)){
            text = Util.deleteDoubleAmpersand(text);
            descLang = 'VI';
        }

        try {
            const [translation] = await this.translateClient.translate(text, descLang);
            return translation;    
        } catch (error) {
            console.log("Error while using google translation API" + error);
            throw error;    
        }
    }
}

module.exports = GoogleTranslateService;