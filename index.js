//  EXPRESS
const express = require("express");
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res, next) => {
  res.json('Welcome to your new API')
})

app.get("*", (req, res, next) => {
  res.redirect("/");
})

// -- API server definition
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});