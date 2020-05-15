import { User } from "../dtos/user";
import { devboardsClient } from "./devboards-client";

export async function authenticate(username: string, password: string): Promise<User> {
    let response = await devboardsClient.post('/auth', {username, password});
    return await response.data;
}

export async function invalidateSession() {
    return await devboardsClient.get('/auth');
}