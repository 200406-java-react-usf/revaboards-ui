import { AppModule } from "./util/app-module.js";

export const API_URL = 'http://ec2-54-156-71-176.compute-1.amazonaws.com/:8080';

window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
}