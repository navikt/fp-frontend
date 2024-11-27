import React from 'react';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { StoryFn } from '@storybook/react';
import dayjs from 'dayjs';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos,getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys } from '../../../data/fplosRestApi';
import BehandlingVentefrist from '../../../typer/behandlingVentefristTsType';
import VentefristUtløperPanel from './VentefristUtløperPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/nokkeltall/VentefristUtløperPanel',
  component: VentefristUtløperPanel,
  decorators: [withIntl],
};

// https://github.com/storybookjs/storybook/issues/12208
const FIVE = 5;

const Template: StoryFn<{ oppgaverManueltPaVent: BehandlingVentefrist[] }> = ({ oppgaverManueltPaVent }) => {
  const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <VentefristUtløperPanel
        height={300}
        behandlingerPaVent={oppgaverManueltPaVent}
        getValueFromLocalStorage={() => ''}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverManueltPaVent: [
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingFrist: dayjs().format(ISO_DATE_FORMAT),
      antall: 10,
    },
    {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
      behandlingFrist: dayjs().add(FIVE, 'd').format(ISO_DATE_FORMAT),
      antall: 4,
    },
    {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
      behandlingFrist: dayjs().add(FIVE, 'w').format(ISO_DATE_FORMAT),
      antall: 14,
    },
  ],
};
