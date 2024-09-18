import express, { Response, Request } from 'express';
import prisma  from '../connector'; // Make sure your prisma import is correct



class ControllersTeste {

  public getAllUsers = async (request: Request, response: Response) => {
    try {
      // Fetch data from the database using Prisma
      const users = await prisma.user.findMany();
      
      // Send the result as a JSON response
      response.status(200).json(users);
    } catch (error) {
      // Handle any errors that occur during the database query
      response.status(500).json({ message: 'Error fetching users', error });
    }
  }
  public createUser = async (request: Request, response: Response) => {
    try {
     const {email,password,name,role} = request.body;
      // Fetch data from the database using Prisma
      const users = await prisma.user.create({
        data:{
            name,
            email,
            password,
            role
        }

      });
      
      // Send the result as a JSON response
      response.status(200).json(users);
    } catch (error) {
      // Handle any errors that occur during the database query
      response.status(500).json({ message: 'Error fetching users', error });
    }
  }

  public updateUser = async (request: Request, response: Response) => {
    const { id } = request.params; // Get the user ID from the URL
    const { password, name, role } = request.body; // Data to update
    console.log(request.body)
    console.log(request.params)
    try {
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) }, // Update based on ID
        data: {
          
          password,
          name,
          role
        }
      });
      response.status(200).json(updatedUser);
    } catch (error) {
      response.status(500).json({ message: 'Error updating user', error });
    }
  };

  // Delete a user by ID
  public deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params; // Get the user ID from the URL

    try {
      await prisma.user.delete({
        where: { id: Number(id) } // Delete based on ID
      });
      response.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      response.status(500).json({ message: 'Error deleting user', error });
    }
  };

}

const controllers = new ControllersTeste();

export { controllers };