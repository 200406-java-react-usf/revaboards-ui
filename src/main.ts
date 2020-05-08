import { AppModule } from "./util/app-module.js";

export const API_URL = 'http://ec2-34-238-121-188.compute-1.amazonaws.com:8080';

window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
}