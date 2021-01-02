const fs = require("fs");
module.exports = {
    registerRoutes(app){
        this.registerGetRoutesToApp(app, "/", "./routes/index.js")
        this.registerGetRoutesToApp(app, "/register", "./routes/register.js")
        this.registerStaticPage(app, "/css/indexna.css", "indexna.css")
        this.registerStaticPage(app, "/css/register.css", "register.css")
        this.registerStaticPage(app, "/js/na.js", "na.js")
    },

    registerGetRoutesToApp(app, path, jspath){
        app.get(path, function (req, res) {
            const page = require(jspath);
            page.showPage(res,req)
        })
    },

    registerGetRoutesToApp(app, path, jspath){
        app.post(path, function (req, res) {
            const page = require(jspath);
            page.showPage(res,req)
        })
    },

    registerStaticPage(app, path, opath){
        app.get(path, function (req, res) {
            fs.readFile('./routes/pages/'+opath, function(err, data) {
                res.write(data);
                res.end()
            });
        })
    }
}