import { Router } from "express";
import { createGuestDb, getGuestDb } from "../controller/guestController.js";

const router = Router();

router.post("/confirmation", createGuestDb)
router.get("/getGuestConfirmed", getGuestDb)

export default router;