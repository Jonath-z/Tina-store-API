import {Router } from 'express';
import signup from '../middleware/signup';
import { userValodator } from '../validator/userValidator';
import checkUserEmail from '../middleware/checkUserEmail';

const path = '/auth/signup';
const router = Router();


router.route(path)
    .post(
        checkUserEmail,
        userValodator.signup,
        signup
    );

const signupRoute = {
    path,
    router
}

export default signupRoute;