const router = require("express").Router();
const { UserModel } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/test", async (req, res) => {
  res.send("The Test Worked");
});

// GOLD CREATE
router.post("/create", async (req, res) => {
  try {
    const userRecord = await UserModel.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    if (userRecord) {
      let token = jwt.sign({ id: userRecord.id }, "Hello I am a secret", {
        expiresIn: 60 * 60 * 24,
      });
      res.status(200).json({
        user: userRecord,
        token: token,
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.stack });
  }
});

// GOLD LOGIN
router.post("/login", async (req, res) => {
  try{
    const userRecord = await UserModel.findOne({ where: { username: req.body.username } })
    if (userRecord) {
      bcrypt.compare(req.body.password, userRecord.password, (err, matches) => {
        if (matches) {
          let token = jwt.sign({ id: userRecord.id }, "Hello I am a secret", {
            expiresIn: 60 * 60 * 24,
          });
          res.status(200).json({
            user: userRecord,
            token: token,
          });
        } else {
          res
            .status(401)
            .json({ error: "Username or password did not match. " });
        }
      });
    }


  }catch (err) {
    return res.status(500).json({ error: err.stack });
  }
   
});

module.exports = router;
