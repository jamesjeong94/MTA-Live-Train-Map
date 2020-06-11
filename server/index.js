const express = require('express');
const stopsRouter = require('./routes/stopsRouter.js');
require('dotenv').config();

const app = require('app');

const PORT = process.env.PORT || 3000;

app.use(express.static('../public'));
app.use('/subway', stopsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
