import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserRepository } from './../../repository/userRepository';
import { UserAttributes } from '../../entities/Users'; // Agrega esta línea
import bcrypt from 'bcryptjs';

export const registerUserApi = async (req: Request, res: Response) => {
  try {
    const userData: UserAttributes = req.body;

    if (!userData.mail || !userData.password || !userData.username || !userData.roles || userData.roles.length === 0) {
      return res.status(400).json({ message: 'Email, password, username, and at least one role are required' });
    }
    const newUser = await UserRepository.registerUser(userData);

    await UserRepository.sendValidationEmail(newUser);

    res.status(201).json({ message: 'User registered successfully. Please check your email to validate your account.' });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: error.message || 'Bad Request' });
  }
};





export const loginApi = async (req: Request, res: Response) => {
  try {
    const { mail, password } = req.body;
    const user = await UserRepository.loginUser(mail, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
};

  
export const logout = (req: Request, res: Response) => {
  res.clearCookie('token');
  res.redirect("/auth/login");
  res.status(200).json({ message: 'Logout exitoso' });
};

export const showRegistrationForm = (req: Request, res: Response) => {
  res.render('signup');
};

export const showLoginForm = (req: Request, res: Response) => {
  res.render('login');
};
