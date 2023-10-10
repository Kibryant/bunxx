import User from "../../model/User";

export default interface RepositoryUser {
    createUser(user: User): Promise<User>
    getAllUsers(): Promise<User[]>
    getUserByEmail(email: string): Promise<User | null>
}