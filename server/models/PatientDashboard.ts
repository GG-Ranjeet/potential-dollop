import mongoose, { Document, Schema } from "mongoose";


export interface IHealthMetrics extends Document {
    patientId: Schema.Types.ObjectId; // Reference to the Patient model
    type: 'weight' | 'blood_pressure' | 'heart_rate' | 'temperature' | 'respiratory_rate';
    value: {
        systolic?: number; // for blood pressure
        diastolic?: number; // for blood pressure
        weight?: number; // in kg
        heartRate?: number; // in bpm
        temperature?: number; // in °C
        respiratoryRate?: number; // in breaths per minute
    };
    trendPercentage?: number; // percentage change compared to the previous measurement
    statusLabel?: 'normal' | 'elevated' | 'high' | 'low'; // based on standard medical thresholds
    recordedAt: Date;
}

const healthMetricsSchema = new Schema<IHealthMetrics>({
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    type: { type: String, enum: ['weight', 'blood_pressure', 'heart_rate', 'temperature', 'respiratory_rate'], required: true },
    value: {
        systolic: { type: Number },
        diastolic: { type: Number },
        weight: { type: Number },
        heartRate: { type: Number },
        temperature: { type: Number },
        respiratoryRate: { type: Number },
    },
    trendPercentage: { type: Number },
    statusLabel: { type: String, enum: ['normal', 'elevated', 'high', 'low'] },
    recordedAt: { type: Date, default: Date.now }
});

export interface IMedicationSchedule extends Document {
    patientId: Schema.Types.ObjectId; // Reference to the Patient model
    medicineName: string;
    dosage: string; // e.g., "500mg"
    scheduleTime: string;
    instructions: string; // e.g., "Take with food"
    details: string; // Description of the medicine
    takenToday: boolean; // Whether the medicine has been taken today
    date: Date; // The date for which this schedule is relevant
}

const MedicaitonScheduleSchema = new Schema<IMedicationSchedule>({
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    medicineName: { type: String, required: true },
    dosage: { type: String, required: true },
    scheduleTime: { type: String, required: true },
    instructions: { type: String, required: true },
    details: { type: String, required: true },
    takenToday: { type: Boolean, default: false },
    date: { type: Date, required: true }
});

export const HealthMetrics = mongoose.model<IHealthMetrics>('HealthMetrics', healthMetricsSchema);
export const MedicationSchedule = mongoose.model<IMedicationSchedule>('MedicationSchedule', MedicaitonScheduleSchema);