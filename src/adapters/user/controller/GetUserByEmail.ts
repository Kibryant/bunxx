import Elysia from "elysia"
import GetUserByEmail from "../../../core/user/services/GetUserByEmail"

export default class GetUserByEmailController {
    constructor(readonly server: Elysia, readonly useCase: GetUserByEmail){
        server.get("/users/:email", async ({ params }) => {
            return await useCase.exec(params.email)
        })
    }
}