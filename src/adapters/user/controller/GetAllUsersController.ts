import Elysia from "elysia"
import GetAllUsers from "../../../core/user/services/GetAllUsers"

export default class GetAllUsersController {
    constructor(readonly server: Elysia, readonly useCase: GetAllUsers){
        server.get("/users", async ({ body }) => {
            return await useCase.exec()
        })
    }
}