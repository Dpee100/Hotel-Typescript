import { Request, Response } from 'express';
import connectToDb from '../lib/database';
import Room from '../models/room';
import RoomType from '../models/roomType'; // Assuming there's a RoomType model

export default {
    createRoom: async (req: Request, res: Response) => {
        try {
            await connectToDb();

            const room = new Room({
                name: req.body.name,
                roomtype: req.body.roomtype,
                price: req.body.price,
            });
            await room.save();
            res.send(room);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getAllRooms: async (req: Request, res: Response) => {
        try {
            await connectToDb();
            const { search, roomType, minPrice, maxPrice } = req.query;
            let query: any = {};

            if (search) {
                query.name = { $regex: search.toString(), $options: 'i' };
            }
            if (roomType) {
                const roomTypeDoc = await RoomType.findOne({ typeName: roomType.toString() });
                if (roomTypeDoc) {
                    query.roomtype = roomTypeDoc._id;
                }
            }
            if (minPrice || maxPrice) {
                query.price = {
                    ...(minPrice && { $gte: +minPrice }),
                    ...(maxPrice && { $lte: +maxPrice }),
                };
            }

            const rooms = await Room.find(query).populate('roomtype');
            res.send(rooms);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getRoomById: async (req: Request, res: Response) => {
        try {
            await connectToDb();
            const room = await Room.findById(req.params.roomId).populate('roomtype');
            if (!room) {
                return res.status(404).send({ message: 'Room not found' });
            }
            res.send(room);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    updateRoom: async (req: Request, res: Response) => {
        try {
            await connectToDb();
            const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
            if (!room) {
                return res.status(404).send({ message: 'Room not found' });
            }
            res.send(room);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    deleteRoom: async (req: Request, res: Response) => {
        try {
            await connectToDb();
            const room = await Room.findByIdAndDelete(req.params.roomId);
            if (!room) {
                return res.status(404).send({ message: 'Room not found' });
            }
            res.send({ message: 'Room successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
};
