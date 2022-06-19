import express from "express";
import {
  profile,
  setting,
  controlPot,
  write,
  createLetter,
} from "../controllers/onController";

const onRouter = express.Router();

onRouter.get("/:user", profile);
// onRouter.get("/:user", profile);
onRouter.get("/:user/:FB_id", controlPot);
onRouter.get("/:user/:FB_id/setting", setting);
onRouter.get("/:user/:FB_id/write", write);
onRouter.route("/create/:user").get(createLetter);

export default onRouter;
