const public = {}

public.getSpeakers = async (req, res) => {
  try {
    const {eventId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.getSingleSpeaker = async (req, res) => {
  try {
    const {eventId, speakerId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.addSpeakers = async (req, res) => {
  try {
    const {eventId} = req.params
    const speakers = req.body;

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

public.deleteSpeaker = async (req, res) => {
  try {
    const {eventId, speakerId} = req.params

  } catch (e) {
    res.status(400).send(`'Bad Request:' ${new Error(e).message}`)
  }
}

const SpeakersController = public

module.exports = SpeakersController
