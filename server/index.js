const express = require('express');
require('dotenv').config();

const app = require('app');

const PORT = process.env.PORT || 3000;

app.use(express.static('../public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
