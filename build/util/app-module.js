import { Router } from "./router.js";
import { LoginComponent } from "../components/login-component.js";
import { Route } from "./route.js";
import { AuthService } from "../services/auth-service.js";
import { RegisterComponent } from "../components/register-component.js";
import { DashboardComponent } from "../components/dashboard-component.js";
// Poor-man's Dependency Injection
export class AppModule {
    constructor() {
        this.components = {};
        this.services = {};
        this.services['router'] = new Router();
        this.services['auth'] = new AuthService();
        this.components['login'] = new LoginComponent(this.services['auth'], this.services['router']);
        this.components['register'] = new RegisterComponent();
        this.components['dashboard'] = new DashboardComponent();
        let routes = [
            new Route('/login', this.components['login']),
            new Route('/register', this.components['register']),
            new Route('/dashboard', this.components['dashboard'])
        ];
        this.services['router'].addRoutes(routes);
    }
}
