import { Request, Response, NextFunction } from 'express'


const validatorHandler = (
    req: Request,
    res: Response,
    schema:any,
    next: NextFunction
) => {

    const { error } = schema.validate(req.body);

    if (error){
        res.json({
            status: 400,
            message: 'bad request in the form'
        })
    }
    
    next();
    
}


export default validatorHandler;