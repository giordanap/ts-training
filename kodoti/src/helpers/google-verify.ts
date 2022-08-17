import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client( process.env.GOOGLE_CLIENT_ID );

export async function googleVerify( token = '' ) {

  
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  });
  
  const payload = ticket.getPayload();

  const name = payload?.name;
  const imagen = payload?.picture;
  const email = payload?.email;

  return {
    name,
    imagen,
    email
  }
}