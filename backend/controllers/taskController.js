const Task = require("../models/Task");

// @desc    Get all tasks
// @route   GET /api/tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1,
    });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};


// @desc    Create new task
// @route   POST /api/tasks
const createTask = async (req, res, next) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      completed,
    } = req.body;


    if (!title) {
      return res.status(400).json({
        message: "Please add a task title",
      });
    }


    const task = await Task.create({

   title:req.body.title,

   description:req.body.description,

   priority:req.body.priority,

   dueDate:req.body.dueDate,

   completed:req.body.completed

});

    res.status(201).json(task);

  } catch (error) {
    next(error);
  }
};


// @desc    Update task
// @route   PUT /api/tasks/:id
const updateTask = async (req, res, next) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    res.status(200).json(task);

  } catch (error) {
    next(error);
  }
};


// @desc    Delete task
// @route   DELETE /api/tasks/:id
const deleteTask = async (req, res, next) => {
  try {

    const task = await Task.findByIdAndDelete(
      req.params.id
    );


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    res.status(200).json({
      message: "Task deleted successfully",
      id: req.params.id,
    });


  } catch (error) {
    next(error);
  }
};


module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};