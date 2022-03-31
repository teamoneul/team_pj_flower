export const profile = (req,res) => {
    res.send(`유저: ${req.params.user}`);
}

export const controlPot = (req,res) => {
    res.send("꽃병 관리자");
}

export const setting = (req,res) => {
    res.send(`유저: ${req.params.user} 꽃병: ${req.params.id}`);
}

export const write = (req,res) => {
    res.send("편지 추가");
}