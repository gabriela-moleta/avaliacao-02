import express from "express";
import startupController from "../controllers/startupController.js";    
const router = express.Router();
router.get("/", startupController.getAll);
router.post("/", startupController.create);
router.put("/:id", startupController.update);
router.delete("/:id", startupController.delete);
export default router;
