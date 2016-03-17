var express = require("express")
  , cors = require("cors")
  , path = require("path")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , mongoUri = "mongodb://localhost:27017/guitar-store"
  , app = express()
  , port = 8080;

  app.use(express.static(path.resolve("public/")));
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/*', function(req, res){
    res.sendFile(path.resolve("public/index.html"));
  });

  mongoose.connect(mongoUri);
  mongoose.connection.once("open", function () {
    console.log("connected" + mongoUri);
  });

  app.listen(port, function () {
    console.log("listen " + port);
  });
