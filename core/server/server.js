var express = require("express")
  , mongoose = require("mongoose")
  , path = require("path")
  , app = express()
  , port = process.env.PORT || 3000;


  app.use(express.static(path.resolve("public/")));

  app.use(function(req, res){
    res.sendFile(path.resolve("public/index.html"));
  });


  app.listen(port, function () {
    console.log("listen " + port);
  });
