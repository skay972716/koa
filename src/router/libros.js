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
        this.router.get('/', async ctx => {
            // Validar autentificacion
            // Services
            const response = new Libros().init();
            await this.haciendoOperaciones();
            ctx.type = 'html';
            ctx.body = response;
        });
    }
    async haciendoOperaciones() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Haciendo operaciones');
                resolve();
            }, 2000);
        });
    }
}
