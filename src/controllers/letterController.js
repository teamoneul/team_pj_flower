export const createLetter = (req, res) => {
  let url = req.originalUrl;

  if (url.substr(-1) === "?") {
    url = url.substr(-2, 1);
  } else {
    url = url.substr(-1);
  }
  console.log(url);
  if (url == "1") {
    return res.render("on/4_1");
  } else if (url == "2") {
    return res.render("on/4_2");
  }
};
