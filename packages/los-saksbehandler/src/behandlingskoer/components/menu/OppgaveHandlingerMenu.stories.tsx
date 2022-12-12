import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';
import { Oppgave } from '@fpsak-frontend/los-felles';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosSaksbehandlerRestApi';
import OppgaveHandlingerMenu from './OppgaveHandlingerMenu';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu',
  component: OppgaveHandlingerMenu,
  decorators: [withIntl],
};

const Template: Story<{ oppgave: Oppgave }> = ({
  oppgave,
}) => {
  const data = [
    { key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name, data: {} },
    {
      key: RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,
      data: {
        brukerIdent: 'teasdfa',
        navn: 'Espen Utvikler',
        avdelingsnavn: ['NAV Viken'],
      },
    },
    { key: RestApiPathsKeys.FLYTT_RESERVASJON.name, data: {} },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <OppgaveHandlingerMenu
        toggleMenu={action('button-click')}
        offset={{ top: 50, left: 0 }}
        oppgave={oppgave}
        imageNode={null}
        forlengOppgaveReservasjon={() => Promise.resolve('')}
        hentReserverteOppgaver={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgave: {
    id: 1,
    status: {
      erReservert: false,
      flyttetReservasjon: {
        tidspunkt: '2019-02-02',
        uid: '23423',
        navn: 'Espen Utvikler',
        begrunnelse: 'Flyttet',
      },
      reservertTilTidspunkt: '2021-08-02T00:54:25.455',
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
  } as Oppgave,
};
