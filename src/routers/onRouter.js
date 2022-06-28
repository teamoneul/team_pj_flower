import express from "express";
import { getCreate, postCreate, getBottle } from "../controllers/fbController";
import { profile, setting, write } from "../controllers/onController";

const onRouter = express.Router();

onRouter.get("/:user", profile);
// onRouter.get("/:user", profile);
onRouter.get("/:user/:FB_id", getBottle);
onRouter.get("/:user/:FB_id/setting", setting);
onRouter.get("/:user/:FB_id/write", write);
onRouter.route("/:user/create/:stage").get(getCreate).post(postCreate);

export default onRouter;
