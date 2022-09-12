import { TypeToken } from "../types/tokenType";

export function parseJwt (token: string) {
    const payload: TypeToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

    return payload;
};