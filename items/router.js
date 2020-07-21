const { Router } = require("express");

const Item = require("./model");

const router = new Router();

router.get("/", (req, res) => {
  Item.findAll()
    .then((items) => res.send(items))
    .catch(console.error);
});

router.post("/", (req, res) => {
  Item.create(req.body)
    .then((createdItem) => res.send(createdItem))
    .catch(console.error);
});

router.update("/:itemId", (req, res) => {
  Item.findByPk(req.params.itemId)
    .then((item) => item.update(req.body))
    .then((deletedItem) => res.send(`Deleted: ${deletedItem}`))
    .catch(console.error);
});

module.exports = router;
