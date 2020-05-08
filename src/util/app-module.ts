import { Router } from "./router";
import { LoginComponent } from "../components/login-component";
import { Route } from "./route";
import { AuthService } from "../services/auth-service";
// Poor-man's Dependency Injection
export class AppModule {
    components = {};
    services = {};
    constructor() {
        this.services['router'] = new Router();
        this.services['auth'] = new AuthService();

        this.components

        this.components['login'] = new LoginComponent();
        let routes = [
            new Route('/login', this.components['login'])
        ];
        this.services['router'].addRoutes(routes);
    }
}