import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { RestApiGlobalStatePathsKeys, requestApi } from '../../../data/fplosRestApi';

import OppgaverForAvdeling from '../../../typer/oppgaverForAvdelingTsType';
import { FordelingAvBehandlingstypePanel } from './FordelingAvBehandlingstypePanel';

export default {
  title: 'avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel',
  component: FordelingAvBehandlingstypePanel,
};

const Template: Story<{ oppgaverForAvdeling: OppgaverForAvdeling[] }> = ({
  oppgaverForAvdeling,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FordelingAvBehandlingstypePanel
        height={300}
        oppgaverForAvdeling={oppgaverForAvdeling}
        getValueFromLocalStorage={() => ''}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverForAvdeling: [{
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    tilBehandling: true,
    antall: 10,
  }, {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.KLAGE,
    tilBehandling: true,
    antall: 4,
  }, {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.REVURDERING,
    tilBehandling: true,
    antall: 14,
  }, {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingType: BehandlingType.REVURDERING,
    tilBehandling: false,
    antall: 4,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.TILBAKEKREVING,
    tilBehandling: false,
    antall: 6,
  }],
};
