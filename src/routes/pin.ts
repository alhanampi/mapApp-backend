import { Router, Request, Response } from "express";
import PinModel, { IPin } from "../models/Pin";

const router = Router();

router.get("/", async (_: Request, res: Response) => {
  try {
    const pins: IPin[] = await PinModel.find();
    res.status(200).json(pins);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newPin: IPin = await PinModel.create(req.body);
    res.status(200).json(newPin);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
