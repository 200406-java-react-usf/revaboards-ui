import { View } from "./view.js";
import { state } from "../util/state.js";

export class DashboardComponent implements View {

    template = `
        <h1>Welcome, <span id="welcome-username"></span></h1>
    `;

    constructor() {

    }

    render = (): void => {
        document.getElementById('root').innerHTML = this.template;

        let user = state.currentUser;
        document.getElementById('welcome-username').innerText = user.username;
    }

}