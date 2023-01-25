const router = require("express").Router();
const Todo = require("../models/tasks");

// create todo
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// update/edit todo

router.patch("/:id", async (req, res) => {
  try {
    const { id: TodoID } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: TodoID }, req.body);
    if (!todo) {
      return res
        .status(400)
        .json({ message: `there is no task with this id ${TodoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});
// to delete todo
router.delete("/:id", async (req, res) => {
  try {
    const { id: TodoID } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: TodoID });
    if (!todo) {
      return res
        .status(400)
        .json({ message: `there is no task with this id ${TodoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
