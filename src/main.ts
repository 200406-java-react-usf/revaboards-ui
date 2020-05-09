import { AppModule } from "./util/app-module.js";

export const API_URL = 'http://revaboardsapi-env-1.eba-53denqsk.us-east-1.elasticbeanstalk.com'

window.onload = () => {
    console.log('page loaded.');
    const app = new AppModule();
    app.components['login'].render();
}
