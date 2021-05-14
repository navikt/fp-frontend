import RequestApi from './RequestApi';
import RequestConfig from '../RequestConfig';
import HttpClientApi from '../HttpClientApiTsType';
import { Response } from './ResponseTsType';

describe('RequestApi', () => {
  const httpClientGeneralMock = {
    get: () => undefined,
    post: () => Promise.resolve({} as Response),
    put: () => Promise.resolve({} as Response),
    getBlob: () => Promise.resolve({} as Response),
    postBlob: () => Promise.resolve({} as Response),
    postAndOpenBlob: () => undefined,
    getAsync: () => Promise.resolve({} as Response),
    postAsync: () => Promise.resolve({} as Response),
    putAsync: () => Promise.resolve({} as Response),
  };

  it('skal utføre get-request', async () => {
    const response = {
      data: 'data',
      status: 200,
      headers: {
        location: '',
      },
    };

    const httpClientMock = {
      ...httpClientGeneralMock,
      get: () => Promise.resolve(response),
    } as HttpClientApi;

    const requestConfig = new RequestConfig('BEHANDLING', '/behandling');
    const params = {
      behandlingId: 1,
    };

    const api = new RequestApi(httpClientMock, [requestConfig]);

    const result = await api.startRequest(requestConfig.name, params);

    expect(result.payload).toEqual('data');
  });
});
