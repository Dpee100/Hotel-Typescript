import mongoose, { Schema, Document } from 'mongoose';

interface IRoom extends Document {
  name: string;
  roomtype: mongoose.Schema.Types.ObjectId;
  price: number;
}

const roomSchema: Schema = new Schema({
  name: String,
  roomtype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'roomtypes'
  },
  price: Number,
});

const room = mongoose.model<IRoom>('room', roomSchema);

export default room;
