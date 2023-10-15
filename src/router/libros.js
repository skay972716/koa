import Router from '@koa/router';
import Libros from '../services/libros';

export default class RouterLibros {
    constructor() {
        this.router = new Router({
            prefix: '/libros',
        });
    }
    init() {
        this.buildRoutes();
        return this.router;
    }
    buildRoutes() {
        this.router.get('/', ctx => {
            // Validar autentificacion
            // Services
            const response = new Libros().init();
            ctx.type = 'html';
            ctx.body = response;
        });
    }
}
