const Event = require('../../../db/mongodb/models/event')

const public = {}
const private = {}

public.findRow = async (conditions, projections) => {
  try {
    return {conditions, projections}
  } catch (e) {
    return e
  }
}

public.find = async (conditions, projections) => {
  try {
    return {conditions, projections}
  } catch (e) {
    return e
  }
}

public.findOrWhere = async (conditions, projections) => {
  
}

public.create = async conditions => {

}

public.update = async (conditions, update, config) => {

}

public.deleteWhere = async (conditions, config) => {

}

public.deleteOrWhere = async (conditions, config) => {

}

const EventsDb = public

module.exports = EventsDb
