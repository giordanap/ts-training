import jwt from 'jsonwebtoken';

export const generarJWT = ( uid = '' ):Promise<string> => {

    return new Promise( (reject, resolve)  => {

        const payload = { uid };
        const privateKey = process.env.SECRETORPRIVATEKEY || '';
        jwt.sign( payload,  privateKey, {
            expiresIn : '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject( 'No se pudo generar el token' );
            } else {
                resolve( <string>token );
            }
        })
        console.log('aca');
    } )
}