import User from "../model/user.js";
import CryptoJS  from "crypto-js";
const updateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    // if there is password to change then fist we encrypt this
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRECT_KEY
      ).toString();
    }
    try {
      /** @dev updateing user with body  */
      const users = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },{new:true});
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error);
    }
  } else res.status(403).json("You can update only your account");
};

export {updateUser}