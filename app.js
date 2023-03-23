const express = require("express");
const cors = require('cors');
const app = express();


function startServerApp(port) {
  return app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

app.use(cors());

exports.app = app;
exports.startServerApp = startServerApp;

