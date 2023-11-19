import { Request, Response } from "express";
import userDatabase from "../../database/user.database";

async function DELETE(req: Request, res: Response) {
  const id = Number(req.headers.userauthentication) || 0;

  const user = await userDatabase.delete(id);

  res.status(200).json(user);
}

export default DELETE;
