import { Router } from "express";
import getCard from "../middleware/getCard";

const path = "/card";
const router = Router();

router.route(path).post(getCard);

const getCardRoute = {
  path,
  router,
};

export default getCardRoute;
