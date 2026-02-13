// import { Router } from 'express';
// import { getUserById } from '../controllers/userController';

// const router = Router();

// // Route Parameter
// router.get('/:id', getUserById);

// export default router;


import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// GET all users
router.get('/', getUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST create new user
router.post('/', createUser);

// PUT update user by ID
router.put('/:id', updateUser);

// DELETE user by ID
router.delete('/:id', deleteUser);

export default router;

