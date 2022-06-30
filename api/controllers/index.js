module.exports = {
  security: async (req, res, next) => {

    data = req.body;
    console.log(data);

    res.cookie("refreshToken", "kjhkgfdgjjjhkgfjkjhgfhjbk", {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
    res.json(data);
  }
};
