export { default as RestApiState } from './src/RestApiState';

export { RestApiStateContext, RestApiProvider } from './src/global-data/RestApiContext';

export { RestApiErrorProvider } from './src/error/RestApiErrorContext';
export { default as useRestApiError } from './src/error/useRestApiError';
export { default as useRestApiErrorDispatcher } from './src/error/useRestApiErrorDispatcher';

export type { MulipleRestApiInterface } from './src/local-data/useMultipleRestApi';
export { default as RestApiHooks } from './src/RestApiHooks';
