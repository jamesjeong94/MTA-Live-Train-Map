const stopHelper = require('../helpers/stopHelper.js');

module.exports = {
  getTrainStops: (req, res) => {
    let line = req.query.line;
    res.send({ line, data: stopHelper(line) });
  },
};
