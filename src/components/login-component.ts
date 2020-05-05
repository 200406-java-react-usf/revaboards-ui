import { View } from "./view.js";
import { AuthService } from "../services/auth-service.js";
import { Router } from "../util/router.js";
import { state } from "../util/state.js";

export class LoginComponent implements View {

    template = `
    <div class="login-form">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="username-cred" class="sr-only">Username</label>
        <input type="text" id="username-cred" class="form-control" placeholder="Username" autofocus>
        <br/
        <label for="password-cred" class="sr-only">Password</label>
        <input type="password" id="password-cred" class="form-control" placeholder="Password">
        <br/>
        <button class="btn btn-lg btn-primary btn-block" id="submit-creds">Sign in</button>
        <br/>
        <button class="btn btn-lg btn-secondary btn-block" id="nav-register">Create An Account</button>
        <br>
        <div hidden class="alert alert-danger text-center" id="alert-msg" role="alert">
            Invalid Credentials!
        </div>
        <p class="mt-5 mb-3 text-muted">&copy; Revature 2017-2019</p>
    </div>
    `;

    constructor(private authService: AuthService, private router: Router) {
        console.log('instantiating LoginComponent')
    }

    render = (): void => {

        // Render view and add necessary ELs
        document.getElementById('root').innerHTML = this.template;
        document.getElementById('submit-creds').addEventListener('click', this.login);
        
        document.getElementById('password-cred').addEventListener('keydown', e => {
            if (e.keyCode === 13) this.login();
        });

        document.getElementById('nav-register').addEventListener('click', () => {
            this.router.navigate('/register');
        })
    }

    login = async () => {
        let username = (<HTMLInputElement> document.getElementById('username-cred')).value || '';
        let password = (document.getElementById('password-cred') as HTMLInputElement).value || '';
        let authUser = await this.authService.authenticate({username, password});
        state.currentUser = authUser;
        this.router.navigate('/dashboard');
    }


}