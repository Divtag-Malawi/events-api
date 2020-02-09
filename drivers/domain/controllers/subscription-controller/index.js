const public = {}

public.subscribe = async (req, res) => {
  try {
    res.json({status: 'OK'});
  } catch (e) {
    throw new Error(e)
  }
}

public.unsubscribe = async (req, res) => {
  try {
    res.json({status: 'OK'});
  } catch (e) {
    throw new Error(e)
  }
}

const SubscriptionController = public

module.exports = SubscriptionController
