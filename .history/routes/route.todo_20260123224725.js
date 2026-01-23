import express from 'express';
import { createTodo } from '../controllers/controller.todo.js';


const router = express.Router();

router.get("todo", createTodo)


export default router;