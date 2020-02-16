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

      .post('/events', eventsController.createEvent)
      .post('/events/:eventId/participants', eventsController.addParticipants)
      .post('/event/:eventId/speakers', eventsController.addSpeakers)

      .put('/events', eventsController.updateMultipleEvents)
      .put('/events/:eventId', eventsController.updateSingleEvent)
      
      .delete('/events/', eventsController.deleteMultipleEvent)
      .delete('/events/:eventId', eventsController.deleteSingleEvent)
      .delete('/events/:eventId/participants/:participantId', eventsController.deleteParticipant)
      .delete('/event/:eventId/speakers/:speakerId', eventsController.deleteSpeaker)

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
