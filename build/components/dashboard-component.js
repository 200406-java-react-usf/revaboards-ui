import { state } from "../util/state.js";
export class DashboardComponent {
    constructor() {
        this.template = `
        <h1>Welcome, <span id="welcome-username"></span></h1>
    `;
        this.render = () => {
            document.getElementById('root').innerHTML = this.template;
            let user = state.currentUser;
            document.getElementById('welcome-username').innerText = user.username;
        };
    }
}
