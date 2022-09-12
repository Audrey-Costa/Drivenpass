import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { TypeToken } from '../types/tokenType';
import { parseJwt } from '../utils/tokenUtils';

export function validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.replace("Bearer", "").trim();

    if (!token) {
        throw {type: "Unauthorized", message:"No Token"};
    }
    const payload: TypeToken = parseJwt(token);
    res.locals.userId = payload.id
    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    try {
        jwt.verify(token, SECRET);
        next();
    } catch (error) {
        throw {type: "Unauthorized", message:"Invalid Token"};
    }
    

};