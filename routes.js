module.exports = {
    registerRoutes(app){
        this.registerRoutesToApp(app, "/", "./routes/index.js")
    },

    registerRoutesToApp(app, path, jspath){
        app.get(path, function (req, res) {
            const page = require(jspath);
            page.showPage(res,req)
        })
    }
}