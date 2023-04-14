import React from 'react';
import dayjs from 'dayjs';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { BehandlingType } from '@navikt/ft-kodeverk';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator, alleKodeverkLos } from '@navikt/fp-storybook-utils';

import NyeOgFerdigstilteOppgaver from '../../../../typer/nyeOgFerdigstilteOppgaverTsType';
import { RestApiGlobalStatePathsKeys, requestApi } from '../../../../data/fplosSaksbehandlerRestApi';
import NyeOgFerdigstilteOppgaverForIdagPanel from './NyeOgFerdigstilteOppgaverForIdagPanel';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel',
  component: NyeOgFerdigstilteOppgaverForIdagPanel,
  decorators: [withIntl],
};

const Template: Story<{ nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[] }> = ({
  nyeOgFerdigstilteOppgaver,
}) => {
  const data = [{ key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true }];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <NyeOgFerdigstilteOppgaverForIdagPanel height={300} nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver} />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
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
};

export const IngenBehandlinger = Template.bind({});
