import { FunctionComponent, useEffect } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { RequestApi } from '@fpsak-frontend/rest-api';

interface Props {
  requestApi: RequestApi;
  children: any;
  data: {
    key: string;
    data: any,
  }[];
}

const AxiosMock: FunctionComponent<Props> = ({
  children,
  data,
  requestApi,
}) => {
  const apiMock = new MockAdapter(requestApi.getAxios());
  useEffect(() => {
    data.forEach((d) => {
      const url = requestApi.getUrl(d.key);
      const urlOrKey = url || d.key;
      if (requestApi.getRestType(d.key) === 'GET') {
        apiMock.onGet(urlOrKey).reply(200, d.data);
      } else if (requestApi.getRestType(d.key) === 'GET_ASYNC') {
        apiMock.onGet(urlOrKey).replyOnce(200, d.data);
      } else {
        apiMock.onPost(urlOrKey).reply(200, d.data);
      }
    });

    return () => {
      apiMock.reset();
    };
  });
  return children;
};

export default AxiosMock;
