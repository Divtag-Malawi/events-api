const router = require('express').Router();

const eventsController = require('./controllers/events-controller')
const membersController = require('./controllers/members-controller')
const subscriptionController = require('./controllers/subscription-controller')
const invitationController = require('./controllers/invitation-controller')
const participantsController = require('./controllers/participants-controller')
const speakersController = require('./controllers/speakers-controller')

// Events Resource
router.get('/events', eventsController.getAllEvents)
      .get('/events/:eventId', eventsController.getSingleEvent)
      .get('/events/:eventId/participants', participantsController.getParticipants)
      .get('/events/:eventId/participants/:participantId', participantsController.getSingleParticipant)
      .get('/events/:eventId/speaker',  speakersController.getSpeakers)
      .get('/events/:eventId/speakers/:speakerId', speakersController.getSingleSpeaker)

      .post('/events', eventsController.createEvent)
      .post('/events/:eventId/participants', participantsController.addParticipants)
      .post('/event/:eventId/speakers', speakersController.addSpeakers)

      .put('/events', eventsController.updateMultipleEvents)
      .put('/events/:eventId', eventsController.updateSingleEvent)
      
      .delete('/events/', eventsController.deleteMultipleEvent)
      .delete('/events/:eventId', eventsController.deleteSingleEvent)
      .delete('/events/:eventId/participants/:participantId', participantsController.deleteParticipant)
      .delete('/event/:eventId/speakers/:speakerId', speakersController.deleteSpeaker)

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
