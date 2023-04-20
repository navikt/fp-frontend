import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Oppgave } from '@navikt/fp-los-felles';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosSaksbehandlerRestApi';
import OpphevReservasjonModal from './OpphevReservasjonModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/OpphevReservasjonModal',
  component: OpphevReservasjonModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  oppgave: Oppgave;
  opphevData: any;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}> = ({ oppgave, opphevData, hentReserverteOppgaver }) => {
  const data = [{ key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name, data: opphevData }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <OpphevReservasjonModal
        showModal
        oppgave={oppgave}
        cancel={action('button-click')}
        hentReserverteOppgaver={hentReserverteOppgaver}
        toggleMenu={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  opphevData: {},
  hentReserverteOppgaver: action('button-click'),
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
  },
};
