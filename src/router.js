import RouterLibros from './router/libros';
import RouterMain from './router/main';

export default class RouterRoot {
    constructor() {
        this.routes = [];
        this.routerLibros = new RouterLibros().init();
        this.routerMain = new RouterMain().init();
    }
    init() {
        this.buildRoutes();
        return this.routes;
    }
    buildRoutes() {
        this.routes.push(this.routerLibros);
        this.routes.push(this.routerMain);
    }
}
