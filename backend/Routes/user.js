import express from 'express'
import { updateUser } from '../Controller/user.js';
import verify from '../verifyToken.js';
const router = express.Router();
/** @dev update the password of the user  */
router.put('/:id',verify,updateUser)

/** @dev delete the password of the user  */
/** @dev getall user    */
/** @dev get on user   */
/** @dev get use State   */
export default router