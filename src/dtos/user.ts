export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    registerDateTime: Date;
    isActive: boolean;
    role: string

    constructor(
        id: number, 
        un: string,
        pw: string, 
        fn: string, 
        ln: string, 
        email: string,
        registerDT: Date,
        isActive: boolean, 
        role: string) 
    {
        this.id = id;
        this.password = pw;
        this.username = un;
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.registerDateTime = registerDT;
        this.isActive = isActive;
        this.role = role;
    }
}