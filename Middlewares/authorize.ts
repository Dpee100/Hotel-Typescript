import { Request, Response, NextFunction } from 'express';

const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes((req as any).user?.role)) {
            return res.status(403).send({ error: 'Not authorized to access this resource' });
        }
        next();
    };
};

export default authorize;
