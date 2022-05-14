// export const postLoginmain = (req, res) => {
//   return res.render("login");
// };
import User from "../models/User";

export const renderHome = (req, res) => {
  const _id = req.params.user;
  const user = User.findById({ _id });
  console.log(user);
  return res.render("home", { user: user });
};
