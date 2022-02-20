import { Request, Response,Router } from 'express';
import signup from '../middleware/signup';
import { userValodator } from '../validator/userValidator';

const path = '/auth/signup';
const router = Router();


router.route(path)
    .post(
        userValodator.signup,
        signup
    );

const authRoute = {
    path,
    router
}

export default authRoute;