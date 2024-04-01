import mongoose, { Schema, Document } from 'mongoose';

interface IRoomType extends Document {
  name: string;
}

const roomTypeSchema: Schema = new Schema({
  name: String
});

const RoomType = mongoose.model<IRoomType>('roomtypes', roomTypeSchema);

export default RoomType;
