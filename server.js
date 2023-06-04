//Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.static('public'));

//Listening for port
app.listen(PORT, () =>
  console.log(`App is listening at http://localhost:${PORT}`)
);
