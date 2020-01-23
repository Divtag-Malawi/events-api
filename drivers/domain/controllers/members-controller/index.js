const membersDb = require('../../../../data-access/members-db');
const public = {};
const private = {};

public.createMember = async (req, res) => {
  try {
    const result = await membersDb.find({name: 'Njonjo'}, 'name');
    res.json({result})
  } catch (e) {
    throw new Error(e).message;
  }
}


const MembersController = public;

module.exports = MembersController;
