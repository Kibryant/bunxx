import UseCases from "../../shared/UseCases";
import User from "../model/User";
import RepositoryUser from "./repository";

export default class GetUserByEmail implements UseCases<string, User | null> {
    constructor(private readonly repositoryUser: RepositoryUser){}

    exec(email: string): Promise<User | null>  {
        return this.repositoryUser.getUserByEmail(email) ?? null
    }
}