import jwt from 'jsonwebtoken';

export const generarJWT = ( uid = '' ):string => {

    const payload = { _id: uid };
    const token = 
        jwt.sign( 
            payload, 
            process.env.SECRETORPRIVATEKEY || 'token_test', 
            {
                expiresIn : '4h'
            }
        );

    return token;
}