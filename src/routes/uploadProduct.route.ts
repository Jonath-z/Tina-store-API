
import {Router } from "express";
import uploadProducts from "../middleware/uploadProduct";


const path = '/products';
const router = Router();

router.route(path).get(uploadProducts)


const uploadProductRoute = {
    path,
    router
}


export default uploadProductRoute;