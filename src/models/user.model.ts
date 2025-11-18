import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
  role?: string;
  status?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 0 },
    role: { type: String, default: "user" },
    status: { type: String, default: "active" },
    createdAt: { type: Date, default: () => new Date() },
  },
  { versionKey: false }
);

const UserModel = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default UserModel;