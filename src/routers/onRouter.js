import express from "express";
import {
  profile,
  setting,
  controlPot,
  write,
} from "../controllers/onController";

const onRouter = express.Router();

<<<<<<< HEAD
onRouter.route("/").get();
onRouter.get("/:user", profile);
=======
// onRouter.get("/:user", profile);
>>>>>>> 81ca5ae20d4bf03800b2bcf8d02059387b2b0af8
onRouter.get("/:user/:FB_id", controlPot);
onRouter.get("/:user/:FB_id/setting", setting);
onRouter.get("/:user/:FB_id/write", write);

export default onRouter;
