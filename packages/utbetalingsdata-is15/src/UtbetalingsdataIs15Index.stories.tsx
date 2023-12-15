import React, { useState } from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { InfotrygdVedtak } from '@navikt/fp-types';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { VStack } from '@navikt/ds-react';
import UtbetalingsdataIs15Index from './UtbetalingsdataIs15Index';

export default {
  title: 'utbetalingsdata/UtbetalingsdataIs15Index',
  component: UtbetalingsdataIs15Index,
};

const Template: StoryFn<{
  infotrygdVedtak: InfotrygdVedtak;
}> = ({ infotrygdVedtak }) => {
  const [visResultat, setVisResultat] = useState(false);
  const søkInfotrygdVedtak = () => {
    setVisResultat(true);
    return Promise.resolve<InfotrygdVedtak | undefined>(undefined);
  };

  return (
    <VStack gap="5">
      <div style={{ color: 'red' }}>Gyldig fødselsnummer for testing: 07078518434</div>
      <UtbetalingsdataIs15Index
        søkInfotrygdVedtak={søkInfotrygdVedtak}
        infotrygdVedtakState={RestApiState.NOT_STARTED}
        infotrygdVedtak={visResultat ? infotrygdVedtak : undefined}
      />
    </VStack>
  );
};

export const Default = Template.bind({});
Default.args = {
  infotrygdVedtak: {
    vedtakKjeder: [
      {
        opprinneligIdentdato: '2015-06-01',
        behandlingstema: {
          kode: 'SV',
          termnavn: 'Svangerskapspenger',
        },
        vedtak: [
          {
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
      {
        opprinneligIdentdato: '2015-08-20',
        behandlingstema: {
          kode: 'FØ',
          termnavn: 'Foreldrepenger m/ fødsel',
        },
        vedtak: [
          {
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
            gradering: 50,
          },
          {
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
    ],
  },
};
