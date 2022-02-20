import {Router } from "express";
import addToCard from "../middleware/addToCard";


const path = '/upload/card';
const router = Router();

router.route(path)
    .put(
        addToCard
    );


const addToCardRoute = {
    path,
    router
}


export default addToCardRoute;