// export const postLoginmain = (req, res) => {
//   return res.render("login");
// };
import User from "../models/User";

export const renderHome = async (req, res) => {
  const _id = req.params.user;
  const user = await User.findById({ _id });
  console.log(user);
  return res.render("home", { user: user });
};

export const prac = (req,res) => {
  res.render("off/off0006-2");
}