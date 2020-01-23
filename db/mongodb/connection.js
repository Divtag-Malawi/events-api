const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();
const mongoose = require("mongoose");
const {Mongo, Events} = require("../../config");
const {hostname, port, dbname} = Mongo;

mongoose.Promise = global.Promise;

// mongoose.set('debug', true);

/**
 * Establish a connection to mongoDB
 */
const mongoConnectUrl = `mongodb://${hostname}:${port}/${dbname}`;
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

async function connectDatabase() {
  try {
    const connection = await mongoose.connect(mongoConnectUrl, mongoOptions);
    // emitter.emit(Events.DB_CONN_OK, connection);
  } catch (e) {
    // emitter.emit(Events.DB_CONN_ERR, e);
  }
}

connectDatabase();

module.exports = mongoose;
