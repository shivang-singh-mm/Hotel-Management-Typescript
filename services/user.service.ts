import {user,PrismaClient} from '@prisma/client'

const prisma = new PrismaClient


export class UserServices {
    repo;
    find;
    constructor(){
        this.repo = prisma.user;
        this.find = prisma.packag;
    }

    async createUser(data:any) {
        return this.repo.create({data});
    }

    async findPackage(place:string,restaurant:string,hotel:string){
        const data = await this.find.findFirst({
            where:{
                hotel_id: hotel,
                place_id: place,
                restaurant_id: restaurant
            }
        })
        return data?.package_id;
    }

    async findUser(id:string){
        return this.repo.findUnique({
            where:{
                user_id:id
            },
            include:{
                packag:true
            }
        })
    }

}