import mongoose from "mongoose";
import FlowerBottle from "../models/flowerBottle";

export const getCreate = (req, res) => {
  res.render("on/4_1");
};

let bottleData = {};
// bottleData[_id] = {};

const create_ID = (id) => {
  bottleData[id] = {};
};

export const postCreate = (req, res) => {
  let url = req.originalUrl;
  url = url.substr(-1);
  const _id = req.params.user;

  // url 제일 마지막 숫자에 따라 렌더링할 템플릿이 달라진다
  if (url == "2") {
    res.render("on/4_2");
    create_ID(_id);
  } else if (url == "3") {
    res.render("on/4_3");
  }

  const { name, month, day } = req.body;
  if (name) {
    bottleData[_id].name = name;
    console.log(bottleData);
  }
  if (month && day) {
    bottleData[_id].month = month;
    bottleData[_id].day = day;
    console.log(bottleData);
  }

  if (url == "4") {
    res.send(
      `${bottleData[_id].name}님의 꽃병, 축하 날짜는 ${bottleData[_id].month}월 ${bottleData[_id].day}일`
    );
    console.log(bottleData);
  }
};
