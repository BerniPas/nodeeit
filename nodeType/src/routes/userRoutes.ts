import express from 'express';
import {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/:userSeq/edit').patch(updateUser);
router.route('/:userSeq/delete').delete(deleteUser);

export default router;