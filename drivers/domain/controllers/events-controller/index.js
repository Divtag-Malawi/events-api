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

public.getSingleEvent = async (req, res) => {
  try {
    const {eventId} = req.params
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

public.updateMultipleEvents = async (req, res) => {
  try {
    const {filter} = req.query
    const data = req.body

    console.log(req.body);
  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`);
  }
}

public.updateSingleEvent = async (req, res) => {
  try {
    const {eventId} = req.params
    const data = req.body

    res.json({eventId})
  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`);
  }
}

public.deleteMultipleEvent = async (req, res) => {
  try {
    const conditions = req.headers.deleteQuery
  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`);
  }
}

public.deleteSingleEvent = async (req, res) => {
  try {
    const {eventId} = req.params
  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`);
  }
}


const EventsController = public;

module.exports = EventsController;
