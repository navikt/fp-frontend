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
      if (requestApi.getRestType(d.key) === 'GET') {
        apiMock.onGet(requestApi.getUrl(d.key)).reply(200, d.data);
      } else if (requestApi.getRestType(d.key) === 'GET_ASYNC') {
        apiMock.onGet(requestApi.getUrl(d.key)).replyOnce(200, d.data);
      } else {
        apiMock.onPost(requestApi.getUrl(d.key)).reply(200, d.data);
      }
    });

    return () => {
      apiMock.reset();
    };
  });
  return children;
};

export default AxiosMock;
