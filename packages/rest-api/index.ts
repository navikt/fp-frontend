import getAxiosHttpClientApi from './src/axios/getAxiosHttpClientApi';
import RequestApi from './src/requestApi/RequestApi';
import RequestConfig from './src/RequestConfig';

export { default as RequestApi } from './src/requestApi/RequestApi';
export { REQUEST_POLLING_CANCELLED } from './src/requestApi/RequestRunner';
export { default as RestApiConfigBuilder } from './src/RestApiConfigBuilder';
export { ErrorTypes, errorOfType, getErrorResponseData } from './src/requestApi/error/ErrorTypes';
export type { default as ErrorType } from './src/requestApi/error/errorTsType';
export type { default as Link } from './src/requestApi/LinkTsType';
export { default as RestKey } from './src/RestKey';
export { default as AsyncPollingStatus } from './src/requestApi/asyncPollingStatus';

export const createRequestApi = (configs: RequestConfig[]): RequestApi => new RequestApi(getAxiosHttpClientApi(), configs);
