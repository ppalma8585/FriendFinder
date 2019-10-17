const express = require('express')
const app = express()
var bodyParser = require("body-parser");
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))