import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverkLos, withRouter } from '@fpsak-frontend/storybook-utils';
import { NavAnsatt } from '@fpsak-frontend/types';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from './data/fplosRestApi';
import AvdelingslederIndex from './AvdelingslederIndex';

export default {
  title: 'los/avdelingsleder/AvdelingslederIndex',
  component: AvdelingslederIndex,
  decorators: [withRouter],
};

const navAnsattDefault = {
  kanOppgavestyre: true,
  kanBehandleKode6: true,
} as NavAnsatt;

const Template: Story<{ navAnsatt: NavAnsatt }> = ({
  navAnsatt,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    { key: RestApiPathsKeys.AVDELINGER.name, data: {}, global: true },
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
    { key: RestApiPathsKeys.HENT_OPPGAVER_MANUELT_PA_VENT.name, data: [] },
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
  navAnsatt: navAnsattDefault,
};

export const HarIkkeTilgang = Template.bind({});
HarIkkeTilgang.args = {
  navAnsatt: {
    kanOppgavestyre: false,
    kanBehandleKode6: false,
  } as NavAnsatt,
};
