import {Router } from 'express';
import { userValodator } from '../validator/userValidator';
import login from '../middleware/login';

const path = '/auth/login';
const router = Router();


router.route(path)
    .post(
        userValodator.login,
        login
    );

const loginRoute = {
    path,
    router
}

export default loginRoute;