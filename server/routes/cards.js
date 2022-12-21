const {card , validate} = require("../modules/card");
const { User } = require("../modules/user");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  const Card = await card(req.body).save();
  res.status(200).send({ data: Card, message: "card created" });
});

//get all routes
router.get("/", async (req, res) => {
  try {
        const cards= await card.find();
        res.status(200).send({data:cards});
  } catch (error) {
    console.log(error);
  }
});

module.exports=router