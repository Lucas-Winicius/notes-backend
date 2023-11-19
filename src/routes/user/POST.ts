import { Request, Response } from "express";
import userDatabase from "../../database/user.database";

async function POST(req: Request, res: Response) {
  const body = req.body;

  const user = await userDatabase.create({
    nick: body.nick,
    pass: body.pass,
  });

  res
    .cookie("UserAuthentication", user.id, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      httpOnly: true,
    })
    .status(201)
    .json(user);
}

export default POST;
