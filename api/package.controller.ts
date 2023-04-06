import { Request, Response } from "express";
import { PackageService } from "../services/package.service";

export const packageCreate = async (req:Request,res:Response) => {

    const packag = new PackageService;

    const data = {
        hotel_id:      req.body.hotel_id,
        restaurant_id: req.body.restaurant_id,
        place_id:      req.body.place_id    
    }

    try{
        const body = await packag.createPackage(data);
        res.json({
            sucess: true,
            message: "Sucessfullly created package",
            body: body
        })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in package creation"})
    }

}