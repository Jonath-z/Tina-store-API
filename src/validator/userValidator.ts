import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import validatorHandler from "../middleware/validatorHandler";

const signup = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body, "from validator");
  const schema = Joi.object().keys({
    name: Joi.string().trim().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  validatorHandler(req, res, schema, next);
};

const login = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body, "from validator");
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  validatorHandler(req, res, schema, next);
};

export const userValodator = { signup, login };
