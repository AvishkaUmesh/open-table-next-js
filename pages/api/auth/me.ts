import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const token = req.headers.authorization!.split(' ')[1];
    const payload = jwt.decode(token) as { email: string };

    if (!payload) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
      select: {
        id: true,
        email: true,
        first_name: true,
        last_name: true,
        city: true,
        phone: true,
      },
    });

    return res.status(200).json({ user });
  }
}
