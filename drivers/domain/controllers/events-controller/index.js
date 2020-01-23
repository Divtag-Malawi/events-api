const urlDigester = require('./url-digester');
const eventsDb = require('../../../../data-access/events-db');

const public = {};
const private = {};

public.getAllEvents = async (req, res) => {
  try {
    const result = await eventsDb.find({id: '1933'}, 'name');
    res.json({result});
  } catch (e) {
    throw new Error(e).message;
  }
};


const EventsController = public;

module.exports = EventsController;
