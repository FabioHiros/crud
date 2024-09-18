import express from 'express'
import { controllers } from '../controllers/teste';

const router = express.Router();


// router.param('id',controllers.checkID)

router
.route('/')
.get(controllers.getAllUsers)
.post(controllers.createUser)


router
.route('/:id')
.put(controllers.updateUser)     // Update a user by ID
.delete(controllers.deleteUser); // Delete a user by ID

export default router