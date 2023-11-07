import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { InfotrygdVedtak } from '@navikt/fp-types';

import UtbetalingsdataIs15Index from './UtbetalingsdataIs15Index';

export default {
  title: 'utbetalingsdata/UtbetalingsdataIs15Index',
  component: UtbetalingsdataIs15Index,
};

const Template: StoryFn<{
  infotrygdVedtak: InfotrygdVedtak;
}> = ({ infotrygdVedtak }) => <UtbetalingsdataIs15Index infotrygdVedtak={infotrygdVedtak} />;

export const Default = Template.bind({});
Default.args = {
  infotrygdVedtak: {
    vedtakKjedeForIdentdato: {
      '2015-06-01': {
        opprinneligIdentdato: '2015-06-01',
        vedtak: [
          {
            behandlingstema: {
              kode: 'SV',
              termnavn: 'Svangerskapspenger',
            },
            identdato: '2015-06-01',
            opphørFom: '2015-08-20',
            opprinneligIdentdato: '2015-06-01',
            periode: {
              fom: '2015-06-01',
              tom: '2015-08-19',
            },
            registrert: '2015-07-16',
            saksbehandlerId: 'SAKSBEHANDLER',
            arbeidskategori: {
              kode: '01',
              termnavn: 'Arbeidstaker',
            },
            arbeidsforhold: [
              {
                arbeidsgiverOrgnr: '999999999',
                inntekt: 12250,
                inntektsperiode: {
                  kode: 'M',
                  termnavn: 'Månedlig',
                },
                refusjon: false,
                identdato: '2015-06-01',
                opprinneligIdentdato: '2015-06-01',
              },
            ],
            dekningsgrad: 0,
            utbetalinger: [
              {
                periode: {
                  fom: '2015-06-01',
                  tom: '2015-06-30',
                },
                utbetalingsgrad: 100,
                erRefusjon: false,
                dagsats: 565,
                identdato: '2015-06-01',
                opprinneligIdentdato: '2015-06-01',
              },
              {
                periode: {
                  fom: '2015-07-01',
                  tom: '2015-07-31',
                },
                utbetalingsgrad: 100,
                erRefusjon: false,
                dagsats: 565,
                identdato: '2015-06-01',
                opprinneligIdentdato: '2015-06-01',
              },
              {
                periode: {
                  fom: '2015-08-03',
                  tom: '2015-08-19',
                },
                utbetalingsgrad: 100,
                erRefusjon: false,
                dagsats: 565,
                identdato: '2015-06-01',
                opprinneligIdentdato: '2015-06-01',
              },
            ],
          },
        ],
      },
      '2015-08-20': {
        opprinneligIdentdato: '2015-08-20',
        vedtak: [
          {
            behandlingstema: {
              kode: 'FØ',
              termnavn: 'Foreldrepenger m/ fødsel',
            },
            identdato: '2015-08-20',
            opphørFom: '2015-10-09',
            opprinneligIdentdato: '2015-08-20',
            periode: {
              fom: '2015-08-20',
              tom: '2015-10-08',
            },
            registrert: '2015-09-15',
            saksbehandlerId: 'SAKSBEHANDLER',
            arbeidskategori: {
              kode: '01',
              termnavn: 'Arbeidstaker',
            },
            dekningsgrad: 100,
            fødselsdatoBarn: '2015-08-20',
          },
          {
            behandlingstema: {
              kode: 'FØ',
              termnavn: 'Foreldrepenger m/ fødsel',
            },
            identdato: '2015-12-18',
            opphørFom: '2016-01-07',
            opprinneligIdentdato: '2015-08-20',
            periode: {
              fom: '2015-12-18',
              tom: '2016-01-06',
            },
            registrert: '2015-09-21',
            saksbehandlerId: 'SAKSBEHANDLER',
            arbeidskategori: {
              kode: '01',
              termnavn: 'Arbeidstaker',
            },
            dekningsgrad: 100,
            fødselsdatoBarn: '2015-08-20',
          },
          {
            behandlingstema: {
              kode: 'FØ',
              termnavn: 'Foreldrepenger m/ fødsel',
            },
            identdato: '2016-01-07',
            opphørFom: '2016-07-07',
            opprinneligIdentdato: '2015-08-20',
            periode: {
              fom: '2016-01-07',
              tom: '2016-07-06',
            },
            registrert: '2015-09-21',
            saksbehandlerId: 'SAKSBEHANDLER',
            arbeidskategori: {
              kode: '01',
              termnavn: 'Arbeidstaker',
            },
            dekningsgrad: 100,
            fødselsdatoBarn: '2015-08-20',
          },
        ],
      },
    },
  },
};
