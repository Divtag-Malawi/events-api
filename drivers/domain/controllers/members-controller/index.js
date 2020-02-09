const membersDb = require('../../../../data-access/members-db')
const {isEmpty, isUndefined} = require('lodash')

const public = {}
const private = {}

public.createMember = async (req, res) => {
  try {
    if (isEmpty(req.body)) {
      res.status(304).send('Not Modified')
    } else {
      const result = await membersDb.create(req.body)
      res.json({result})
    }
  } catch (e) {
    throw new Error(e).message
  }
}

public.updateMember = async (req, res) => {
  try {
    const {memberId} = req.params
    if (isUndefined(memberId)) {
      res.status(400).send('Bad Request: Unknown memberId')
    } else {
      const result = await membersDb.update({
        memberId
      }, req.body, {
        returnUpdate: false
      })

      res.json(result)
    }
  } catch (e) {
    throw new Error(e)
  }
}

public.deleteMember = async (req, res) => {
  try {
    const {memberId} = req.param
    console.log(req.params,'....', memberId)
  } catch (e) {
    throw new Error(e)
  }
}


const MembersController = public

module.exports = MembersController
