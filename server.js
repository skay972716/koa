import Koa from 'koa';
export default class Server {
    constructor(routes) {
        this.routes = routes;
        this.app = new Koa();
    }
    init() {
        this.startRoutes();
    }
    startRoutes() {
        for (const router of this.routes) {
            this.app.use(router.routes());
        }
        this.app.listen(3000);
    }
}
