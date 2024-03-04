import Users, { UserAttributes } from './../entities/Users';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export class UserRepository {
  static async registerUser(userData: UserAttributes): Promise<Users> {
    const existingUser = await Users.findOne({ where: { mail: userData.mail } });
  
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
  
    const hashedPassword = await bcrypt.hash(userData.password, 10);
  
    const newUser = await Users.create({
      username: userData.username,
      mail: userData.mail,
      roles: userData.roles,
      password: hashedPassword,
      phone: userData.phone,
    });
  
    return newUser;
  }
  
  static async findById(userId: number): Promise<UserAttributes | null> {
    try {
      const user = await Users.findByPk(userId);
      return user ? user.toJSON() : null;
    } catch (error) {
      console.error('Error in findById:', error);
      throw error;
    }
  }

  static async loginUser(mail: string, password: string): Promise<Users | null> {
    if (!mail) {
      throw new Error('Email is required for login');
    }
  
    const user = await Users.findOne({ where: { mail } });
  
    if (!user) {
      return null;
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return null;
    }
  
    return user;
  }

  static async sendValidationEmail(user: Users) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: user.mail,
      subject: 'Validación de correo electrónico',
      text: `Hola ${user.username}, por favor haz clic en el siguiente enlace para validar tu correo electrónico: http://localhost:3000/validate-email?userId=${user.id}`
    };

    return transporter.sendMail(mailOptions);
  }
}
