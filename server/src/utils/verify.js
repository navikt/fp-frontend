import { errors, jwtVerify } from 'jose';

export const verifyJwt = (bearerToken, jwkSet, issuer) => new Promise( () => {
  const token = bearerToken.replace('Bearer ', '');

  try {
    return jwtVerify(token, jwkSet, {
      issuer: issuer.metadata.issuer,
    });
  } catch (err) {
    if (err instanceof errors.JWTExpired) {
      return {
        errorType: 'EXPIRED',
        message: err.message,
        error: err,
      };
    }

    if (err instanceof errors.JOSEError) {
      return {
        errorType: 'UNKNOWN_JOSE_ERROR',
        message: err.message,
        error: err,
      };
    }

    throw err;
  }
});
