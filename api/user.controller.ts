import { UserServices } from "../services/user.service";
import { Request,Response } from "express";

const user = new UserServices;

export const createUser = async (req:Request, res:Response) => {

    const id = await user.findPackage(req.body.place, req.body.restaurant, req.body.hotel);

    if(!id)
        res.json({sucess: false, message: "Package with following combination is not available"});

    const data = {
        name :        req.body.name,
        duration:     req.body.duration,
        no_of_people: req.body.no_of_people,
        packag_id:    id
    }

    if(!data)
    res.json({sucess: false, message: "Please enter the fields"});

    try{
        const body = await user.createUser(data);
        res.json({
            sucess: true,
            message: "Sucessfullly created user",
            body: body
        })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in user creation"})
    }
}

export const userFind = async (req:Request, res:Response) => {
    const id = req.body.id;
    try{
        const body = await user.findUser(id)
        if(!body)
            res.json({sucess: false, message: "No user with this id"})
            res.json({
                sucess: true,
                message: "Sucessfullly found user",
                body: body
            })
    }
    catch(err){
        console.log(err);
        res.json({sucess: false, message: "Error in user creation"})
    }
}
