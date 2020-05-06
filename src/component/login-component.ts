import 

export class LoginComponent implements View{

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

    constructor(){

    }

    render = (): void => {
        document.getElementById('root').innerHTML = this.template;
        document.getElementById('submit-creds').addEvent
    }
    login = async () => {
        console.log('login invoked!');
    }

}