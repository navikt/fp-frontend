import React from 'react';
import dayjs from 'dayjs';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { OppgaverPerForsteStonadsdagPanel } from './OppgaverPerForsteStonadsdagPanel';

export default {
  title: 'avdelingsleder/nokkeltall/OppgaverPerForsteStonadsdagPanel',
  component: OppgaverPerForsteStonadsdagPanel,
};

export const Default = () => (
  <OppgaverPerForsteStonadsdagPanel
    height={300}
    oppgaverPerForsteStonadsdag={[{
      forsteStonadsdag: dayjs().subtract(14, 'd').format(ISO_DATE_FORMAT),
      antall: 10,
    }, {
      forsteStonadsdag: dayjs().subtract(13, 'd').format(ISO_DATE_FORMAT),
      antall: 9,
    }, {
      forsteStonadsdag: dayjs().subtract(12, 'd').format(ISO_DATE_FORMAT),
      antall: 6,
    }, {
      forsteStonadsdag: dayjs().subtract(11, 'd').format(ISO_DATE_FORMAT),
      antall: 11,
    }, {
      forsteStonadsdag: dayjs().subtract(10, 'd').format(ISO_DATE_FORMAT),
      antall: 15,
    }, {
      forsteStonadsdag: dayjs().subtract(9, 'd').format(ISO_DATE_FORMAT),
      antall: 20,
    }, {
      forsteStonadsdag: dayjs().subtract(8, 'd').format(ISO_DATE_FORMAT),
      antall: 13,
    }]}
  />
);
