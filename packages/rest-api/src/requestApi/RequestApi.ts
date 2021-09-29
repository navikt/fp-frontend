import { AxiosInstance } from 'axios';
import HttpClientApi from '../HttpClientApiTsType';
import NotificationMapper from './NotificationMapper';
import Link from './LinkTsType';
import RequestRunner from './RequestRunner';
import ResponseCache from './ResponseCache';
import RequestConfig, { RequestType } from '../RequestConfig';

const DEFAULT_CATEGORY = 'DEFAULT_CATEGORY';

const getMethod = (httpClientApi: HttpClientApi, restMethod: string, isResponseBlob = false) => {
  if (restMethod === RequestType.GET) {
    return httpClientApi.get;
  }
  if (restMethod === RequestType.GET_ASYNC) {
    return httpClientApi.getAsync;
  }
  if (restMethod === RequestType.POST && !isResponseBlob) {
    return httpClientApi.post;
  }
  if (restMethod === RequestType.POST_ASYNC) {
    return httpClientApi.postAsync;
  }
  if (restMethod === RequestType.PUT) {
    return httpClientApi.put;
  }
  if (restMethod === RequestType.PUT_ASYNC) {
    return httpClientApi.putAsync;
  }
  return httpClientApi.postBlob;
};

const isGetRequest = (restMethod: string): boolean => restMethod === RequestType.GET || restMethod === RequestType.GET_ASYNC;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const waitUntilFinished = async (cache: ResponseCache, endpointName: string): Promise<undefined> => {
  if (cache.isFetching(endpointName)) {
    await wait(50);
    return waitUntilFinished(cache, endpointName);
  }
  return undefined;
};

/**
 * RequestApi
 *
 * Denne klassen opprettes med en referanse til et HttpClientApi (for eksempel Axios), context-path og konfig for
 * de enkelte endepunktene. Det blir så satt opp RequestRunner's for endepunktene. Desse kan hentes via metoden @see getRequestRunner.
 */
class RequestApi {
  httpClientApi: HttpClientApi;

  endpointConfigList: RequestConfig[];

  links: {[key: string]: Link[]} = {};

  notificationMapper: NotificationMapper = new NotificationMapper();

  cache: ResponseCache = new ResponseCache();

  constructor(httpClientApi: HttpClientApi, endpointConfigList: RequestConfig[]) {
    this.httpClientApi = httpClientApi;
    this.endpointConfigList = endpointConfigList;
  }

  private doCaching = async (endpointName: string): Promise<any> => {
    if (this.cache.hasFetched(endpointName)) {
      return this.cache.getData(endpointName);
    }
    if (this.cache.isFetching(endpointName)) {
      await waitUntilFinished(this.cache, endpointName);
      return this.cache.getData(endpointName);
    }
    this.cache.setToFetching(endpointName);
    return undefined;
  }

  private findLinks = (rel?: string): Link | undefined => Object.values(this.links).flat().find((link) => link.rel === rel);

  public startRequest = async <T, P>(endpointName: string, params?: P, isCachingOn = false): Promise<{ payload: T }> => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.findLinks(endpointConfig.rel);
    const restMethod = link ? link.type : endpointConfig.restMethod;
    const href = link ? link.href : endpointConfig.path;
    if (!href) {
      throw new Error(`Mangler href for endepunkt ${endpointName}`);
    }

    const useCaching = isCachingOn && isGetRequest(restMethod);
    if (useCaching) {
      const cachedResult = await this.doCaching(endpointName);
      if (cachedResult) {
        return cachedResult;
      }
    }

    const apiRestMethod = getMethod(this.httpClientApi, restMethod, endpointConfig.config.isResponseBlob);
    const runner = new RequestRunner(this.httpClientApi, apiRestMethod, href, endpointConfig.config);
    if (this.notificationMapper) {
      runner.setNotificationEmitter(this.notificationMapper.getNotificationEmitter());
    }

    if (!useCaching) {
      return runner.start<T, P>(params || link?.requestPayload);
    }

    try {
      const result = await runner.start<T, P>(params || link?.requestPayload);
      this.cache.addData(endpointName, result);
      return result;
    } catch (error) {
      this.cache.addData(endpointName, undefined);
      throw error;
    }
  }

  public hasPath = (endpointName: string): boolean => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.findLinks(endpointConfig.rel);
    return !!link?.href || !!endpointConfig?.path;
  };

  public setLinks = (links: Link[], linkCategory: string = DEFAULT_CATEGORY): void => {
    this.links = {
      ...this.links,
      [linkCategory]: links,
    };
  }

  public setRequestPendingHandler = (requestPendingHandler: (message?: string) => void): void => {
    this.notificationMapper.addUpdatePollingMessageEventHandler((data) => {
      requestPendingHandler(data);
    });
    this.notificationMapper.addRequestFinishedEventHandler(() => {
      requestPendingHandler();
    });
    this.notificationMapper.addRequestErrorEventHandlers(() => {
      requestPendingHandler();
    });
  }

  public setAddErrorMessageHandler = (addErrorMessage: (message: string) => void): void => {
    this.notificationMapper.addRequestErrorEventHandlers((errorData, type) => {
      addErrorMessage({ ...errorData, type });
    });
  };

  public resetCache = (): void => {
    this.cache = new ResponseCache();
  }

  public getAxios = (): AxiosInstance => this.httpClientApi.axiosInstance;

  public getUrl = (endpointName: string): string => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.findLinks(endpointConfig.rel);
    const url = link?.href || endpointConfig?.path;
    if (!url) {
      throw new Error(`Mangler url for endepunkt ${endpointName}`);
    }
    return url;
  };

  public getRestType = (endpointName: string): string => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.findLinks(endpointConfig.rel);
    const type = link?.type || endpointConfig?.restMethod;
    if (!type) {
      throw new Error(`Mangler type for endepunkt ${endpointName}`);
    }
    return type;
  };
}

export default RequestApi;
