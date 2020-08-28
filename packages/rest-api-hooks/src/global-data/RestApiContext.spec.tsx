import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { AbstractRequestApi } from '@fpsak-frontend/rest-api-new';

import { RestApiErrorProvider } from '../error/RestApiErrorContext';
import { RestApiProvider } from './RestApiContext';
import getUseGlobalStateRestApi from './useGlobalStateRestApi';
import useGlobalStateRestApiData from './useGlobalStateRestApiData';

class RequestApiMock extends AbstractRequestApi {
  mockdata: {[key: string]: RequestRunner} = {};

  execData: { endpointName: string; params: any }[] = [];

  missingPaths: string[] = [];

  public startRequest = (endpointName: string, params?: any) => {
    const data = this.mockdata[endpointName];
    if (!data) {
      throw new Error(`Det er ikke satt opp mock-data for endepunkt ${endpointName}`);
    }
    this.execData.push({
      endpointName,
      params,
    });
    return data;
  }

  public cancelRequest = () => undefined;

  public hasPath = (endpointName: string) => !this.missingPaths.some((p) => p === endpointName);

  public injectPaths = () => {}

  public isMock = () => false;

  public mock = () => { };

  public getRequestMockData = () => {}

  public setMissingPath = () => { }

  public clearAllMockData = () => { };
}

const useGlobalStateRestApi = getUseGlobalStateRestApi(new RequestApiMock());

const TestGlobalData = () => {
  useGlobalStateRestApi('NAV_ANSATT');

  const feilmeldinger = useGlobalStateRestApiData('NAV_ANSATT');
  return <>{feilmeldinger.map((feil) => <span key={feil}>{feil}</span>)}</>;
};

describe('<RestApiContext>', () => {
  it('skal legge til feilmelding og så hente alle i kontekst', () => {
    const wrapper = mount(
      <RestApiProvider>
        <RestApiErrorProvider>
          <TestGlobalData />
        </RestApiErrorProvider>
      </RestApiProvider>,
    );

    const spans = wrapper.find('span');
    expect(spans).to.have.length(2);
    expect(spans.first().text()).to.eql('Feilmeldingstest 1');
    expect(spans.last().text()).to.eql('Feilmeldingstest 2');
  });
});
