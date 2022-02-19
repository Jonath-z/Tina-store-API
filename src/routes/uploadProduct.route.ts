import {Router } from "express";
import uploadProducts from "../middleware/uploadProduct";


const path = '/upload/products';
const router = Router();

router.route(path).post(uploadProducts)


const uploadProductRoute = {
    path,
    router
}


export default uploadProductRoute;