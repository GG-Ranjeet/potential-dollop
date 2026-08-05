import express, { type Express, type Request, type Response } from "express";
import statusRoutes from "../routes/statusRoutes.ts";
import patientRoutes from "../routes/patientRoutes.ts";

const app: Express = express();
app.use(express.json());

// Routes
app.use("/api/status", statusRoutes);
app.use("/api/patient", patientRoutes);

app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});

// Default
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default app;
