import jwt from 'jsonwebtoken';

export const generarJWT = ( uid:string = '' ) => {

    return new Promise( (reject, resolve)  => {

        const payload = { uid };

        jwt.sign( payload,  <string>process.env.SECRETORPRIVATEKEY, {
            expiresIn : '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            }
        })

    } )
}