import { Request, Response, NextFunction } from 'express'


const validatorHandler = (
    req: Request,
    res: Response,
    schema:any,
    next: NextFunction
) => {

    const { error } = schema.validate(req.body);
    console.log(req.body);

    if (error) {
        res.json({
            status: 400,
            message: 'data validation failed',
            error: error
        })
    } else {
        next();
    }
}


export default validatorHandler;