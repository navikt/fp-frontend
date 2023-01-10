import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType,
} from '@navikt/ft-kodeverk';

import { FagsakEnkel, KjønnkodeEnum } from '@fpsak-frontend/types';
import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { alleKodeverkLos } from '@fpsak-frontend/storybook-utils';
import { Oppgave } from '@fpsak-frontend/los-felles';

import FagsakSearch from './FagsakSearch';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/FagsakSearch',
  component: FagsakSearch,
  decorators: [withIntl],
};

const Template: Story<{ fagsaker: FagsakEnkel[], fagsakOppgaver: Oppgave[] }> = ({
  fagsaker,
  fagsakOppgaver,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FagsakSearch
        fagsaker={fagsaker}
        fagsakOppgaver={fagsakOppgaver}
        searchFagsakCallback={action('button-click')}
        searchResultReceived
        åpneFagsak={action('button-click')}
        selectOppgaveCallback={action('button-click')}
        searchStarted={false}
        resetSearch={action('button-click')}
        kanSaksbehandle
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  fagsaker: [{
    saksnummer: '12213234',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    status: FagsakStatus.UNDER_BEHANDLING,
    person: {
      navn: 'Espen Utvikler',
      fødselsdato: '1980-10-10',
      fødselsnummer: '1010',
      kjønn: KjønnkodeEnum.MANN,
    },
    barnFødt: '2019-12-12',
    aktørId: '23',
    opprettet: '',
  }],
  fagsakOppgaver: [{
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
  }, {
    id: 2,
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
  }],
};

export const IngentingBleFunnet = Template.bind({});
IngentingBleFunnet.args = {
  fagsaker: [],
  fagsakOppgaver: [],
};
