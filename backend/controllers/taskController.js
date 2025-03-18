const { Task } = require('../models');

//create task
exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      return res.status(400).json({ error: 'Title, description, and status are required' });
    }
  
    const userId = req.user.id; 
  
    try {
      const task = await Task.create({
        title,
        description,
        status,
        userId,  
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //get all tasks
  exports.getAllTasks = async (req, res) => {
    const userId = req.user.id;  
  
    try {
      const tasks = await Task.findAll({
        where: { userId },  
      });
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //get particular task of a user
  exports.getTaskById = async (req, res) => {
    const userId = req.user.id;  
  
    try {
      const task = await Task.findOne({
        where: { id: req.params.id, userId }, 
      });
  
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //update task
  exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    if (!title || !description || !status) {
      return res.status(400).json({ error: 'Title, description, and status are required' });
    }
  
    const userId = req.user.id; 
  
    try {
      const task = await Task.findOne({
        where: { id: req.params.id, userId },  
      });
  
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      await task.update({ title, description, status });
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //delete task
  exports.deleteTask = async (req, res) => {
    const userId = req.user.id;  
  
    try {
      const task = await Task.findOne({
        where: { id: req.params.id, userId },  
      });
  
      if (!task) return res.status(404).json({ message: 'Task not found' });
  
      await task.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  