import React, { FunctionComponent, useEffect, useState } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RequestApi } from '@navikt/fp-rest-api';

interface Props {
  requestApi: RequestApi;
  children: any;
  data: {
    key: string;
    data: any;
    noRelLink?: boolean;
  }[];
  setApiMock?: (mockAdapter: MockAdapter) => void;
}

const AxiosMock: FunctionComponent<Props> = ({ children, data, requestApi, setApiMock = () => undefined }) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const apiMock = new MockAdapter(requestApi.getAxios());
    setApiMock(apiMock);

    requestApi.setLinks(
      data
        .filter(d => !d.noRelLink)
        .map(d => ({
          href: d.key,
          rel: requestApi.endpointConfigList.find(c => c.name === d.key)?.rel || '',
          type: 'GET',
        })),
    );

    data.forEach(d => {
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

    setShowChildren(true);

    return () => {
      apiMock.restore();
      requestApi.setLinks([]);
      requestApi.resetCache();
    };
  }, []);
  return showChildren ? children : <LoadingPanel />;
};

export default AxiosMock;
