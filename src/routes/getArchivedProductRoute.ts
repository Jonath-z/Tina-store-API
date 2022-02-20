import {Router } from "express";
import getArchivedProduct from "../middleware/getArchivedProduct";

const path = '/archived/product';
const router = Router();

router.route(path).post(getArchivedProduct);

const getArchivedProductRoute= {
    path,
    router
}


export default getArchivedProductRoute;