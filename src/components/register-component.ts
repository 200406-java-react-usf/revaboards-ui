import { View } from "./view.js";

export class RegisterComponent implements View {

    template = `
    
        <h1>Register COmp works </h1>
    
    `;
    
    constructor(){

    }

    render = (): void => {

        document.getElementById('root').innerHTML = this.template;

    }

}