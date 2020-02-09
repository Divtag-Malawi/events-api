const mongoose = require('../connection')
const Schema = mongoose.Schema

const MemberSchema = new Schema({
  memberId: String,
  firstname: String,
  lastname: String,
  username: String,
  avatar: String,
  banner: String,
  role: String
})

const Member = mongoose.model('Member', MemberSchema)

module.exports = Member