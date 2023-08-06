const User = require("../schemas/user");

module.exports.getAllUsers = async () => {
  return await User.find({});
};

module.exports.getUser = async (username) => {
  return await User.findOne().where('username').equals(username);
}

module.exports.checkUser = async (username, password) => {
  return Boolean(await User.find().where('username').equals(username).where('password').equals(password).count());
};

module.exports.addUser = async (data) => {
  const user = new User(data);
  await user.save();

  return { success: user.id };
};

module.exports.updateTeam = async (id, team) => {
  await User.findByIdAndUpdate(id, {team: team});

  return { success: `id: ${id}, team: ${team}`};
};

module.exports.deleteTeam = async (id) => {
  User.updateOne({_id: id}, {$unset: {team: 1 }}).exec();

  return { success: id };
}
