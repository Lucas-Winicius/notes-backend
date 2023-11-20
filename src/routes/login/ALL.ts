import { Request, Response } from "express";
import prisma from "../../services/database";

async function ALL(req: Request, res: Response) {
  const body = req.body;

  const user = await prisma.users.findFirst({
    where: {
      nick: body.nick,
      pass: body.pass,
    }
  });

  if (!user) {
    res.status(401).json({
      message: "wrong user nick or password",
    });
  }

  res
    .cookie("UserAuthentication", user?.id, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      httpOnly: true,
    })
    .status(201)
    .json(user);
}

export default ALL;
