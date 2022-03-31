export const link = (req,res) => {
    return res.send("링크 입력");
}

export const showFlower = (req,res) => {
    return res.send(`꽃병: ${req.params.FB_id2}`);
}

export const write = (req,res) => {
    return res.send(`꽃병: ${req.params.FB_id2} 쓰기`)
}