import { View } from "../components/view";

export class Route {
    path: string;
    component: View;

    constructor(path: string, cmponent: View) {
        this.path = path;
        this.component = this.component;
    }
}