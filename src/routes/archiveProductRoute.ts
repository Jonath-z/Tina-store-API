import {Router } from "express";
import archiveProduct from "../middleware/archiveCard";


const path = '/archive';
const router = Router();

router.route(path)
    .put(
        archiveProduct
    );

const archiveProductRoute = {
    path,
    router
}


export default archiveProductRoute;