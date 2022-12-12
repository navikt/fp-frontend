import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { alleKodeverkLos } from '@fpsak-frontend/storybook-utils';
import { Oppgave } from '@fpsak-frontend/los-felles';

import OppgaverTabell from './OppgaverTabell';

import { RestApiPathsKeys, RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/OppgaverTabell',
  component: OppgaverTabell,
  decorators: [withIntl],
};

const Template: Story<{ oppgaverTilBehandling?: Oppgave[], reserverteOppgaver?: Oppgave[] }> = ({
  oppgaverTilBehandling,
  reserverteOppgaver,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name, data: {} },
    { key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name, data: reserverteOppgaver },
    { key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name, data: oppgaverTilBehandling },
  ];
  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <OppgaverTabell
        reserverOppgave={action('button-click')}
        valgtSakslisteId={1}
        doPolling={false}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverTilBehandling: [{
    id: 1,
    status: {
      erReservert: false,
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        uid: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Flyttet',
      },
    },
    saksnummer: 1234,
    personnummer: '1212',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '1',
    href: '',
  }],
  reserverteOppgaver: [{
    id: 2,
    status: {
      erReservert: true,
    },
    saksnummer: 1234,
    personnummer: '233',
    navn: 'Helge Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.KLAGE,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '2',
    href: '',
  }],
};

export const TomOppgaveTabell = Template.bind({});
