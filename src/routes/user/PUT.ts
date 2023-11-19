import { Request, Response } from "express";
import userDatabase from "../../database/user.database";

async function PUT(req: Request, res: Response) {
  const body = req.body;
  const id = Number(req.headers.userauthentication) || 0;

  const user = await userDatabase.update(id, {
    nick: body.nick,
    pass: body.pass,
  });

  res.status(200).json(user);
}

export default PUT;
