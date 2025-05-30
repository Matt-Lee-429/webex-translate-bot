const BaseTranslateService = require('./BaseTranslateService');
const axios = require('axios');
const Util = require('../StringUtils');

class AimemberTranslateService extends BaseTranslateService {
    constructor() {
        super();
        this.apiToken = process.env.AIMEMBER_API_KEY;
        this.apiEndpoint = process.env.LOTTE_AI_API_ENDPOINT;
        this.options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.apiToken,
            }
        };
    }

    async translate(text) {
        let srcLang = 'EN';
        let descLang = 'KO';

        if (Util.hasVietnamese(text)){
            srcLang = 'VI';
            descLang = 'KO';
        } else if (Util.hasKorean(text)){
            srcLang = 'KO';
            descLang = 'EN-US';
        }

        const body = {
            "doc": text,
            "src_lang": srcLang,
            "tgt_lang": descLang,
        }

        try {
            const translation = await axios.post(`${this.apiEndpoint}/api/translate`, body, this.options)
            return translation.data.result.length === 1 ? translation.data.result[0].DEEPL : translation.data.result[1].DEEPL;
        } catch (error) {
            console.error("Error while using Aimember Translation API: " + error);
            throw error;
        }
    }
}

module.exports = AimemberTranslateService;