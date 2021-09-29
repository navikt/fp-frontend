import React, { FunctionComponent } from 'react';
import { RequestApi } from '@fpsak-frontend/rest-api';
import { RestApiProvider } from '@fpsak-frontend/rest-api-hooks';
import AxiosMock from './AxiosMock';
import RestApiGlobalStateMock from './RestApiGlobalStateMock';

interface Props {
  children: any;
  data: {
    key: string;
    global?: boolean;
    data: any,
  }[];
  requestApi: RequestApi;
}

const RestApiMock: FunctionComponent<Props> = ({
  children,
  data,
  requestApi,
}) => (
  <RestApiProvider>
    <RestApiGlobalStateMock data={data.filter((d) => d.global)}>
      <AxiosMock data={data} requestApi={requestApi}>
        {children}
      </AxiosMock>
    </RestApiGlobalStateMock>
  </RestApiProvider>
);

export default RestApiMock;
