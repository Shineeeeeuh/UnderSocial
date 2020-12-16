const fs = require('fs')
module.exports = {
    showPage(res, req){
        fs.readFile('./routes/pages/index_noaccount.html', function(err, data) {
            res.write(data);
            res.end()
        });
    }
}