import axios from 'axios';

import { Response } from './ResponseTsType';
import AsyncPollingStatus from './asyncPollingStatus';
import RequestRunner, { REQUEST_POLLING_CANCELLED } from './RequestRunner';
import NotificationMapper from './NotificationMapper';
import HttpClientApi from '../HttpClientApiTsType';

class NotificationHelper {
  mapper: NotificationMapper;

  requestStartedCallback = vi.fn();

  requestFinishedCallback = vi.fn();

  requestErrorCallback = vi.fn();

  statusRequestStartedCallback = vi.fn();

  statusRequestFinishedCallback = vi.fn();

  updatePollingMessageCallback = vi.fn();

  addPollingTimeoutEventHandler = vi.fn();

  constructor() {
    const mapper = new NotificationMapper();
    mapper.addRequestStartedEventHandler(this.requestStartedCallback);
    mapper.addRequestFinishedEventHandler(this.requestFinishedCallback);
    mapper.addRequestErrorEventHandlers(this.requestErrorCallback);
    mapper.addStatusRequestStartedEventHandler(this.statusRequestStartedCallback);
    mapper.addStatusRequestFinishedEventHandler(this.statusRequestFinishedCallback);
    mapper.addUpdatePollingMessageEventHandler(this.updatePollingMessageCallback);
    this.mapper = mapper;
  }
}

const httpClientGeneralMock = (response: Response) => ({
  get: () => Promise.resolve(response),
  post: () => Promise.resolve(response),
  put: () => Promise.resolve(response),
  getBlob: () => Promise.resolve(response),
  postBlob: () => Promise.resolve(response),
  postAndOpenBlob: () => Promise.resolve(response),
  getAsync: () => Promise.resolve(response),
  postAsync: () => Promise.resolve(response),
  putAsync: () => Promise.resolve(response),
  axiosInstance: axios.create(),
});

describe('RequestRunner', () => {
  const HTTP_ACCEPTED = 202;
  const defaultConfig = {
    maxPollingLimit: undefined,
  };

  it('skal hente data via get-kall', async () => {
    const response = {
      data: 'data',
      status: 200,
      headers: {
        location: '',
      },
    };
    const httpClientMock = httpClientGeneralMock(response);

    const process = new RequestRunner(httpClientMock, httpClientMock.get, 'behandling', defaultConfig);
    const notificationHelper = new NotificationHelper();
    process.setNotificationEmitter(notificationHelper.mapper.getNotificationEmitter());
    const params = {
      behandlingUuid: '1',
    };

    const result = await process.start(params);

    expect(result).toStrictEqual({ payload: 'data' });
    expect(notificationHelper.requestStartedCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.requestFinishedCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.requestFinishedCallback).toHaveBeenCalledWith('data', 'REQUEST_FINISHED', false);
    expect(notificationHelper.requestErrorCallback).toHaveBeenCalledTimes(0);
  });

  it('skal utføre long-polling request som når maks polling-forsøk', async () => {
    const response = {
      data: 'data',
      status: 200,
      headers: {
        location: '',
      },
    };

    const allGetResults = [
      {
        ...response,
        data: {
          status: AsyncPollingStatus.PENDING,
          message: 'Polling continues',
          pollIntervalMillis: 0,
        },
      },
      {
        ...response,
        data: {
          status: AsyncPollingStatus.PENDING,
          message: 'Polling continues',
          pollIntervalMillis: 0,
        },
      },
    ];

    const httpClientMock = {
      ...httpClientGeneralMock(response),
      getAsync: () =>
        Promise.resolve({
          ...response,
          status: HTTP_ACCEPTED,
          headers: {
            location: 'http://polling.url',
          },
        }),
      get: () => Promise.resolve(allGetResults.shift()),
    } as HttpClientApi;

    const params = {
      behandlingUuid: '1',
    };

    const config = {
      ...defaultConfig,
      maxPollingLimit: 1, // Vil nå taket etter første førsøk
    };

    const process = new RequestRunner(httpClientMock, httpClientMock.getAsync, 'behandling', config);
    const notificationHelper = new NotificationHelper();
    process.setNotificationEmitter(notificationHelper.mapper.getNotificationEmitter());

    await expect(process.start(params)).rejects.toMatchObject({
      message: 'Maximum polling attempts exceeded',
    });

    expect(notificationHelper.requestStartedCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.statusRequestStartedCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.statusRequestFinishedCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.updatePollingMessageCallback).toHaveBeenCalledTimes(1);
    expect(notificationHelper.updatePollingMessageCallback).toHaveBeenCalledWith(
      'Polling continues',
      'UPDATE_POLLING_MESSAGE',
      undefined,
    );
  });

  it('skal utføre long-polling request som en så avbryter manuelt', async () => {
    const response = {
      data: 'data',
      status: 200,
      headers: {
        location: '',
      },
    };

    const httpClientMock = {
      ...httpClientGeneralMock(response),
      getAsync: () =>
        Promise.resolve({
          ...response,
          status: HTTP_ACCEPTED,
          headers: {
            location: 'test',
          },
        }),
      get: () =>
        Promise.resolve({
          ...response,
          data: {
            status: AsyncPollingStatus.PENDING,
            message: 'Polling continues',
            pollIntervalMillis: 0,
          },
        }),
    } as HttpClientApi;

    const params = {
      behandlingUuid: '1',
    };

    const process = new RequestRunner(httpClientMock, httpClientMock.getAsync, 'behandling', defaultConfig);
    const mapper = new NotificationMapper();
    // Etter en runde med polling vil en stoppe prosessen via event
    mapper.addUpdatePollingMessageEventHandler(() => {
      process.cancel();
      return Promise.resolve('');
    });
    process.setNotificationEmitter(mapper.getNotificationEmitter());

    let errorMessage = '';

    try {
      await process.start(params);
    } catch (error: any) {
      errorMessage = error.message;
    }

    expect(errorMessage).toStrictEqual(REQUEST_POLLING_CANCELLED);
  });

  it('skal hente data med nullverdi', async () => {
    const response = {
      data: null,
      status: 200,
      headers: {
        location: '',
      },
    };

    const httpClientMock = {
      ...httpClientGeneralMock(response),
      get: () => Promise.resolve(response),
    } as HttpClientApi;

    const process = new RequestRunner(httpClientMock, httpClientMock.get, 'behandling', defaultConfig);
    const notificationHelper = new NotificationHelper();
    process.setNotificationEmitter(notificationHelper.mapper.getNotificationEmitter());
    const params = {
      behandlingUuid: '1',
    };

    const result = await process.start(params);

    expect(result).toStrictEqual({ payload: undefined });
    expect(notificationHelper.requestFinishedCallback).toHaveBeenCalledWith(null, 'REQUEST_FINISHED', false);
  });
});
