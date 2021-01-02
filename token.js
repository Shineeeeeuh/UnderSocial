var crypto = require('crypto');

module.exports = {
    encryptText(t, salt){
        var hash = crypto.createHmac('sha512', salt);
        hash.update(t);
        var value = hash.digest('hex');
        return t;
    },
    createToken(jsoninfo){
        var fp = Buffer.from(jsoninfo.userid).toString('base64');
        var sp = this.encryptText(json.username+","+json.hashpassword, "JIJkjkKHUT12GFJI")
        return fp+"."+sp
    }
}

