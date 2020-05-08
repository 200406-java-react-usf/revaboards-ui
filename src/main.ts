import { AppModule } from "./util/app-module.js";

export const API_URL = 'http://ec2-52-15-232-210.us-east-2.compute.amazonaws.com:8080';

window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
}