const public = {}

public.getParticipants = async (req, res) => {
  try {
    const {eventId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.getSingleParticipant = async (req, res) => {
  try {
    const {eventId, participantId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.addParticipants = async (req, res) => {
  try {
    const {eventId} = req.params
    const participants = req.body

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.deleteParticipant = async (req, res) => {
  try {
    const {participantId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}
const ParticipantController = public

module.exports = ParticipantController
