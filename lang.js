module.exports = {
    getJsonLangFile(lang){
        var a = require("./langs/"+lang+".json");
        return a;
    }
}