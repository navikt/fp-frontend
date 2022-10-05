import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import {
  BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType,
} from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { alleKodeverkLos } from '@fpsak-frontend/storybook-utils';

import FagsakSearch from './FagsakSearch';
import Fagsak from '../../typer/fagsakTsType';
import Oppgave from '../../typer/oppgaveTsType';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/FagsakSearch',
  component: FagsakSearch,
  decorators: [withIntl],
};

const Template: Story<{ fagsaker: Fagsak[], fagsakOppgaver: Oppgave[] }> = ({
  fagsaker,
  fagsakOppgaver,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.NAV_ANSATT.name, data: { kanSaksbehandle: true }, global: true },
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverkLos, global: true },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FagsakSearch
        fagsaker={fagsaker}
        fagsakOppgaver={fagsakOppgaver}
        searchFagsakCallback={action('button-click')}
        searchResultReceived
        selectFagsakCallback={action('button-click')}
        selectOppgaveCallback={action('button-click')}
        searchStarted={false}
        resetSearch={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  fagsaker: [{
    saksnummer: 12213234,
    saksnummerString: '12213234',
    system: 'SAK',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    status: FagsakStatus.UNDER_BEHANDLING,
    person: {
      navn: 'Espen Utvikler',
      alder: 41,
      personnummer: '232434234',
      erKvinne: false,
    },
    barnFødt: '2019-12-12',
    opprettet: '2020-01-01',
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
    href: '',
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
    href: '',
  }],
};

export const IngentingBleFunnet = Template.bind({});
IngentingBleFunnet.args = {
  fagsaker: [],
  fagsakOppgaver: [],
};
