const fs = require('fs');
const lang = require("../lang")
module.exports = {
    showPage(res, req){
        var a;
        if(req.cookies['lang'] != "fr" && req.cookies['lang'] != "en"){
            a = lang.getJsonLangFile("en")
        }else{
            a = lang.getJsonLangFile(req.cookies['lang'])
        }
        if(req.cookies['user_token'] == null || req.cookies["user_token"] == ""){
            fs.readFile('./routes/pages/index_noaccount.html', function(err, data) {
                res.write(String(data).replace("%login%", a.login).replace("%register%", a.register).replace("%titlenapage%", a.titlenapage));
                res.end()
            });
        }
    }
}