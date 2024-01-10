const router = require("express").Router();
const Order = require("../models/order.js");
const Provider = require("../models/provider.js");
const Customer = require("../models/customer.js");
const { userVerification } = require("../middlewares/AuthMiddleware.js");
router.get("/customers", async (req, res) => {
  try {
    const result = await Customer.find({}).sort({ _id: -1 });

    if (result) {
      res.status(200).json(result);
    } else {
      res.json({ message: "There are no customers at the moment" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/orders", async (req, res) => {
  try {
    const result = await Order.find({})
      .sort({ _id: -1 })
      .populate("customer")
      .populate({
        path: "products_book",
        populate: {
          path: "product_id",
          model: "Book",
        },
      })
      .populate({
        path: "products_figure",
        populate: {
          path: "product_id",
          model: "Figure",
        },
      });
    if (result) {
      res.status(200).json(result);
    } else {
      res.json({ message: "There are no orders at the moment" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/orders/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Order.findOne({ _id })

      .populate("customer")
      .populate({
        path: "products_book",
        populate: {
          path: "product_id",
          model: "Book",
        },
      })
      .populate({
        path: "products_figure",
        populate: {
          path: "product_id",
          model: "Figure",
        },
      });
    if (result) {
      res.status(200).json(result);
    } else {
      res.json({ message: "There are no orders at the moment" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/providers", userVerification, async (req, res) => {
  try {
    const result = await Provider.find({}).sort({ _id: -1 });

    if (result) {
      res.status(200).json(result);
    } else {
      res.json({ message: "There are no providers at the moment" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
