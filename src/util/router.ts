import { Route } from "./route.js";

export class Router {

    routes: Route[] = [];
    
    addRoutes = (rts: Route[]) => {
        rts.forEach(route => this.routes.push(route));
    }

    navigate = (path: string) => {
        let route = this.routes.find(r => r.path === path);
        return route && route.component.render();
    }

}
