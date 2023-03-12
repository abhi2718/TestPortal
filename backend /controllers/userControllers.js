const User = require("../models/user");

exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    let user = new User();
    user.name = name;
    user.email = email;
    user = await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};
