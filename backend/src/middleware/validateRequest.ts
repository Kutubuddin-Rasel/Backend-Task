import { Request, Response, NextFunction } from 'express';

export const sanitizeBody = (req: Request, _res: Response, next: NextFunction): void => {
    if (req.body && typeof req.body === 'object') {
        Object.keys(req.body).forEach((key) => {
            if (req.body[key] === undefined || req.body[key] === null) {
                delete req.body[key];
            }
        });
    }
    next();
};
