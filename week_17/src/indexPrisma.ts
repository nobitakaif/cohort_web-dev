import { PrismaClient } from "@prisma/client"; //this @prisma/client comes after running npx prisma generate, i'll autocomplete the syntax

const client = new PrismaClient()


client.user.create({
    data:{
        username:"nobtiakaif",
        password:"nobitakaif",
        age:21
    }
})