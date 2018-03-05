
var express = require("express");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/datafromsql",function (req,res) {
  var sql1 = require("mssql");

  var config={
    user:"sa",
    password:"Test123!",
    server:"localhost",
    database:"Angular5"
  };

  sql1.connect(config,function (err) {

    var request1 = new sql1.Request();

    request1.query("select * from tblProducts",function (err,recordsData) {
      res.send(recordsData);
      sql1.close();
    })
  })


});

app.listen(8080);
console.log("8080 port started");
