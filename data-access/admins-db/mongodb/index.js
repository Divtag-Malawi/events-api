const Admin = require('../../../db/mongodb/models/admin');

const public = {};
const private = {};

public.row = async (conditions, projections) => {
  try {
    return {conditions, projections};
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

public.create = async conditions => {

}

public.update = async (conditions, update, config) => {

}

public.deleteWhere = async (conditions, config) => {

}

public.deleteOrWhere = async (conditions, config) => {

}

const AdminDb = public;

module.exports = AdminDb;