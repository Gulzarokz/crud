import express from 'express';
import { createTodo } from '../controllers/controller.todo.js

const router = express.Router();


router.post('/todo', createTodo);

export default router;