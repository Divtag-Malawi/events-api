const urlDigester = require('./url-digester');
const eventsDb = require('../../../../data-access/events-db');

const public = {};
const private = {};

public.getAllEvents = async (req, res) => {
  try {
    const result = await eventsDb.find();
    res.json({result});
  } catch (e) {
    throw new Error(e).message;
  }
};

public.createEvent = async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`);
  }
}


const EventsController = public;

module.exports = EventsController;
