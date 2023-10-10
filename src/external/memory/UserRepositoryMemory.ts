import { randomUUID } from "crypto";
import User from "../../core/user/model/User";
import RepositoryUser from "../../core/user/services/repository";

export default class RepositoryUserMemory implements RepositoryUser {
    private readonly users: User[] = []

    async createUser(user: User): Promise<User> {
        const newUser = {...user, id: randomUUID()}
        this.users.push(newUser)
        return newUser
    }

    async getAllUsers(): Promise<User[]> {
        return this.users
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = this.users.find((user) => user.email  === email)
        return user ?? null
    }
}