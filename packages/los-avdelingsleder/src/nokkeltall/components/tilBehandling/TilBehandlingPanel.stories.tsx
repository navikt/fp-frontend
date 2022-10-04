import React from 'react';
import dayjs from 'dayjs';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { RestApiGlobalStatePathsKeys, requestApi } from '../../../data/fplosRestApi';
import TilBehandlingPanel from './TilBehandlingPanel';
import OppgaveForDato from '../../../typer/oppgaverForDatoTsType';

export default {
  title: 'avdelingsleder/nokkeltall/TilBehandlingPanel',
  component: TilBehandlingPanel,
};

const Template: Story<{ oppgaverPerDato: OppgaveForDato[] }> = ({
  oppgaverPerDato,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <TilBehandlingPanel
        height={300}
        oppgaverPerDato={oppgaverPerDato}
        getValueFromLocalStorage={() => ''}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverPerDato: [{
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    opprettetDato: dayjs().format(ISO_DATE_FORMAT),
    antall: 1,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    opprettetDato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
    antall: 2,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.KLAGE,
    opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
    antall: 2,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
    antall: 6,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    opprettetDato: dayjs().subtract(10, 'd').format(ISO_DATE_FORMAT),
    antall: 3,
  }, {
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    opprettetDato: dayjs().subtract(16, 'd').format(ISO_DATE_FORMAT),
    antall: 3,
  }],
};
