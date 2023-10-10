import Elysia from "elysia"
import RegisterUser from "../../../core/user/services/RegisterUser";

interface Body {
    email: string
    name: string
    password: string
}

export default class RegisterUserController {
    constructor(readonly server: Elysia, readonly useCase: RegisterUser){
        server.post("/users", async ({ body }) => {
            const { email, name, password } = body as Body

            await useCase.exec({ email, name, password})

            return {
                status: 201,
                body: {
                    message: "User created!",
                    data: {email, name, password}
                }
            }
        })
    }
    

}