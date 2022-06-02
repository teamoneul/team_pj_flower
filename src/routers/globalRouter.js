import express from "express";
import { main, choose } from "../controllers/globalController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

import { renderHome } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.route("/").get(getLogin).post(postLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/home/:user").get(renderHome);
// globalRouter.route("/login").get(getLogin).post(postLogin);
//로딩 라우터는 나중에 추가
//커밋안할뻔..
export default globalRouter;
