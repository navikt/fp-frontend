import React from 'react';
import { render, screen } from '@testing-library/react';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { requestApi, FpsakApiKeys } from '../../data/fpsakApi';
import { DokumentIndex } from './DokumentIndex';

describe('<DokumentIndex>', () => {
  const documents = [{
    journalpostId: '1',
    dokumentId: '1',
    tittel: 'dok',
    tidspunkt: '10.10.2017 10:23',
    kommunikasjonsretning: 'Inn',
  }, {
    journalpostId: '2',
    dokumentId: '2',
    tittel: 'dok1',
    tidspunkt: '10.10.2019 10:23',
    kommunikasjonsretning: 'Inn',
  }, {
    journalpostId: '3',
    dokumentId: '3',
    tittel: 'dok2',
    tidspunkt: '10.10.2018 10:23',
    kommunikasjonsretning: 'Inn',
  }];

  it('skal vise liste med tre dokumenter', async () => {
    const data = [
      { key: FpsakApiKeys.ALL_DOCUMENTS.name, data: documents },
    ];

    render(
      <RestApiMock data={data} requestApi={requestApi}>
        <DokumentIndex
          behandlingUuid="1"
          behandlingVersjon={2}
          saksnummer="123"
        />
      </RestApiMock>,
    );

    expect(await screen.findAllByRole('row', { hidden: true })).toHaveLength(4);
  });
});
