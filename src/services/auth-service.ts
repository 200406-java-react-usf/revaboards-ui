export class AuthService {
    constructor() {
        console.log('instantiating AuthService');
        
    }

    async authenticate(creds: Credential) {
        let resp = await fetch('http//localhost:8080/auth', {
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