import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient

export class HotelService {
    repo;
    constructor(){
        this.repo = prisma.hotel
    }

    async hotelCreate(data:any){
        return this.repo.create({data});
    }

}

export class PlaceService {
    repo;
    constructor(){
        this.repo = prisma.place
    }

    async placeCreate(data:any){
        return this.repo.create({data});
    }

}

export class RestaurantService {
    repo;
    constructor(){
        this.repo = prisma.restaurant
    }

    async restaurantCreate(data:any){
        return this.repo.create({data});
    }

}