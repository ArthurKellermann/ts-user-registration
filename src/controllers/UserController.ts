import User from '../schemas/User';
import { Request, Response } from 'express';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find();
      return res.status(200).json({ users });
    } catch (e) {
      return res.status(400).json({ error: 'Bad request' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.status(201).json({ user });
    } catch (e) {
      return res.status(400).json({ error: 'Check the request fields' });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      if (!id) {
        return res
          .status(400)
          .json({ message: 'Invalid ID, check the params' });
      }
      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json({ message: 'User does not exist' });
      }
      return res.status(200).json({
        user: {
          _id: user?._id,
          fullName: user?.fullName(),
          email: user?.email,
        },
      });
    } catch (e) {
      return res.status(400).json({ error: 'Check the request fields' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { email, firstName, lastName } = req.body;
    const user = await User.findById(id);

    if (!user) return res.status(400).json({ message: 'User doest not exist' });

    await User.findByIdAndUpdate(
      id,
      { email, firstName, lastName },
      { new: true },
    );
    return res.status(200).json({ message: 'Successfully updated user' });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({ message: 'User doest not exist' });
      }
      await User.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Successfully deleted user' });
    } catch (e) {
      return res.status(400).json({ error: 'Check the request fields' });
    }
  }
}

export default new UserController();
