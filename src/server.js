import Koa from 'koa';
import morgan from 'morgan';

export default class Server {
    constructor(routes) {
        this.routes = routes;
        this.app = new Koa();
    }
    init() {
        this.startMiddlewares();
        this.startRoutes();
    }
    startRoutes() {
        for (const router of this.routes) {
            this.app.use(router.routes());
        }
        this.app.listen(3000);
    }
    startMiddlewares() {
        this.app.use(async (ctx, next) => {
            const morganLooger = morgan('tiny');
            morganLooger(ctx.req, ctx.res, () => {});
            await next();
        });
    }
}
