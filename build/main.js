import { AppModule } from "./util/app-module.js";
export const API_URL = "http://localhost:8080";
window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
};
