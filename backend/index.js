
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Your API routes go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
