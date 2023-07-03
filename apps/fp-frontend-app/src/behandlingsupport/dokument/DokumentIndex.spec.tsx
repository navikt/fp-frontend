import React from 'react';
import { render, screen } from '@testing-library/react';
import { createIntl } from '@navikt/ft-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { RawIntlProvider } from 'react-intl';
import { requestFagsakApi, FagsakApiKeys } from '../../data/fagsakContextApi';
import DokumentIndex from './DokumentIndex';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<DokumentIndex>', () => {
  const documents = [
    {
      journalpostId: '1',
      dokumentId: '1',
      tittel: 'dok',
      tidspunkt: '10.10.2017 10:23',
      kommunikasjonsretning: 'Inn',
    },
    {
      journalpostId: '2',
      dokumentId: '2',
      tittel: 'dok1',
      tidspunkt: '10.10.2019 10:23',
      kommunikasjonsretning: 'Inn',
    },
    {
      journalpostId: '3',
      dokumentId: '3',
      tittel: 'dok2',
      tidspunkt: '10.10.2018 10:23',
      kommunikasjonsretning: 'Inn',
    },
  ];

  it('skal vise liste med tre dokumenter', async () => {
    const data = [{ key: FagsakApiKeys.ALL_DOCUMENTS.name, data: documents }];

    render(
      <RawIntlProvider value={intl}>
        <RestApiMock data={data} requestApi={requestFagsakApi}>
          <DokumentIndex behandlingUuid="1" behandlingVersjon={2} saksnummer="123" />
        </RestApiMock>
      </RawIntlProvider>,
    );

    expect(await screen.findAllByRole('row', { hidden: true })).toHaveLength(4);
  });
});
