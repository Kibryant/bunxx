import RegisterUser from "./core/user/services/RegisterUser";
import RegisterUserController from "./adapters/user/controller/RegisterUserController";
import RepositoryUserPrismaPg from "./external/prisma/repository/RepositoryUserPrismaPg";
import GetAllUsers from "./core/user/services/GetAllUsers";
import GetAllUsersController from "./adapters/user/controller/GetAllUsersController";
import GetUserByEmail from "./core/user/services/GetUserByEmail";
import GetUserByEmailController from "./adapters/user/controller/GetUserByEmail";
import app from "./external/api/config";

const repositoryUserPrismaPg = new RepositoryUserPrismaPg()

const registerUser = new RegisterUser(repositoryUserPrismaPg)
new RegisterUserController(app, registerUser)

const getAllUsers = new GetAllUsers(repositoryUserPrismaPg)
new GetAllUsersController(app, getAllUsers)

const getUserByEmail = new GetUserByEmail(repositoryUserPrismaPg)
new GetUserByEmailController(app, getUserByEmail)


app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
