class BaseTranslateService{
    async translate(text, targetLang){
        throw new Error('translate method must be implemented');
    }
}

module.exports = BaseTranslateService;