import { Schema, model, type InferSchemaType } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true, 
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            require: true,
            select: false
        }
    },
    {
        timestamps: true
    }
);

export type IUser = InferSchemaType<typeof UserSchema>;
const User = model('User', UserSchema);

export default User;