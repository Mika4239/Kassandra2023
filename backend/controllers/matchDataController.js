const matchData = require('../schemas/matchData');

module.exports.getAllData = async () => {
    return await matchData.find({});
};