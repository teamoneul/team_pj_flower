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
  res.render("on/4_1");
};
