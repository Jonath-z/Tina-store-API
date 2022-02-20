import bodyParser from 'body-parser';
import express, { Application,Request,Response } from 'express'
import cors from 'cors';
import { IRoute } from './interfaces/routeInterface';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config();

export const app: Application = express();
export const PORT: string | number = process.env.PORT || 3001;

const initializeMiddleware = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}
initializeMiddleware();

const initializeRoutes = (routes: IRoute[]) => {
    routes.forEach(route => {
        app.use('/api/v1/', route.router);
    });
}

const initializeDefaultRoute = () => {
    app.get('/', (req: Request, res: Response) => {
        res.json({
            status: 200,
            message: 'welcome to Tina-store API v1'
        });
    });
}

export const App = () => {
    initializeRoutes(routes)
    initializeDefaultRoute();
}
