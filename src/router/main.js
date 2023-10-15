import Router from '@koa/router';

export default class RouterMain {
    constructor() {
        this.router = new Router({
            prefix: '/',
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
            ctx.type = 'html';
            ctx.body = `Sistemas de Gestión de Libros<br>${this.generarEnlace(
                'Ver libros',
                '/libros'
            )}`;
            // Error y responder
        });
    }
    generarEnlace(cadena, link) {
        return `<a href='${link}'>${cadena}</a>`;
    }
}
