import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.url, new Date().toLocaleString());
  next();
};

export default logger;
