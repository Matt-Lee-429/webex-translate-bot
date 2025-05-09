const hasKorean = (text) => {
    return /(\S*[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+\S*)/.test(text);
}

const hasVietnamese = (text) => {
    return /\b(?=\w*[ăâđêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ])\w+\b/gi.test(text);
}

const removeMentionedBotNameFromTriggeredText = (text, botName) => {
    return text.replace(new RegExp(`^${botName}`, ''), "");
}

module.exports = {
    hasKorean,
    hasVietnamese,
    removeMentionedBotNameFromTriggeredText
};

