const router = require('express').Router();

const eventsController = require('./controllers/events-controller');
const membersController = require('./controllers/members-controller');

// Events Resource
router.get('/events', eventsController.getAllEvents)
      .get('/events/:eventId')
      .get('/events/:eventId/participants')
      .get('/events/:eventId/participants/:participantId')
      .get('/events/:eventId/speaker')
      .get('/events/:eventId/speakers/:speakerId')

      .post('/events')
      .post('/events/:eventId/participants')
      .post('/event/:eventId/speakers')

      .put('/events')
      .put('/events/:eventId')

      .delete('/events/:eventId')
      .delete('/events/:eventId/participants/:participantId')
      .delete('/event/:eventId/speakers/:speakerId');

router.post('/members', membersController.createMember)
      .put('/members/:memberId')
      .delete('/members/:memberId')

router.post('/admins')
      .put('/admins/:adminId')
      .delete('/admins/:adminId');
      
module.exports = router;
