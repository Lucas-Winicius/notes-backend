import { Request, Response } from "express";
import noteDatabase from "../../database/note.database";

async function DELETE(req: Request, res: Response) {
  const id = Number(req.params.id) || 0;

  const note = await noteDatabase.delete(id);

  res.status(200).json(note);
}

export default DELETE;
