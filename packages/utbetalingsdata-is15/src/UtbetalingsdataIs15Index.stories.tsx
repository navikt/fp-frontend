import { useState } from 'react';

import { VStack } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import type { InfotrygdVedtak } from '@navikt/fp-types';

import { UtbetalingsdataIs15Index } from './UtbetalingsdataIs15Index';

const meta = {
  title: 'utbetalingsdata/UtbetalingsdataIs15Index',
  component: UtbetalingsdataIs15Index,
  args: {
    isPending: false,
    isSuccess: false,
    søkInfotrygdVedtak: action('button-click') as (params: { searchString: string }) => Promise<InfotrygdVedtak>,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const søkInfotrygdVedtak = (params: { searchString: string }) => {
      args.søkInfotrygdVedtak?.(params);
      setArgs(oldArgs => ({ ...oldArgs, isSuccess: true }));
      return Promise.resolve<InfotrygdVedtak | undefined>(args.infotrygdVedtak);
    };

    return (
      <VStack gap="space-20">
        <div style={{ color: 'red' }}>Gyldig fødselsnummer for testing: 07078518434</div>
        <UtbetalingsdataIs15Index {...args} søkInfotrygdVedtak={søkInfotrygdVedtak} />
      </VStack>
    );
  },
} satisfies Meta<typeof UtbetalingsdataIs15Index>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    infotrygdVedtak: {
      saker: [
        {
          resultat: 'Avslag',
          type: 'Søknad',
          mottatt: '2024-01-01',
          nivaa: 'Trygdekontor',
          vedtatt: '2024-02-01',
          registrert: '2024-03-01',
          sakId: 'B01',
          valg: 'Foreldrepenger fødsel ordinær',
          iverksatt: '2024-03-01',
        },
        {
          resultat: 'Innvilget',
          type: 'Revurdering',
          mottatt: '2024-01-01',
          nivaa: 'Trygdekontor',
          vedtatt: '2024-02-01',
          registrert: '2024-03-01',
          sakId: 'B02',
          valg: 'Engangsstønad fødsel nasjonal',
          iverksatt: '2024-04-01',
        },
      ],
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
  },
};

export const IngenData: Story = {
  args: {
    infotrygdVedtak: {
      saker: [],
      vedtakKjeder: [],
    },
  },
};
