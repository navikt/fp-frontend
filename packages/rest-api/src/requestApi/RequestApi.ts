import HttpClientApi from '../HttpClientApiTsType';
import NotificationMapper from './NotificationMapper';
import Link from './LinkTsType';
import AbstractRequestApi from './AbstractRequestApi';
import RequestRunner from './RequestRunner';
import ResponseCache from './ResponseCache';
import RequestConfig, { RequestType } from '../RequestConfig';

const getMethod = (httpClientApi: HttpClientApi, restMethod: string, isResponseBlob: boolean) => {
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

const isGetRequest = (restMethod) => restMethod === RequestType.GET || restMethod === RequestType.GET_ASYNC;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitUntilFinished = async (cache, endpointName) => {
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
class RequestApi extends AbstractRequestApi {
  httpClientApi: HttpClientApi;

  endpointConfigList: RequestConfig[];

  links: Link[] = [];

  notificationMapper: NotificationMapper = new NotificationMapper();

  cache: ResponseCache = new ResponseCache();

  constructor(httpClientApi: HttpClientApi, endpointConfigList: RequestConfig[]) {
    super();
    this.httpClientApi = httpClientApi;
    this.endpointConfigList = endpointConfigList;
  }

  private doCaching = async (endpointName) => {
    if (this.cache.hasFetched(endpointName)) {
      return this.cache.getData(endpointName);
    } if (this.cache.isFetching(endpointName)) {
      await waitUntilFinished(this.cache, endpointName);
      return this.cache.getData(endpointName);
    }
    this.cache.setToFetching(endpointName);
    return undefined;
  }

  public startRequest = async (endpointName: string, params?: any, isCachingOn = false) => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.links.find((l) => l.rel === endpointConfig.rel);
    const restMethod = link ? link.type : endpointConfig.restMethod;
    const href = link ? link.href : endpointConfig.path;

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
      return runner.start(params || link?.requestPayload);
    }

    try {
      const result = await runner.start(params || link?.requestPayload);
      this.cache.addData(endpointName, result);
      return result;
    } catch (error) {
      this.cache.addData(endpointName, undefined);
      throw error;
    }
  }

  public hasPath = (endpointName: string) => {
    const endpointConfig = this.endpointConfigList.find((c) => c.name === endpointName);
    if (!endpointConfig) {
      throw new Error(`Mangler konfig for endepunkt ${endpointName}`);
    }
    const link = this.links.find((l) => l.rel === endpointConfig.rel);
    return !!link?.href || !!endpointConfig?.path;
  };

  public setLinks = (links: Link[]) => {
    this.links = links;
  }

  public addLinks = (links: Link[]) => {
    this.links = this.links.concat(links);
  }

  public setRequestPendingHandler = (requestPendingHandler) => {
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

  public setAddErrorMessageHandler = (addErrorMessage) => {
    this.notificationMapper.addRequestErrorEventHandlers((errorData, type) => {
      addErrorMessage({ ...errorData, type });
    });
  };

  public resetCache = () => {
    this.cache = new ResponseCache();
  }

  public isMock = () => false;

  // Kun for test
  public mock = () => { throw new Error('Not Implemented'); };

  public setMissingPath = () => { throw new Error('Not Implemented'); };

  public getRequestMockData = () => { throw new Error('Not Implemented'); };

  public clearAllMockData = () => { throw new Error('Not Implemented'); };
}

export default RequestApi;
