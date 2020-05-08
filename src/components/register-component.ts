import { View } from "./view";

export class RegisterComponent implements View {
    template = `<h1> Register Component Page! </h1>`;

    constructor() {
    }

    render = (): void => {
        document.getElementById('root').innerHTML = this.template
    }
}