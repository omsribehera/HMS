import express from "express";
import { getAllMessages, sendMessge } from "../controller/messageController.js";
import {isAdminAuthenticated} from "../middlewares/auth.js"
const router=express.Router();
router.post("/send",sendMessge);
router.get("/getall",isAdminAuthenticated,getAllMessages);

export default router;