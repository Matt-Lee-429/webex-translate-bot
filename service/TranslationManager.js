class TranslationManager {
    constructor() {
        this.services = new Map();
        this.currentService = null;
    }

    addService(name, service) {
        this.services.set(name, service);
        if(!this.currentService) {
            this.currentService = service;
        }
    }

    setCurrentService(name){
        if(!this.services.has(name)){
            throw new Error(`Service ${name} not found`);
        }
        this.currentService = this.services.get(name);
    }

    async translate(text, targetLang) {
        if(!this.currentService) {
            throw new Error("No translation Service provided");
        }
        return await this.currentService.translate(text, targetLang);
    }
}

module.exports = TranslationManager;