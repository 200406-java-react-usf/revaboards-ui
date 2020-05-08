export class RegisterComponent {
    constructor() {
        this.template = `
        <h1>RegisterComponent works!</h1>
    `;
        this.render = () => {
            document.getElementById('root').innerHTML = this.template;
        };
    }
}
