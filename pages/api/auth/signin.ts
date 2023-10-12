import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
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

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userWithEmail) {
      return res
        .status(401)
        .json({ errors: ['Email or password is incorrect'] });
    }

    const passwordValid = await bcrypt.compare(
      password,
      userWithEmail.password
    );

    if (!passwordValid) {
      return res
        .status(401)
        .json({ errors: ['Email or password is incorrect'] });
    }

    const alg = 'HS256';
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: userWithEmail.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('2h')
      .sign(secret);

    res.status(200).json({ token });
  }

  return res.status(404).json('Unknown endpoint');
}
