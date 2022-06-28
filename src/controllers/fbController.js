import FlowerBottle from "../models/flowerBottle";
import User from "../models/User";

export const getCreate = (req, res) => {
  res.render("on/4_1");
};

let bottleData = {};
// bottleData[_id] = {};

const create_ID = (id) => {
  bottleData[id] = {};
};

export const postCreate = async (req, res) => {
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
    let date = new Date();
    const { username } = await User.findById(_id);

    const completeDate = new Date(
      `${date.getFullYear()}-0${bottleData[_id].month}-0${bottleData[_id].day}`
    );

    const { flowerType } = req.body;

    try {
      await FlowerBottle.create({
        creater: username,
        owner: bottleData[_id].name,
        createDate: new Date(),
        completeDate,
        flowerType,
        letterCount: 0,
        letter: {},
      });
      let test = await FlowerBottle.find({ creater: username });
      res.send("[" + username + "]" + " 생성자가 만든 꽃병은 : " + test);
    } catch (error) {
      res.send(error);
    }
  }
};

export const getBottle = (req, res) => {};
