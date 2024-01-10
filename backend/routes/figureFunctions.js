const router = require("express").Router();

const Figure = require("../models/figure.js");
const {
  userVerification,
  userAuthorization,
} = require("../middlewares/AuthMiddleware.js");
const getNewID = (lastID) => {
  const numericPart = parseInt(lastID.slice(2), 10);
  const nextNumericPart = numericPart + 1;
  return `FG${nextNumericPart.toString().padStart(5, "0")}`;
};

router.get("/", userVerification, async (req, res) => {
  try {
    const boks = await Figure.find({}).sort({ id: 1 });
    if (boks) {
      res.status(200).json(boks);
    } else {
      res.json({ message: "There are no figures at the moment" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const bok = await Figure.findOne({ id }).populate("provider");

    if (bok) {
      res.status(200).json(bok);
    } else {
      res.json({ message: "The Figure is not exist" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", userAuthorization, async (req, res) => {
  const { size, type, price, name, product_count } = req.body;

  try {
    const lastBok = await Figure.findOne({}).sort({ id: -1 });
    const newID = lastBok ? getNewID(lastBok.id) : "FG00001";
    const bok = await Figure.create({
      id: newID,
      size,
      type,
      price,
      name,
      product_count,
    });
    res.status(200).json(bok);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.patch("/:id", userAuthorization, async (req, res) => {
  const { id } = req.params;
  try {
    const bok = await Figure.findOneAndUpdate({ id }, { ...req.body });
    if (!bok)
      return res.status(404).json({ message: "There no such figure exist" });
    res.status(200).json(bok);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id", userAuthorization, async (req, res) => {
  const { id } = req.params;
  try {
    const bok = await Figure.findOneAndDelete({ id });
    if (!bok) {
      res.json({ message: "There is no figure with this id exits" });
    }
    res.status(200).json(bok);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;