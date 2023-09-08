const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

function startServerApp(port) {
  return app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}


exports.app = app;
exports.startServerApp = startServerApp;

