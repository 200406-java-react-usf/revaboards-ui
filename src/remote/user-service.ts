import { User } from "../dtos/user";
import { devboardsClient } from "./devboards-client";
import { NewUser } from "../dtos/new-user";

export async function register(newUser: NewUser) {
    let response = await devboardsClient.post('/users', newUser);
    return await response.data;
}

export async function getUsers() {
    return await devboardsClient.get('/users');
}

export async function getUserById(id: number) {
    return await devboardsClient.get(`/users/${id}`);
}

export async function getUserByUniqueKey(key: string, value: string) {
    return await devboardsClient.get(`/users?${key}=${value}`);
}

export async function updateUser(updatedUser: User) {
    return await devboardsClient.put('/users', updatedUser);
}

export async function deleteUserById(id: number) {
    return await devboardsClient.delete(`/users/${id}`);
}
