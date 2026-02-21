import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type { ArbeidsgiverOpplysninger, BehandlingFpSak, FagsakBehandlingDto } from '@navikt/fp-types';

const inntektsmeldingmal = {
  innsendingstidspunkt: '2024-08-08T00:00:00',
  kildeSystem: 'Altinn',
  aktiveNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: 'NY' as const,
  arbeidsgiverIdent: '1',
  eksternArbeidsforholdId: 'ARB001-001',
  inntektPrMnd: 30000,
  internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
  kontaktpersonNavn: 'Corpolarsen',
  kontaktpersonNummer: '41925090',
  mottattDato: '2021-12-06',
  refusjonPrMnd: 20000,
  journalpostId: '1',
  dokumentId: '2',
};

const meta = {
  title: 'fakta/fakta-inntektsmelding',
  component: InntektsmeldingFaktaIndex,
  decorators: [withPanelData],
  render: args => <InntektsmeldingFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof InntektsmeldingFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const InntektsmeldingDefault: Story = {
  args: {
    alleBehandlinger: [
      {
        uuid: 'UUID1',
        type: 'BT-002',
        opprettet: '2024-07-13',
        avsluttet: '2024-08-13',
      },
      {
        uuid: 'UUID2',
        type: 'BT-003',
        opprettet: '2024-07-14',
        avsluttet: '2024-08-14',
      },
      {
        uuid: 'UUID3',
        type: 'BT-004',
        opprettet: '2024-07-15',
        avsluttet: '2024-08-15',
      },
    ] as FagsakBehandlingDto[],
    arbeidsgiverOpplysningerPerId: {
      ['1']: { navn: 'Rema 1000' } as ArbeidsgiverOpplysninger,
      ['2']: { navn: 'Kiwi' } as ArbeidsgiverOpplysninger,
      ['3']: { navn: 'Meny' } as ArbeidsgiverOpplysninger,
    },
    behandling: {
      uuid: 'UUID2',
    } as BehandlingFpSak,
    inntektsmeldinger: [
      {
        ...inntektsmeldingmal,
        tilknyttedeBehandlingIder: ['UUID1'],
        inntektPrMnd: 10000.5,
        innsendingstidspunkt: '2024-07-20T00:00:00',
        startDatoPermisjon: '2024-10-10',

        journalpostId: '1',
        refusjonsperioder: [
          {
            refusjonsbeløpMnd: { verdi: 5000 },
            indexKey: '1',
            fom: '2024-01-10',
          },
          {
            refusjonsbeløpMnd: { verdi: 3000 },
            indexKey: '2',
            fom: '2024-01-09',
          },
        ],
      },
      {
        ...inntektsmeldingmal,
        tilknyttedeBehandlingIder: ['UUID1', 'UUID2'],
        inntektPrMnd: 20000,
        innsendingstidspunkt: '2024-08-01T00:00:00',
        kildeSystem: 'FS22',

        arbeidsgiverIdent: '2',
        journalpostId: '2',
      },
      {
        ...inntektsmeldingmal,
        tilknyttedeBehandlingIder: [],
        inntektPrMnd: 30000,
        innsendingstidspunkt: '2024-09-10T00:00:00',
        innsendingsårsak: 'ENDRING' as const,
        kildeSystem: 'NAV_NO',
        startDatoPermisjon: '2024-11-11',
        arbeidsgiverIdent: '3',
        journalpostId: '3',
        aktiveNaturalytelser: [
          {
            periode: { fomDato: '2024-01-09', tomDato: '2024-10-09' },
            type: 'ELEKTRISK_KOMMUNIKASJON',
            beløpPerMnd: { verdi: 999 },
            indexKey: '1',
          },
          {
            periode: { fomDato: '2024-01-11', tomDato: '2024-10-11' },
            type: 'LOSJI',
            beløpPerMnd: { verdi: 10 },
            indexKey: '2',
          },
        ],
      },
    ],
  },
};

export const IngenInntektsmeldinger: Story = {
  args: {
    ...InntektsmeldingDefault.args,
    inntektsmeldinger: [],
  },
};
