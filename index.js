require('dotenv').config();
var framework = require('webex-node-bot-framework');
const webhook = require('webex-node-bot-framework/webhook');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Util = require('./StringUtils');

const TranslationManager = require('./service/TranslationManager');
const GoogleTranslateService = require('./service/GoogleTranslateService');
const AimemberTranslateService = require('./service/AimemberTranslateService');

const translationManager = new TranslationManager();

translationManager.addService('google', new GoogleTranslateService());
translationManager.addService('aimember', new AimemberTranslateService());

app.use(bodyParser.json());

const config = {
    token: process.env.BOTTOKEN,
    port: process.env.PORT,
}
// init framework
var framework = new framework(config);
framework.start().then(() => console.log("Framework Started."));
framework.on('initialized', () => console.log("Framework Initialized [Press Ctrl C to quit]"));

// spawn event
framework.on('spawn', (bot, id, addedBy) => {
    if(!addedBy){
        console.log(`While starting up, the framework found our bot in a space called: ${bot.room.title}`)
    }
    else {
        bot.webex.people
        .get(addedBy)
        .then((user) => {
            msg = `Hello there. I am a bot that can help you with translation.`;
        })
        .catch((e) => {
            console.error(
            `Failed to lookup user details in framwork.on("spawn"): ${e.message}`
            );
            msg = `Hello there. ${msg}`;
        })
        .finally(() => {
            if (bot.isDirect) {
            bot.say("markdown", msg);
            } else {
            let botName = bot.person.displayName;
            msg += `\n\nDon't forget, in order for me to see your messages and translate in this group space, be sure to *@mention* ${botName}.`;
            msg += `\n\n### usage:`;
            msg += `\n\nTo Korean `;
            msg += `\n\n* From English and Vietnamese : \`@${botName}message\``;
            msg += `\n\n* From every language : \`@${botName}$$message\` *(needs $$)*`;
            msg += `\n\nTo English`;
            msg += `\n\n* From Korean : \`@${botName}message\``;
            msg += `\n\n* From every language : \`@${botName}^^message\` *(needs ^^)*`;
            msg += `\n\nTo Mongolian`;
            msg += `\n\n* From every language : \`@${botName}##message\` *(needs ##)*`;
            msg += `\n\nTo Vietnamese`;
            msg += `\n\n* From every language : \`@${botName}&&message\` *(needs &&)*`;
            // msg += `\n\nTo Vietnamese`;
            // msg += `\n\n* From every language : \`@${botName}&&message\` *(needs &&)*`;
            bot.say("markdown", msg);
            }
        });
    }
});

framework.hears(
  /.*/,
  async (bot, trigger) => {
    if(Util.isStartsWithSpecialChar(trigger.command)){
        try {
            translationManager.setCurrentService('google');
            const translated = await translationManager.translate(trigger.command)
            bot.say(translated);
        } catch (error) {
            console.log("Error in google translation service");
        }
    }
    else {
        try {
            translationManager.setCurrentService('aimember');
            const translated = await translationManager.translate(trigger.command);
            bot.say(translated);
        } catch (error) {
            console.log("Error in aimember translation service" + error);
        }
    }
    console.log(`catch-all handler fired for user input: ${trigger.command}`);
  },
  99999
);

app.post('/', webhook(framework));

var server = app.listen(config.port, () => {
    console.log(`Bot is listening on port ${config.port}`);
});

// graceful shutdown
process.on("SIGINT", () => {
    framework.debug("stopping...");
    server.close();
    framework.stop().then(() => {
        process.exit();
    })
});

