import { Request, Response } from "express";
import { HotelService, PlaceService, RestaurantService } from "../services/schema.service";

export const hotelCreate = async (req: Request, res:Response) => {
    const data = {
        hotel_name: req.body.hotel_name,
        amount:     req.body.amount,
        days:       req.body.days
    }

    const hotel = new HotelService;

    if(!data)
        res.json({sucess: false, message: "Please enter the fields"});

    try{
        const body = await hotel.hotelCreate(data);
        res.json({
            sucess: true,
            message: "Sucessfullly created hotel",
            body: body
        })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in hotel creation"})
    }

}

export const restaurantCreate = async (req: Request, res:Response) => {
    const data = {
        restaurant_name: req.body.restaurant_name,
        amount:     req.body.amount,
        days:       req.body.days
    }

    const restaurant = new RestaurantService;

    if(!data)
        res.json({sucess: false, message: "Please enter the fields"});

    try{
        const body = await restaurant.restaurantCreate(data);
        res.json({
            sucess: true,
            message: "Sucessfullly created restaurant",
            body: body
        })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in restaurant creation"})
    }

}

export const placeCreate = async (req: Request, res:Response) => {
    const data = {
        place_name: req.body.place_name,
        amount:     req.body.amount,
        days:       req.body.days
    }

    const hotel = new PlaceService;

    if(!data)
        res.json({sucess: false, message: "Please enter the fields"});

    try{
        const body = await hotel.placeCreate(data);
        res.json({
            sucess: true,
            message: "Sucessfullly created place",
            body: body
        })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in place creation"})
    }

}