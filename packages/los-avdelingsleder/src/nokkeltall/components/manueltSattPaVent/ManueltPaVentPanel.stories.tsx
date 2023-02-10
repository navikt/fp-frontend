import React from 'react';
import dayjs from 'dayjs';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import OppgaverManueltPaVent from '../../../typer/oppgaverManueltPaVentTsType';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../../data/fplosRestApi';
import ManueltPaVentPanel from './ManueltPaVentPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/nokkeltall/ManueltPaVentPanel',
  component: ManueltPaVentPanel,
  decorators: [withIntl],
};

// https://github.com/storybookjs/storybook/issues/12208
const FIVE = 5;

const Template: Story<{ oppgaverManueltPaVent: OppgaverManueltPaVent[] }> = ({
  oppgaverManueltPaVent,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
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
