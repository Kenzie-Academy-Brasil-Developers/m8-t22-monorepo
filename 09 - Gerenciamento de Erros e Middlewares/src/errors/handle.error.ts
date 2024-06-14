import { NextFunction, Request, Response } from "express";
import { ApiError } from "./api.error";

export function handleGlobalErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    // console.log("########");
    // console.log(error.message);
    // console.log(error.statusCode);
    // console.log("########");

    return res.status(error.statusCode).json({ error: error.message });
  }

  console.log(error);
  return res.status(500).json({ error: "Internal Server Error" });
}
