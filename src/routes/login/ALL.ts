import { Request, Response } from "express";
import prisma from "../../services/database";
import userDatabase from "../../database/user.database";

async function ALL(req: Request, res: Response) {
  const body = req.body;

  const user = await prisma.users.findFirst({
    where: {
      nick: body.nick,
      pass: body.pass,
    },
  });

  if (user) {
    return res
      .cookie("UserAuthentication", user?.id, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        httpOnly: true,
      })
      .status(200)
      .json(user);
  }

  const userExist = await prisma.users.findUnique({
    where: { nick: body.nick },
  });

  if (userExist) {
    return res.status(401).json({
      message: "User or pass wrong",
      status: 401,
    });
  }

  const userCreated = await userDatabase.create({
    nick: body.nick,
    pass: body.pass,
  });

  return res
    .cookie("UserAuthentication", userCreated.id, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      httpOnly: true,
    })
    .status(201)
    .json(userCreated);
}

export default ALL;
