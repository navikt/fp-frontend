import React from 'react';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos,getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { requestApi,RestApiGlobalStatePathsKeys } from '../../../data/fplosSaksbehandlerRestApi';
import { NyeOgFerdigstilteOppgaverForIdagPanel } from './NyeOgFerdigstilteOppgaverForIdagPanel';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel',
  component: NyeOgFerdigstilteOppgaverForIdagPanel,
  decorators: [withIntl],
  render: props => {
    const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <NyeOgFerdigstilteOppgaverForIdagPanel {...props} />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof NyeOgFerdigstilteOppgaverForIdagPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 300,
    nyeOgFerdigstilteOppgaver: [
      {
        behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
        antallNye: 10,
        antallFerdigstilte: 20,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingType.KLAGE,
        antallNye: 23,
        antallFerdigstilte: 2,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingType.REVURDERING,
        antallNye: 3,
        antallFerdigstilte: 24,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
      {
        behandlingType: BehandlingType.DOKUMENTINNSYN,
        antallNye: 23,
        antallFerdigstilte: 12,
        dato: dayjs().format(ISO_DATE_FORMAT),
      },
    ],
  },
};

export const IngenBehandlinger: Story = {
  args: {
    height: 300,
  },
};
