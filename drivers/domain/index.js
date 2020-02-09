const router = require('express').Router();

const eventsController = require('./controllers/events-controller')
const membersController = require('./controllers/members-controller')
const subscriptionController = require('./controllers/subscription-controller')
const invitationController = require('./controllers/invitation-controller')

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
      .delete('/event/:eventId/speakers/:speakerId')

router.get('/events/invitation', invitationController.sendInvitation)
      .delete('/events/invitation/:id', invitationController.changeInvitation)
      .delete('/events/invitation/:id', invitationController.cancelInvitation)

router.post('/events/subscriptions', subscriptionController.subscribe)
      .delete('/events/subscriptions/:subsId', subscriptionController.unsubscribe)

router.post('/events/members', membersController.createMember)
      .put('/events/members/:memberId', membersController.updateMember)
      .delete('/events/members/:memberId', membersController.deleteMember)

router.post('/events/admins')
      .put('/events/admins/:adminId')
      .delete('/events/admins/:adminId');
      
module.exports = router;
