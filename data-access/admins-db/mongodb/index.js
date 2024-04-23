const Admin = require('../../../db/mongodb/models/admin');

const publicAccess = {};
const privateAccess = {};

publicAccess.row = async (conditions, projections) => {
  try {
    return {conditions, projections};
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

publicAccess.create = async conditions => {

}

publicAccess.update = async (conditions, update, config) => {

}

publicAccess.deleteWhere = async (conditions, config) => {

}

publicAccess.deleteOrWhere = async (conditions, config) => {

}

const AdminDb = publicAccess;

module.exports = AdminDb;