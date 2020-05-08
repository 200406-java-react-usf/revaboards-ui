<<<<<<< HEAD
import { View } from "./view";

export class RegisterComponent implements View {
    template = `<h1> Register Component Page! </h1>`;

    constructor() {
    }

    render = (): void => {
        document.getElementById('root').innerHTML = this.template
    }
=======
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

>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921
}