import { Router } from "./router.js";
import { LoginComponent } from "../components/login-component.js";
import { Route } from "./route.js";
import { AuthService } from "../services/auth-service.js";

export class AppModule {
    components = {};
    services = {};

    constructor() {
        this.services['router'] = new Router();
        // this.services['user'] = new UserService();
        this.services['auth'] = new AuthService();

        this.components['login'] = new LoginComponent();

        let routes = [
            new Route(`/login`, this.components['login'])
        ];
        this.services['router'].addRoutes(routes);
    }
}