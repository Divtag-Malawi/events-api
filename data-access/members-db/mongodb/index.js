const Member = require('../../../db/mongodb/models/member');
const {isEmpty, isArray, isNull, isUndefined} = require('lodash')

const publicAccess = {}
const privateAccess = {}

privateAccess.mapDocument = data => ({
  id: data._id,
  memberId: data.memberId,
  firstname: data.firstname,
  lastname: data.lastname,
  username: data.username,
  avatar: data.avatar,
  role: data.role
})

privateAccess.serialize = payload => {
  if (!payload || isNull(payload)) {
    return null
  }

  if (isArray(payload)) {
    return payload.map(privateAccess.mapDocument)
  }

  return privateAccess.mapDocument(payload)
}

publicAccess.finRow = async (conditions, projections = '') => {
  try {
    let result = {};

    if (isEmpty(projections)) {
      result = await Member.findOne(conditions)
    } else {
      result = await Member.findOne(conditions, projections)
    }

    return result
  } catch (e) {
    return e;
  }
}

publicAccess.find = async (conditions, projections) => {
  try {
    return {conditions, projections};
  } catch (e) {
    return e;
  }
}

publicAccess.findOrWhere = async (conditions, projections) => {
  
}

publicAccess.create = async data => {
  try {
    const {memberId, firstname, lastname, username, avatar, role} = data
    let result = null
    const existence = await publicAccess.finRow({memberId})

    if (isEmpty(existence)) {
      const eventMember = new Member();

      eventMember.memberId = memberId;
      eventMember.firstname = firstname;
      eventMember.lastname = lastname;
      eventMember.username = username;
      eventMember.avatar = avatar;
      eventMember.role = role;

      result = await eventMember.save();
    }

    return privateAccess.serialize(result)
  } catch (e) {
    return e
  }
}

publicAccess.update = async (conditions, update, options = null) => {
  try {
    let result = false
    const {multiple = false} = options

    if (multiple) {
      result = await Member.updateMany(conditions, {$set: update})
    } else {
      result = await Member.findOneAndUpdate(conditions, {$set: update}, {new: true})
    }

    if (isUndefined(result.nModified)) {
      return privateAccess.serialize(result)
    }

    return result;
  } catch(e) {
    return e
  }
}

publicAccess.deleteWhere = async (conditions, multiple = false) => {
  try {
    if (!multiple) {
      return Member.deleteOne(conditions)
    }
    
    return Member.deleteMany(conditions)
  } catch(e) {
    return e
  }
}

publicAccess.deleteOrWhere = async (conditions, options) => {

}

const MemberDb = publicAccess;

module.exports = MemberDb;
