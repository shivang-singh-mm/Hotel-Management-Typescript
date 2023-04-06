import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient

export class PackageService {
    repo;
    constructor(){
        this.repo = prisma.packag;
    }

    async createPackage(data: any){
        return this.repo.create({data});
    }

}