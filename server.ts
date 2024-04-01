import express, { Request, Response } from 'express';
import roomTypes from './Routes/roomType';
import room from './Routes/room';
import authenticate from './Middlewares/authenticate';
import authorize from './Middlewares/authorize';
import validateRoom from './validation/room';
import validate from './Middlewares/validate';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/get', (req: Request, res: Response) => {
    res.send('Hello World!');
});
app.post('/api/v1/room-types', roomTypes.createRoomType);
app.get('/api/v1/room-types', roomTypes.getRoomTypes);
app.post('/api/v1/rooms',  authenticate, authorize(['admin']), validate(validateRoom), room.createRoom);
app.get('/api/v1/rooms', room.getAllRooms);
app.get('/api/v1/rooms/:roomId', room.getRoomById);
app.patch('/api/v1/rooms/:roomId', authenticate, authorize(['admin']), validate(validateRoom), room.updateRoom);
app.delete('/api/v1/rooms/:roomId', authenticate, authorize(['admin']), validate(validateRoom), room.deleteRoom);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
