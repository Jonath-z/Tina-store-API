import {Router } from "express";
import getProducts from "../middleware/getAllProducts";


const path = '/products';
const router = Router();

router.route(path).get(getProducts);


const getProductsRoute = {
    path,
    router
}


export default getProductsRoute;