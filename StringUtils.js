const hasKorean = (text) => {
    return /(\S*[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]+\S*)/.test(text);
}

const hasVietnamese = (text) => {
    return /\b(?=\w*[ăâđêôơưáàảãạấầẩẫậắằẳẵặéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵ])\w+\b/gi.test(text);
}

const deleteDoubleDollarSign = (text) => {
    return text.replace(/^(\s*)\$\$/, '');
};

const startsWithDoubleDollarSign = (text) => {
    return /^(\s*)\$\$/.test(text);
}

const deleteDoubleHash = (text) => {
    return text.replace(/^(\s*)##/, '');
}

const startsWithDoubleHash = (text) => {
    return /^(\s*)##/.test(text);
}

const deleteDoubleCaret = (text) => {
    return text.replace(/^(\s*)\^\^/, '');
}

const startsWithDoubleCaret = (text) => {
    return /^(\s*)\^\^/.test(text);
}

const deleteDoubleAmpersand = (text) => {
    return text.replace(/^(\s*)&&/, '');
}

const startsWithDoubleAmpersand = (text) => {
    return /^(\s*)&&/.test(text);
}

const isStartsWithSpecialChar = (text) =>{
    return /^(\s*)(\$\$|##|\^\^|&&)/.test(text);
}

module.exports = {
    hasKorean,
    hasVietnamese,
    deleteDoubleDollarSign,
    startsWithDoubleDollarSign,
    deleteDoubleHash,
    startsWithDoubleHash,
    deleteDoubleAmpersand,
    startsWithDoubleAmpersand,
    deleteDoubleCaret,
    startsWithDoubleCaret,
    isStartsWithSpecialChar,
};

