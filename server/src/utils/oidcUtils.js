
export const createOidcUnknownError = (err) =>
  `Noe gikk galt med token exchange mot Azure.
   Feilmelding fra openid-client: (${err}).
   HTTP Status fra Azure: (${err.response?.statusCode} ${err.response?.statusMessage})
   Body fra Azure: ${JSON.stringify(err.response?.body)}`;
