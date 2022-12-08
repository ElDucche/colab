// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import {prisma } from '../../../lib/prisma'

type Data = {
  todo?: Todo,
  error?: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    if (req.method === 'PUT') {
        const body: any = JSON.parse(req.body);
        console.log(body)
        const todo = await prisma.todo.update({
            where: {
                id: parseInt(req.query.id as string)
            },
            select: {
                id: true,
                title: true,
                isCompleted: true,
            },
            data: body,
        })
        res.status(200).json({ todo })
    }
  

    if (req.method === 'POST') {
        const body: any = JSON.parse(req.body);
        const todo = await prisma.todo.create({
            data: body,
        })
        res.status(200).json({ todo })
    }
}
