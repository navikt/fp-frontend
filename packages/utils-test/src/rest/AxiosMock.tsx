import { FunctionComponent, useEffect } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { RequestApi } from '@fpsak-frontend/rest-api';

interface Props {
  requestApi: RequestApi;
  children: any;
  data: {
    key: string;
    data: any,
    noRelLink?: boolean,
  }[];
  setApiMock?: (mockAdapter: MockAdapter) => void;
}

const AxiosMock: FunctionComponent<Props> = ({
  children,
  data,
  requestApi,
  setApiMock = () => undefined,
}) => {
  const apiMock = new MockAdapter(requestApi.getAxios());
  setApiMock(apiMock);

  requestApi.setLinks(data.filter((d) => !d.noRelLink).map((d) => ({
    href: d.key,
    rel: requestApi.endpointConfigList.find((c) => c.name === d.key).rel,
    type: 'GET',
  })));

  useEffect(() => {
    data.forEach((d) => {
      if (requestApi.getRestType(d.key) === 'GET') {
        apiMock.onGet(requestApi.getUrl(d.key)).reply(200, d.data);
      } else if (requestApi.getRestType(d.key) === 'GET_ASYNC') {
        apiMock.onGet(requestApi.getUrl(d.key)).replyOnce(200, d.data);
      } else if (requestApi.getRestType(d.key) === 'POST_ASYNC') {
        apiMock.onPost(requestApi.getUrl(d.key)).replyOnce(200, d.data);
      } else {
        apiMock.onPost(requestApi.getUrl(d.key)).reply(200, d.data);
      }
    });

    return () => {
      apiMock.reset();
      requestApi.setLinks([]);
      requestApi.resetCache();
    };
  }, []);
  return children;
};

export default AxiosMock;
