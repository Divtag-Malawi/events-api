const mongoose = require("mongoose");
const {DB, OPTIONS} = require('./mongo-config');

mongoose.Promise = global.Promise;

// Debugging MongoDB
// mongoose.set('debug', true);

const mongoClient = `mongodb://${DB.hostname}:${DB.port}/${DB.dbname}`;

async function connectDatabase() {
  try {
    return await mongoose.connect(mongoClient, OPTIONS);
  } catch (e) {
    throw new Error(e).message;
  }
}

connectDatabase();

module.exports = mongoose;
