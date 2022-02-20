import { Router } from "express";
import deleteProductById from "../middleware/deleteProductById";


const path = '/product/delete';
const router = Router();


router.route(path).delete(deleteProductById);

const deleteProductByIdRoute = {
    path,
    router
};

export default deleteProductByIdRoute;