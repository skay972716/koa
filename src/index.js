import RouterRoot from './router';
import Server from './server';

const routes = new RouterRoot().init();
new Server(routes).init();
