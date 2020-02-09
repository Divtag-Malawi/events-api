/**
 * @author Nejat Mhango
 * Twitter: https://twitter.com/MooreNejat
 * GitHub: https://twitter.com/nejat-njonjo
 */

const public = {}

public.sendInvitation = async (req, res) => {
  try {
    res.json({status: 'send OK'})
  } catch(e) {
    throw new Error(e)
  }
}

public.changeInvitation = async (req, res) => {
  try {
    res.json({status: 'change OK'})
  } catch (e) {
    throw new Error(e)
  }
}

public.cancelInvitation = async (req, res) => {
  try {
    res.json({status: 'cancel OK'})
  } catch (e) {
    throw new Error(e)
  }
}

const InvitationController = public

module.exports = InvitationController
