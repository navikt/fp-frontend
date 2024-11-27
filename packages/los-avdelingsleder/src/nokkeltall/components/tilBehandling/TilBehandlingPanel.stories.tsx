import React from 'react';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { StoryFn } from '@storybook/react';
import dayjs from 'dayjs';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos,getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys } from '../../../data/fplosRestApi';
import OppgaveForDato from '../../../typer/oppgaverForDatoTsType';
import TilBehandlingPanel from './TilBehandlingPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/nokkeltall/TilBehandlingPanel',
  component: TilBehandlingPanel,
  decorators: [withIntl],
};

const Template: StoryFn<{ oppgaverPerDato: OppgaveForDato[] }> = ({ oppgaverPerDato }) => {
  const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <TilBehandlingPanel height={300} oppgaverPerDato={oppgaverPerDato} getValueFromLocalStorage={() => ''} />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  oppgaverPerDato: [
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: dayjs().format(ISO_DATE_FORMAT),
      antall: 1,
    },
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
      antall: 2,
    },
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.KLAGE,
      opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
      antall: 2,
    },
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetDato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
      antall: 6,
    },
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.DOKUMENTINNSYN,
      opprettetDato: dayjs().subtract(10, 'd').format(ISO_DATE_FORMAT),
      antall: 3,
    },
    {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      behandlingType: BehandlingType.DOKUMENTINNSYN,
      opprettetDato: dayjs().subtract(16, 'd').format(ISO_DATE_FORMAT),
      antall: 3,
    },
  ],
};
