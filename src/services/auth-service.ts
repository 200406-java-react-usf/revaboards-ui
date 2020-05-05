import { Credentials } from "../models/credentials.js";

export class AuthService {
    constructor() {
        console.log('Instantiating AuthService');
    }
    async authenticate(creds: Credentials) {
        let resp = await fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });
        return await resp.json();
    }
}