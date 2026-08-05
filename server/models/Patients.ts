import { Schema, model, type InferSchemaType } from "mongoose";
import bcrypt from "bcrypt";

const PatientSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Password is required"],

            trim: true
        },
        email: {
            type: String,
            required: [true, "Password is required"],

            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
            minlength: [8, 'Password must be at least 8 characters long']
        }
    },
    {
        timestamps: true
    }
);

PatientSchema.pre('save', async function () {
    // 1. Return early if password wasn't modified
    if (!this.isModified('password')) return;

    // 2. Validate password length
    if (this.password.length < 8) {
        console.error('Password must be at least 8 characters long');
        throw new Error('Password must be at least 8 characters long');
    }

    // 3. Hash the password with await
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export type IPatient = InferSchemaType<typeof PatientSchema>;
const Patient = model('User', PatientSchema);

export default Patient;