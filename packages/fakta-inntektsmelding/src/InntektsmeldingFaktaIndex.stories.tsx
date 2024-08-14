import { InntektsmeldingFaktaIndex } from '@navikt/fp-fakta-inntektsmelding';
import { StoryFn } from '@storybook/react';
import { ArbeidsgiverOpplysninger, Behandling, BehandlingAppKontekst, Fagsak, Inntektsmelding } from '@navikt/fp-types';
import React from 'react';
import { OwnProps } from './InntektsmeldingFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

export default {
  title: 'fakta/fakta-inntektsmelding',
  component: InntektsmeldingFaktaIndex,
};

const Template: StoryFn<OwnProps & { inntektsmeldinger: Inntektsmelding[] }> = props => (
  <InntektsmeldingFaktaIndex {...props} />
);

const inntektsmeldingmal = {
  innsendingstidspunkt: '2024-08-08T00:00:00',
  kildeSystem: 'Altinn',
  bortfalteNaturalytelser: [],
  refusjonsperioder: [],
  innsendingsårsak: 'NY' as const,
  behandlingsIdeer: [],
  arbeidsgiverIdent: '1',
  eksternArbeidsforholdId: 'ARB001-001',
  inntektPrMnd: 30000,
  internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
  kontaktpersonNavn: 'Corpolarsen',
  kontaktpersonNummer: '41925090',
  motattDato: '2021-12-06',
  refusjonPrMnd: 20000,
  journalpostId: '1',
  dokumentId: '2',
};

export const InntektsmeldingDefault = Template.bind({});
InntektsmeldingDefault.args = {
  alleKodeverk: alleKodeverk as any,
  fagsak: { saksnummer: '123' } as Fagsak,
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
  ] as BehandlingAppKontekst[],
  arbeidsgiverOpplysningerPerId: {
    ['1']: { navn: 'Rema 1000' } as ArbeidsgiverOpplysninger,
    ['2']: { navn: 'Kiwi' } as ArbeidsgiverOpplysninger,
    ['3']: { navn: 'Meny' } as ArbeidsgiverOpplysninger,
  },
  behandling: {
    uuid: 'UUID2',
  } as Behandling,
  inntektsmeldinger: [
    {
      ...inntektsmeldingmal,
      behandlingsIdeer: ['UUID1'],
      inntektPrMnd: 10000,
      innsendingstidspunkt: '2024-07-20T00:00:00',
      startDatoPermisjon: '2024-10-10',
      refusjonPrMnd: undefined,
      refusjonsperioder: [
        {
          refusjonsbeløp: { verdi: 5000 },
          indexKey: '1',
          fom: '2024-01-10',
        },
        {
          refusjonsbeløp: { verdi: 3000 },
          indexKey: '2',
          fom: '2024-01-09',
        },
      ],
    },
    {
      ...inntektsmeldingmal,
      behandlingsIdeer: ['UUID1', 'UUID2'],
      inntektPrMnd: 20000,
      innsendingstidspunkt: '2024-08-01T00:00:00',
      kildeSystem: 'FS22',
      refusjonPrMnd: undefined,
      arbeidsgiverIdent: '2',
    },
    {
      ...inntektsmeldingmal,
      behandlingsIdeer: [],
      inntektPrMnd: 30000,
      innsendingstidspunkt: '2024-09-10T00:00:00',
      innsendingsårsak: 'ENDRING' as const,
      kildeSystem: 'NAV_NO',
      startDatoPermisjon: '2024-11-11',
      arbeidsgiverIdent: '3',
      bortfalteNaturalytelser: [
        {
          periode: { fomDato: '2024-01-09', tomDato: '2024-10-09' },
          type: 'ELEKTRISK_KOMMUNIKASJON',
          beloepPerMnd: { verdi: 999 },
          indexKey: '1',
        },
        {
          periode: { fomDato: '2024-01-11', tomDato: '2024-10-11' },
          type: 'LOSJI',
          beloepPerMnd: { verdi: 10 },
          indexKey: '2',
        },
      ],
    },
  ],
};
