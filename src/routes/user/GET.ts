import { Request, Response } from "express";
import userDatabase from "../../database/user.database";

async function GET(req: Request, res: Response) {
  const id = Number(req.headers.userauthentication) || 0;

  const user = await userDatabase.findOne(id);

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  res.status(200).json(user);
}

export default GET;
