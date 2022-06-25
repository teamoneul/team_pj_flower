import express from "express";
import { createLetter } from "../controllers/letterController";
import { profile, setting, write } from "../controllers/onController";

const onRouter = express.Router();

onRouter.get("/:user", profile);
// onRouter.get("/:user", profile);
onRouter.get("/:user/:FB_id/setting", setting);
onRouter.get("/:user/:FB_id/write", write);
onRouter.route("/:user/create/:stage").get(createLetter);

export default onRouter;
