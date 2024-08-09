import express from "express";
import { peopleController } from "../controller/people.controller";

const router = express.Router();

router.post(
  "/addNewMatryers",
  peopleController.upload.single("personalImage"),
  peopleController.addNewMartyers
);
router.get("/getAllMatryers", peopleController.getAllMartyers);
router.get("/getMartyer/:userId", peopleController.getOneMartyers);
router.put(
  "/updateMartyer/:userId",
  peopleController.upload.single("personalImage"),
  peopleController.updateOneMartyers
);
router.delete("/deleteMartyer", peopleController.removeMartyer);
export default router;
