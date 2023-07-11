const mongoose = require("mongoose");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const user = await User.create(email, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};

module.exports = { createUser };
