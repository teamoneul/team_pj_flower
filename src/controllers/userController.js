import User from "../models/User";
import bcrypt from "bcrypt";

export const home = (req, res) => {
  res.render("home");
};

export const getJoin = (req, res) => {
  res.render("on/2_2");
};

export const postJoin = async (req, res) => {
  const { username, id, password, confirm } = req.body;
  if (password !== confirm) {
    return res.send("Confirm Error");
  }
  try {
    await User.create({
      username,
      id,
      password,
    });
    // res.redirect("/");
    let req1 = { body: { id: id, password: password } };
    postLogin(req1, res);
  } catch (error) {
    return res.send(`Error : ${error}`);
  }
};

export const getLogin = (req, res) => {
  res.render("on/2_1");
};

export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
  if (!user) {
    return res.send("존재하지 않는 유저");
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.send("비번 틀림!");
  }
  return res.redirect(`home/${user._id}`);
};
