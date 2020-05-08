<<<<<<< HEAD
import { Credentials } from '../models/credentials.js';
import { API_URL } from '../main.js';
=======
import { Credentials } from "../models/credentials.js";
import { API_URL } from "../main.js";
>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921

export class AuthService {

    constructor() {
<<<<<<< HEAD
        console.log('Instantitating AuthService');
    }

    async authenticate(creds: Credentials) {
=======
        console.log('instantiating AuthService');
    }

    async authenticate(creds: Credentials) {

>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921
        let resp = await fetch(`${API_URL}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        });

        return await resp.json();
<<<<<<< HEAD
=======

>>>>>>> 1f318d05b37ee110b95392bbdfe910e3064e8921
    }
}