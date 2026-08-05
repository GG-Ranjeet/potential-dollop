import { Schema, model, type InferSchemaType } from "mongoose";

const PatientSchema = new Schema(
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

export type IPatient = InferSchemaType<typeof PatientSchema>;
const Patient = model('User', PatientSchema);

export default Patient;