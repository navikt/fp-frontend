import React from 'react';
import dayjs from 'dayjs';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import OppgaverManueltPaVent from '../../../typer/oppgaverManueltPaVentTsType';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../../data/fplosRestApi';
import ManueltPaVentPanel from './ManueltPaVentPanel';

export default {
  title: 'avdelingsleder/nokkeltall/ManueltPaVentPanel',
  component: ManueltPaVentPanel,
};

// https://github.com/storybookjs/storybook/issues/12208
const FIVE = 5;

const Template: Story<{ oppgaverManueltPaVent: OppgaverManueltPaVent[] }> = ({
  oppgaverManueltPaVent,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK.name, data: alleKodeverk },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <ManueltPaVentPanel
        height={300}
        oppgaverManueltPaVent={oppgaverManueltPaVent}
        getValueFromLocalStorage={() => ''}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverManueltPaVent: [{
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    behandlingFrist: dayjs().format(ISO_DATE_FORMAT),
    antall: 10,
  }, {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingFrist: dayjs().add(FIVE, 'd').format(ISO_DATE_FORMAT),
    antall: 4,
  }, {
    fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    behandlingFrist: dayjs().add(FIVE, 'w').format(ISO_DATE_FORMAT),
    antall: 14,
  }],
};
