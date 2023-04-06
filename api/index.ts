import express from "express";

import { createUser,userFind } from "./user.controller";
import { hotelCreate,restaurantCreate, placeCreate } from "./shchema.controller";
import { packageCreate } from "./package.controller";


const router = express.Router();

router.post('/user/add',createUser);
router.get('/user/find',userFind);
router.post('/create/place',placeCreate);
router.post('/create/hotel',hotelCreate);
router.post('/create/restaurant',restaurantCreate);
router.post('/create/package',packageCreate);

export default router; 