import React, { FunctionComponent } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { RequestApi } from '@fpsak-frontend/rest-api';
import { RestApiProvider, RestApiErrorProvider } from '@fpsak-frontend/rest-api-hooks';
import AxiosMock from './AxiosMock';
import RestApiGlobalStateMock from './RestApiGlobalStateMock';

interface Props {
  children: any;
  data: {
    key: string;
    global?: boolean;
    data: any,
    noRelLink?: boolean,
  }[];
  requestApi: RequestApi;
  errors?: {
    type: string;
    feilmelding: string;
  }[];
  setApiMock?: (mockAdapter: MockAdapter) => void;
}

const RestApiMock: FunctionComponent<Props> = ({
  children,
  data,
  requestApi,
  errors,
  setApiMock,
}) => (
  <RestApiProvider>
    <RestApiErrorProvider initialState={errors ? { errors } : undefined}>
      <RestApiGlobalStateMock data={data.filter((d) => d.global)}>
        <AxiosMock data={data} requestApi={requestApi} setApiMock={setApiMock}>
          {children}
        </AxiosMock>
      </RestApiGlobalStateMock>
    </RestApiErrorProvider>
  </RestApiProvider>
);

export default RestApiMock;
