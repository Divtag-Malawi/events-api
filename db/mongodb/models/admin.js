const mongoose = require('../connection');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  adminId: String,
  firstname: String,
  lastname: String,
  username: String,
  avatar: String,
});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;