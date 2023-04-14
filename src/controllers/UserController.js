const User = require("../models/UserModel");

module.exports.addToLikedStartups = async (req, res) => {
  try {
    const { email, data } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const { likedStartups } = await User;
      const startupAlreadLiked = likedStartups.find(({ id }) => id === data.id);

      if (!startupAlreadLiked) {
        await User.findByIdAndUpdate(
          user.id,
          {
            likedStartups: [...user.likedStartups, data],
          },
          { new: true }
        );
      } else
        return res.json({ msg: "Startup already liked to the Liked List." });
    } else await User.create({ email, likedStartups: [data] });

    return res.json({ msg: "Startup liked add!!!" });
  } catch (error) {
    return res.json({ msg: "Erro ao adicionar Startup" });
  }
};
