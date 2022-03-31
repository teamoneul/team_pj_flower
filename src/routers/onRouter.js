import express from "express";
import { profile, setting, controlPot, write } from "../controllers/onController";

const onRouter = express.Router();

onRouter.get("/:user",profile);
onRouter.get("/:user/:FB_id",controlPot);
onRouter.get("/:user/:FB_id/setting",setting);
onRouter.get("/:user/:FB_id/write", write)

export default onRouter;