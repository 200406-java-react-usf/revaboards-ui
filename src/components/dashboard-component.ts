import { View } from "./view.js";

export class DashboardComponent implements View {

    template = `
    
        <h1>Dashboard COmp works </h1>
    
    `;
    
    constructor(){

    }

    render = (): void => {

        document.getElementById('root').innerHTML = this.template;

    }

}