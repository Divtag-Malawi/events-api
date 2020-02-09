const Member = require('../../../db/mongodb/models/member');
const {isEmpty, isArray, isNull, isUndefined} = require('lodash')

const public = {}
const private = {}

private.mapDocument = data => ({
  id: data._id,
  memberId: data.memberId,
  firstname: data.firstname,
  lastname: data.lastname,
  username: data.username,
  avatar: data.avatar,
  role: data.role
})

private.serialize = payload => {
  if (!payload || isNull(payload)) {
    return null
  }

  if (isArray(payload)) {
    return payload.map(private.mapDocument)
  }

  return private.mapDocument(payload)
}

public.finRow = async (conditions, projections = '') => {
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

public.find = async (conditions, projections) => {
  try {
    return {conditions, projections};
  } catch (e) {
    return e;
  }
}

public.findOrWhere = async (conditions, projections) => {
  
}

public.create = async data => {
  try {
    const {memberId, firstname, lastname, username, avatar, role} = data
    let result = null
    const existence = await public.finRow({memberId})

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

    return private.serialize(result)
  } catch (e) {
    return e
  }
}

public.update = async (conditions, update, options = null) => {
  try {
    let result = false
    const {multiple = false} = options

    if (multiple) {
      result = await Member.updateMany(conditions, {$set: update})
    } else {
      result = await Member.findOneAndUpdate(conditions, {$set: update}, {new: true})
    }

    if (isUndefined(result.nModified)) {
      return private.serialize(result)
    }

    return result;
  } catch(e) {
    return e
  }
}

public.deleteWhere = async (conditions, multiple = false) => {
  try {
    let result = false;
    
    if (!multiple) {
      result = await Member.deleteOne(conditions)
    } else {
      result = await Member.deleteMany(conditions)
    }
  } catch(e) {
    return e
  }
}

public.deleteOrWhere = async (conditions, options) => {

}

const MemberDb = public;

module.exports = MemberDb;
