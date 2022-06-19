import express from "express";
import { main, choose, prac } from "../controllers/globalController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

import { renderHome } from "../controllers/globalController";
const globalRouter = express.Router();

//
globalRouter.route("/").get(renderHome).post();
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/home/:user").get(renderHome);
// globalRouter.route("/login").get(getLogin).post(postLogin);
// globalRouter.get("/prac", prac);
//로딩 라우터는 나중에 추가
export default globalRouter;
