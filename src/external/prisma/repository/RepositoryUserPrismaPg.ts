import { PrismaClient } from "@prisma/client";
import User from "../../../core/user/model/User";
import RepositoryUser from "../../../core/user/services/repository";

export default class RepositoryUserPrismaPg implements RepositoryUser {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {email}
        })

        return user ?? null
    }

    async getAllUsers(): Promise<User[]> {
        return await this.prisma.user.findMany()
    } 

    async createUser(user: User): Promise<User> {
        const newUser = await this.prisma.user.create({
            data: user
        })
        
        return newUser
    }
}