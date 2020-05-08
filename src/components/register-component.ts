import { View } from "./view.js";

export class RegisterComponent implements View {

    template = `
        <h1>RegisterComponent works!</h1>
    `;

    constructor() {

    }

    render = (): void => {
        document.getElementById('root').innerHTML = this.template;
    }

}