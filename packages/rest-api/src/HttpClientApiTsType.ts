import { AxiosInstance, ResponseType } from 'axios';
import { Response } from './requestApi/ResponseTsType';

interface HttpClientApi {
  get: (url: string, params?: any, responseType?: ResponseType) => Promise<Response>;
  post: (url: string, data: any, responseType?: ResponseType) => Promise<Response>;
  put: (url: string, data: any, responseType?: ResponseType) => Promise<Response>;
  getBlob: (url: string, params: any) => Promise<Response>;
  postBlob: (url: string, params: any) => Promise<Response>;
  getAsync: (url: string, params: any) => Promise<Response>;
  postAsync: (url: string, params: any) => Promise<Response>;
  putAsync: (url: string, params: any) => Promise<Response>;
  axiosInstance: AxiosInstance;
}

export default HttpClientApi;
