import React, { FunctionComponent } from 'react';
import { RequestApi } from '@fpsak-frontend/rest-api';
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
  <RestApiGlobalStateMock data={data.filter((d) => d.global)}>
    <AxiosMock data={data} requestApi={requestApi}>
      {children}
    </AxiosMock>
  </RestApiGlobalStateMock>
);

export default RestApiMock;
