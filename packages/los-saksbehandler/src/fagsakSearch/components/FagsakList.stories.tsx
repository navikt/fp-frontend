import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';
import { FagsakEnkel, KjønnkodeEnum } from '@navikt/fp-types';
import { Oppgave } from '@navikt/fp-los-felles';

import FagsakList from './FagsakList';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/FagsakList',
  component: FagsakList,
  decorators: [withIntl],
};

const Template: StoryFn<{ fagsaker: FagsakEnkel[]; fagsakOppgaver: Oppgave[] }> = ({ fagsaker, fagsakOppgaver }) => {
  const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FagsakList
        fagsaker={fagsaker}
        åpneFagsak={action('button-click')}
        selectOppgaveCallback={action('button-click')}
        fagsakOppgaver={fagsakOppgaver}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
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
};
