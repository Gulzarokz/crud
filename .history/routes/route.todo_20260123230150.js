import express from 'express';
import { createTodo, getTodos } from '../controllers/controller.todo.js';


const router = express.Router();

router.post("/todo", createTodo)
router.get("/get", getTodos)


export default router;