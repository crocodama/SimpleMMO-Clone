import jwt from 'jwt-simple';
export function createToken(id:string){
    const payloadJWT = jwt.encode(id, process.env.SECRET!);
    return payloadJWT;
}