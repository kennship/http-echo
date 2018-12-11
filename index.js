var express = require('express')
var bodyParser = require('body-parser') 

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', (req, res) => {
  res.json({
    service: process.env.SERVICE_NAME || undefined, // Keys with value `undefined` are omitted during JSON serialization
    path: req.path,
    headers: req.headers,
    method: req.method,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    protocol: req.protocol,
    query: req.query,
    subdomains: req.subdomains,
    xhr: req.xhr,
  })
})

app.listen(process.env.PORT || 3000)
