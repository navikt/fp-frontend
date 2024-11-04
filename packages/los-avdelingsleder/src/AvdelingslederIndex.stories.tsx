import React from 'react';
import { StoryFn } from '@storybook/react';

import { RestApiMock } from '@navikt/fp-utils-test';
import { alleKodeverkLos, withRouter } from '@navikt/fp-storybook-utils';
import { NavAnsatt } from '@navikt/fp-types';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from './data/fplosRestApi';
import AvdelingslederIndex from './AvdelingslederIndex';
import Avdeling from './typer/avdelingTsType';

export default {
  title: 'los/avdelingsleder/AvdelingslederIndex',
  component: AvdelingslederIndex,
  decorators: [withRouter],
};

const navAnsattDefault = {
  kanOppgavestyre: true,
  kanBehandleKode6: true,
} as NavAnsatt;

const Template: StoryFn<{ avdelinger?: Avdeling[]; navAnsatt: NavAnsatt }> = ({ avdelinger, navAnsatt }) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.AVDELINGER.name, data: avdelinger },
    { key: RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING.name, data: [] },
    { key: RestApiPathsKeys.OPPGAVE_ANTALL.name, data: 1 },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name, data: undefined },
    { key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name, data: undefined },
    { key: RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL.name, data: 1 },
    { key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name, data: [] },
    { key: RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING.name, data: [] },
    { key: RestApiPathsKeys.HENT_OPPGAVER_PER_DATO.name, data: [] },
    { key: RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT.name, data: [] },
    { key: RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP.name, data: [] },
    { key: RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG.name, data: [] },
    { key: RestApiPathsKeys.RESERVASJONER_FOR_AVDELING.name, data: [] },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <AvdelingslederIndex setLosErIkkeTilgjengelig={() => undefined} navAnsatt={navAnsatt} />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  avdelinger: [
    {
      avdelingEnhet: '1234',
      navn: 'Nav Oslo',
      kreverKode6: true,
    },
    {
      avdelingEnhet: '123',
      navn: 'Nav Vikafossen',
      kreverKode6: false,
    },
  ],
  navAnsatt: navAnsattDefault,
};

export const LasteIkonFørValgtAvdelingErSatt = Template.bind({});
LasteIkonFørValgtAvdelingErSatt.args = {
  avdelinger: [],
  navAnsatt: navAnsattDefault,
};

export const HarIkkeTilgang = Template.bind({});
HarIkkeTilgang.args = {
  avdelinger: [],
  navAnsatt: {
    kanOppgavestyre: false,
    kanBehandleKode6: false,
  } as NavAnsatt,
};

export const SkalFiltrereBortAvdelingerSomKreverKode6 = Template.bind({});
SkalFiltrereBortAvdelingerSomKreverKode6.args = {
  avdelinger: [
    {
      avdelingEnhet: '1234',
      navn: 'Nav Oslo',
      kreverKode6: true,
    },
    {
      avdelingEnhet: '123',
      navn: 'Nav Vikafossen',
      kreverKode6: false,
    },
  ],
  navAnsatt: {
    kanOppgavestyre: true,
    kanBehandleKode6: false,
  } as NavAnsatt,
};
