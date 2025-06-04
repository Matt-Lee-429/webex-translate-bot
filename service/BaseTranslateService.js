class BaseTranslateService{
    async translate(text){
        throw new Error('translate method must be implemented');
    }
}

module.exports = BaseTranslateService;