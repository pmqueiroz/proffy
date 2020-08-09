import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import AccountController from './controllers/AccountController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const accountControllers = new AccountController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

routes.get('/accounts', accountControllers.getToken);
routes.get('/accounts/cleiton', accountControllers.getCredentials);
routes.post('/accounts', accountControllers.createAccount);

export default routes;