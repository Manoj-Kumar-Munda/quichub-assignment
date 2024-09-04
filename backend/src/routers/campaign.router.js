import { Router } from "express";
import { createCampaign, getCampaigns } from "../controllers/campaign.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/", upload.single("csvFile"), createCampaign);
router.get("/", getCampaigns);
export default router;