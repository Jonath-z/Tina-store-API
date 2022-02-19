import bodyParser from "body-parser";
import express, { Application,Request,Response } from "express"
import cors from 'cors';
import { IRoute } from './interfaces/routeInterface';
import routes from "./routes";

export const app: Application = express();
export const PORT: number = 3001;

const initializeMiddleware = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
}

const initializeRoutes = (routes: IRoute[]) => {
    // console.log(routes[0].router.route);
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
    initializeDefaultRoute();
    initializeMiddleware();
    initializeRoutes(routes)
}
