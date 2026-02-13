// import { Request, Response } from 'express';
// import { User } from '../models/userModel';

// // Fake data for practice
// const users: User[] = [
//     { id: 1, name: 'John', email: 'john@gmail.com' },
//     { id: 2, name: 'Manasa', email: 'manasa@gmail.com' }
// ];

// // GET /users/:id
// export const getUserById = (req: Request, res: Response) => {
//     const idParam = req.params.id;

//     // Check if id parameter exists
//     if (!idParam) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     // Handle case where idParam could be an array
//     const idString = Array.isArray(idParam) ? idParam[0] : idParam;

//     if (!idString) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     const id = parseInt(idString);

//     // Check if id is a valid number
//     if (isNaN(id)) {
//         return res.status(400).json({ message: 'Invalid user ID' });
//     }

//     const user = users.find(u => u.id === id);

//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     res.send(user);
// };

import { Request, Response } from 'express';
// import { User } from '../models/userModel'; // Not strictly needed if we use prisma types directly, but good for explicit typing if needed.
import prisma from '../lib/prisma'; // Import the singleton instance

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    if (!idParam || Array.isArray(idParam)) {
        return res.status(400).json({ message: 'Invalid user ID parameter' });
    }

    const id = parseInt(idParam);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid user ID - must be a number' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        // Handle unique constraint violation for email, etc.
        res.status(500).json({ error: 'Error creating user' });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    if (!idParam || Array.isArray(idParam)) {
        return res.status(400).json({ message: 'Invalid user ID parameter' });
    }

    const id = parseInt(idParam);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid user ID - must be a number' });
    }

    const { name, email } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
            },
        });
        res.json(updatedUser);
    } catch (error) {
        // Prisma throws specific errors if record not found
        res.status(500).json({ error: 'Error updating user (User may not exist)' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const idParam = req.params.id;

    if (!idParam || Array.isArray(idParam)) {
        return res.status(400).json({ message: 'Invalid user ID parameter' });
    }

    const id = parseInt(idParam);

    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid user ID - must be a number' });
    }

    try {
        const deletedUser = await prisma.user.delete({
            where: { id },
        });
        res.json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user (User may not exist)' });
    }
};
