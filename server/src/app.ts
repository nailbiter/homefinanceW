import express = require('express');
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
// Create a new express application instance
const app: express.Application = express();

app.use(morgan("tiny"));
app.get('/api/test', function (req, res) {
  res.send({some:"json"});
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port %d!',process.env.PORT);
});