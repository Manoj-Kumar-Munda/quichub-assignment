import express from 'express';
import cors from "cors"

const app = express();

app.use(cors());

app.use(express.json());


import campaignRouter from "./routers/campaign.router.js";

app.use("/api/v1/campaign", campaignRouter);


export default app;
