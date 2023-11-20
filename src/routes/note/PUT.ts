import { Request, Response } from "express";
import noteDatabase from "../../database/note.database";

async function PUT(req: Request, res: Response) {
  const body = req.body;
  const noteId = Number(body.id) || 0;

  const note = await noteDatabase.update(noteId, {
    title: body.title,
    content: body.content,
    userId: body.userId,
  });

  res.status(200).json(note);
}

export default PUT;
