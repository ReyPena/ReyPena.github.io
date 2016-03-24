var express = require("express")
  , cors = require("cors")
  , path = require("path")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , mongoUri = "mongodb://localhost/portfolio"
  , app = express()
  , port = 80;


  app.use(express.static(path.resolve("public/")));
  app.use(bodyParser.json());
  app.use(cors());

  app.use(function(req, res){
    res.sendFile(path.resolve("public/index.html"));
  });


  mongoose.connect(mongoUri);
  mongoose.connection.once("open", function () {
    console.log("connected" + mongoUri);
  });

  app.listen(port, function () {
    console.log("listen " + port);
  });
