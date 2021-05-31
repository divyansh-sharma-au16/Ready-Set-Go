const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAync');

exports.getAllusers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  // Send Response

  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
});
exports.addUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};
