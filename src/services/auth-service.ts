import { Credentials } from "../models/credentials.js";
import { API_URL } from "../main.js";

export class AuthService {

    constructor() {
        console.log('instantiating AuthService');
    }

    async authenticate(creds: Credentials) {

        let resp = await fetch(`${API_URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });

        return await resp.json();

    }
}