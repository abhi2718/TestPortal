const Result = require("../models/result");

exports.index = async (req, res) => {
  try {
    const results = await Result.find().populate("userRef");
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

exports.createResult = async (req, res) => {
  const { score, userRef } = req.body;
  try {
    let result = new Result();
    result.score = score;
    result.userRef = userRef;
    result = await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};
