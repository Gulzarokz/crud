import express from 'express';
import { createTodo, getTodos, updateTodo } from '../controllers/controller.todo.js';


const router = express.Router();

router.post("/todo", createTodo)
router.get("/get", getTodos)
router.put("/update/:id", updateTodo)
router.delete("/delete/:id", deleteTodo)


export default router;