import jwt, { JwtPayload } from "jsonwebtoken";

export const generateJWT = (payload : JwtPayload) => {   
     const token = jwt.sign(payload, 'secreto', {
        expiresIn: '180d'
     })
     return token
}