import FlowerBottle from "../models/flowerBottle";

export const getCreate = (req, res) => {
  let url = req.originalUrl;
  // url 제일 마지막이 ?일 경우를 대비
  if (url.substr(-1) === "?") {
    url = url.substr(-2, 1);
  } else {
    url = url.substr(-1);
  }

  // url 제일 마지막 숫자에 따라 렌더링할 템플릿이 달라진다
  if (url == "1") {
    res.render("on/4_1");
  } else if (url == "2") {
    res.render("on/4_2");
  } else {
    res.render("on/4_3");
  }

  console.log(req.body);
};

export const postCreate = (req, res) => {
  console.log("POST!");
};
