const mongoose = require('../connection');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  participant: {
    type: Schema.Types.ObjectId,
    ref: 'Members'
  },
  role: String
});

const EventSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Admins'
  },
  title: String,
  category: String,
  description: String,
  startAt: Date,
  endAt: Date,
  venue: String,
  participants: [ParticipantSchema],
  status: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
