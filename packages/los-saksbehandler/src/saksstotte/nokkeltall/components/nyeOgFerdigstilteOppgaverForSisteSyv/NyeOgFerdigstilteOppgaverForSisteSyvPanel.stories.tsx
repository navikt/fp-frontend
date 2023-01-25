import React from 'react';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { BehandlingType } from '@navikt/ft-kodeverk';

import getIntlDecorator from '@navikt/fp-storybook-utils/decorators/withIntl';

import NyeOgFerdigstilteOppgaverForSisteSyvPanel from './NyeOgFerdigstilteOppgaverForSisteSyvPanel';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForSisteSyvPanel',
  component: NyeOgFerdigstilteOppgaverForSisteSyvPanel,
  decorators: [withIntl],
};

export const Default = () => (
  <NyeOgFerdigstilteOppgaverForSisteSyvPanel
    height={200}
    nyeOgFerdigstilteOppgaver={[{
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 10,
      antallFerdigstilte: 20,
      dato: dayjs().subtract(1, 'd').format(ISO_DATE_FORMAT),
    }, {
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 30,
      antallFerdigstilte: 15,
      dato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().subtract(5, 'd').format(ISO_DATE_FORMAT),
    }]}
  />
);
