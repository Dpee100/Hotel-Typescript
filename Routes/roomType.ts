import { Request, Response } from 'express';
import connectToDb from '../lib/database';
import RoomType from '../models/roomType';

export default {
    createRoomType: async (req: Request, res: Response) => {
        try {
            await connectToDb();

            const roomType = new RoomType({
                name: req.body.name,
            });
            await roomType.save();
            res.send(roomType);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getRoomTypes: async (req: Request, res: Response) => {
        try {
            await connectToDb();
            const roomTypes = await RoomType.find({});
            res.send(roomTypes);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
};