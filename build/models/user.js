export class User {
    constructor(id, un, pw, fn, ln, email, role) {
        this.id = id;
        this.username = un;
        this.password = pw;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.role = role;
    }
}
