import { Request, Response } from "express";
import noteDatabase from "../../database/note.database";

async function POST(req: Request, res: Response) {
  const id = Number(req.headers.userauthentication) || 0;
  const body = req.body;

  const note = await noteDatabase.create({
    title: body.title,
    content: body.content,
    userId: id,
  });

  res.status(201).json(note);
}

export default POST;
