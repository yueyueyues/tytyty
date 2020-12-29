var http = require('http')
var url = require("url")
var fs = require("fs")
var app = http.createServer()
app.listen(80)
app.on("request", (req, res) => {
    var objurl = url.parse(req.url);
    var router = objurl.pathname;
    if (router == "/" || router == "/html/index.html") {
        fs.readFile("./index.html", (err, buf) => {
            res.end(buf)
        });
    } else if (router.match(/(jpg|png|css|js)/)) {
        fs.readFile(`./${router}`, (err, buf) => {
            res.end(buf)
        })
    }
})