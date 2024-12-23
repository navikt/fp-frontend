import ErrorType from './errorTsType';

/**
 * Feiltyper til differensiering av framvisning i GUI
 * Skal speile FeilType.java en-til-en
 */
export enum ErrorTypes {
  MANGLER_TILGANG_FEIL = 'MANGLER_TILGANG_FEIL',
  TOMT_RESULTAT_FEIL = 'TOMT_RESULTAT_FEIL',
  BEHANDLING_ENDRET_FEIL = 'BEHANDLING_ENDRET_FEIL',
  GENERELL_FEIL = 'GENERELL_FEIL',
}

export const handledErrorTypes = [ErrorTypes.MANGLER_TILGANG_FEIL];

export const getErrorResponseData = (error?: ErrorType): any => error?.response?.data ?? error;

export const errorOfType = (errorType: string, error?: ErrorType): boolean =>
  !!error && getErrorResponseData(error).type === errorType;

export const isHandledError = (errorType?: string): boolean =>
  !!errorType && handledErrorTypes.some(het => het === errorType);

const hasStatusCode =
  (statusCode: number) =>
  (errorStatus?: number): boolean =>
    errorStatus === statusCode;

export const is401Error = hasStatusCode(401);

export const is418Error = hasStatusCode(418);
