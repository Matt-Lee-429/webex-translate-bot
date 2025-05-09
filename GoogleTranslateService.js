require('dotenv').config();
const {Translate} = require('@google-cloud/translate').v2;
const projectId = process.env.GOOGLE_API_KEY;

// Instantiates a client
const translate = new Translate({projectId});

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
  return translation;
}

const translateChatMessage = async (text) => {
    const target = 'en';
    try {
        const [translation] = await translate.translate(text, target);    
        return translation;
    } catch (error) {
        console.log("Error while using google translation API" + error);
        throw error;
    }
};

module.exports = {
    translateChatMessage
}