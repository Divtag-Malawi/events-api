const router = require('express').Router();

const eventsController = require('../drivers/domain/controllers/events-controller')
const membersController = require('../drivers/domain/controllers/members-controller')
const subscriptionController = require('../drivers/domain/controllers/subscription-controller')
const invitationController = require('../drivers/domain/controllers/invitation-controller')
const participantsController = require('../drivers/domain/controllers/participants-controller')
const speakersController = require('../drivers/domain/controllers/speakers-controller')

// Events Resource
router.get('/events', eventsController.getAllEvents)
      .get('/events/:eventId', eventsController.getSingleEvent)
      .post('/events', eventsController.createEvent)
      .put('/events', eventsController.updateMultipleEvents)
      .put('/events/:eventId', eventsController.updateSingleEvent)
      .delete('/events/', eventsController.deleteMultipleEvent)
      .delete('/events/:eventId', eventsController.deleteSingleEvent)

      //Event Participants
router.get('/events/:eventId/participants', participantsController.getParticipants)
      .get('/events/:eventId/participants/:participantId', participantsController.getSingleParticipant)
      .post('/events/:eventId/participants', participantsController.addParticipants)
      .delete('/events/:eventId/participants/:participantId', participantsController.deleteParticipant)

      // Event location
router.get('/events/:eventId/speaker',  speakersController.getSpeakers)
      .get('/events/:eventId/speakers/:speakerId', speakersController.getSingleSpeaker)
      .post('/event/:eventId/speakers', speakersController.addSpeakers)
      .delete('/event/:eventId/speakers/:speakerId', speakersController.deleteSpeaker)

      // Event Invitation
router.get('/events/invitation', invitationController.sendInvitation)
      .delete('/events/invitation/:id', invitationController.changeInvitation)
      .delete('/events/invitation/:id', invitationController.cancelInvitation)

      // Event Subscription
router.post('/events/subscriptions', subscriptionController.subscribe)
      .delete('/events/subscriptions/:subsId', subscriptionController.unsubscribe)
      // Event Members
router.post('/events/members', membersController.createMember)
      .put('/events/members/:memberId', membersController.updateMember)
      .delete('/events/members/:memberId', membersController.deleteMember)

router.post('/events/admins')
      .put('/events/admins/:adminId')
      .delete('/events/admins/:adminId');
      
module.exports = router;
