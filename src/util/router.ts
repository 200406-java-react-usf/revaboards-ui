import { Route } from "./route.js";

export class Router {

    routes: Route[] = [];
<<<<<<< HEAD

=======
    
>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921
    addRoutes = (rts: Route[]) => {
        rts.forEach(route => this.routes.push(route));
    }

    navigate = (path: string) => {
        let route = this.routes.find(r => r.path === path);
        return route && route.component.render();
    }
<<<<<<< HEAD
}
=======

}
>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921
