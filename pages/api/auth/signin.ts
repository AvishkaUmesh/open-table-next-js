import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { setCookie } from 'cookies-next';
import * as jose from 'jose';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is not valid',
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errorMessage: 'Password is invalid',
      },
    ];

    validationSchema.forEach((validation) => {
      if (!validation.valid) {
        errors.push(validation.errorMessage);
      }
    });

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ errors: ['Email or password is incorrect'] });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res
        .status(401)
        .json({ errors: ['Email or password is incorrect'] });
    }

    const alg = 'HS256';
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('2h')
      .sign(secret);

    setCookie('jwt', token, { req, res, maxAge: 60 * 6 * 24 });

    res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });
  }

  return res.status(404).json('Unknown endpoint');
}
