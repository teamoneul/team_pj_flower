export const profile = (req, res) => {
  res.send(`유저: ${req.params.user}`);
};

export const setting = (req, res) => {
  res.send(`유저: ${req.params.user} 꽃병: ${req.params.id}`);
};

export const write = (req, res) => {
  res.send("편지 추가");
};

export const createLetter = (req, res) => {
  let url = req.originalUrl;
  if (url.substr(-1) === "?") {
    url = url.substr(0, -1);
    url = url.substr(-1);
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
