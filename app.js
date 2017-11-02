// Variables - Dependencies & Reqs
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
let routes = require('./routes/userRoutes');
let PORT = process.env.PORT || 3000;
const db = require('./models');


// Express - Initialize
const app = express();

// Express - Static routex
app.use("/public", express.static(__dirname + '/public'));

// Express - Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")


// Set Handlebars.




app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));


// Express - Handlebars
app.use(routes);


db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});