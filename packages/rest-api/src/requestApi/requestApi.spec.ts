import axios from 'axios';

import RequestApi from './RequestApi';
import RequestConfig from '../RequestConfig';
import { Response } from './ResponseTsType';

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

describe('RequestApi', () => {
  it('skal utføre get-request', async () => {
    const response = {
      data: 'data',
      status: 200,
      headers: {
        location: '',
      },
    };

    const httpClientMock = httpClientGeneralMock(response);

    const requestConfig = new RequestConfig('BEHANDLING', '/behandling');
    const params = {
      behandlingId: 1,
    };

    const api = new RequestApi(httpClientMock, [requestConfig]);

    const result = await api.startRequest(requestConfig.name, params);

    expect(result.payload).toEqual('data');
  });
});
