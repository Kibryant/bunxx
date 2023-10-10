import UseCases from "../../shared/UseCases";
import RepositoryUser from "./repository";

interface Input {
    email: string
    name: string
    password: string
}

interface Output<Input> {
    data: Input;
    message: string;
    status: number;
}

export default class RegisterUser implements UseCases<Input, void> {
    constructor(private readonly repositoryUser: RepositoryUser){}

    async exec(input: Input): Promise<void> {
        const { email, name, password } = input

        const userExists = await this.repositoryUser.findUserByEmail(email)

        if(userExists) {
            throw new Error(`User exists!`)
        }

        await this.repositoryUser.createUser({
            email,
            name,
            password,
        })
    }
}