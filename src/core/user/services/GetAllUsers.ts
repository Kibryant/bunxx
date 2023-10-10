import UseCases from "../../shared/UseCases";
import User from "../model/User";
import RepositoryUser from "./repository";

export default class GetAllUsers implements UseCases<void, User[]> {
    constructor(readonly repository: RepositoryUser) {}
    async exec(input: void): Promise<User[]> {
        return await this.repository.getAllUsers()
    }
}