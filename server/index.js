const express = require('express');
const cors = require('cors');
const stopsRouter = require('./routes/stopsRouter.js');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.static('../public'));
app.use('/subway', stopsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
