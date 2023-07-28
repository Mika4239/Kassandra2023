const MatchData = require('../schemas/matchData');
const matchData = require('../schemas/matchData');

module.exports.getAllData = async () => {
    return await matchData.find({});
};

module.exports.getKeys = () => {
    const keys = [];
    matchData.schema.eachPath((path) => {
        (path.includes('.') && !path.includes('comments')) && keys.push(path);
    });

    return keys;
};

module.exports.addMatchData = async (data) => {
    const matchData = new MatchData(data);
    matchData.save();

    return {success: matchData.id};
};