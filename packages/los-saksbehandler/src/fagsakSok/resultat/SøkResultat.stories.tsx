import React from 'react';
import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';
import { KjønnkodeEnum } from '@navikt/fp-types';
import { RestApiMock } from '@navikt/fp-utils-test';

import { RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
import { SøkResultat } from './SøkResultat';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/søk/SøkResultat',
  component: SøkResultat,
  decorators: [withIntl],
  render: props => {
    const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <SøkResultat {...props} />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof SøkResultat>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    åpneFagsak: action('button-click'),
    selectOppgaveCallback: action('button-click'),
    fagsaker: [
      {
        saksnummer: '12213234',
        aktørId: '',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        status: FagsakStatus.UNDER_BEHANDLING,
        person: {
          navn: 'Espen Utvikler',
          fødselsdato: '1980-10-10',
          fødselsnummer: '1010',
          kjønn: KjønnkodeEnum.MANN,
        },
        barnFødt: '2019-12-12',
        opprettet: '',
      },
    ],
    fagsakOppgaver: [
      {
        id: 1,
        status: {
          erReservert: false,
        },
        saksnummer: 12213234,
        personnummer: '1010',
        navn: 'Espen Utvikler',
        system: 'SAK',
        behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
        behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
        opprettetTidspunkt: '2020-01-01',
        behandlingsfrist: '2020-01-01',
        fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
        erTilSaksbehandling: true,
        behandlingId: '12344',
      },
    ],
  },
};
