import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import EndreSakslisterPanel from './EndreSakslisterPanel';
import koSortering from '../../kodeverk/KoSortering';
import andreKriterierType from '../../kodeverk/andreKriterierType';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../data/fplosRestApi';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const sakslister = [
  {
    sakslisteId: 1,
    navn: 'test',
    sistEndret: '2020-10-10',
    saksbehandlerIdenter: [],
    antallBehandlinger: 1,
    sortering: {
      sorteringType: koSortering.BEHANDLINGSFRIST,
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
    fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
    andreKriterier: [
      {
        andreKriterierType: andreKriterierType.TIL_BESLUTTER,
        inkluder: true,
      },
      {
        andreKriterierType: andreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false,
      },
    ],
  },
];

export default {
  title: 'los/avdelingsleder/behandlingskoer/EndreSakslisterPanel',
  component: EndreSakslisterPanel,
  decorators: [withIntl],
};

const Template: StoryFn = () => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.OPPGAVE_ANTALL.name, data: 1 },
    { key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name, data: sakslister },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name, data: undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <EndreSakslisterPanel
        valgtSakslisteId={1}
        valgtAvdelingEnhet=""
        avdelingensSaksbehandlere={[]}
        setValgtSakslisteId={action('button-click')}
        resetValgtSakslisteId={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
