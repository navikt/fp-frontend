import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  ArbeidOgInntektsmelding,
  Arbeidsforhold,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
} from '@navikt/fp-types';

import { erMatch, PersonArbeidsforholdTable } from './PersonArbeidsforholdTable';

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidsforholdInfoPanel = ({ arbeidOgInntekt, arbeidsgiverOpplysningerPerId }: Props) => {
  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const sorterteArbeidsforhold = arbeidsforhold.toSorted(
    getSortArbeidsforholdFn(arbeidsgiverOpplysningerPerId, inntektsmeldinger),
  );

  return (
    <VStack gap="space-16">
      <Heading size="small" level="3">
        <FormattedMessage id="ArbeidsforholdInfoPanel.ArbeidsforholdHeader" />
      </Heading>
      {sorterteArbeidsforhold.length === 0 && (
        <FormattedMessage id="PersonArbeidsforholdTable.IngenArbeidsforholdRegistrert" />
      )}
      {sorterteArbeidsforhold.length > 0 && (
        <PersonArbeidsforholdTable
          alleArbeidsforhold={sorterteArbeidsforhold}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          inntektsmeldinger={inntektsmeldinger}
        />
      )}
    </VStack>
  );
};

const harInntektmelding = (arbeidsforhold: Arbeidsforhold, inntektsmeldinger: Inntektsmelding[]): boolean =>
  inntektsmeldinger.some(im => erMatch(arbeidsforhold, im));

const getSortArbeidsforholdFn =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, inntektsmeldinger: Inntektsmelding[]) =>
  (a1: Arbeidsforhold, a2: Arbeidsforhold): number => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a1.arbeidsgiverIdent];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[a2.arbeidsgiverIdent];

    if (arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2) {
      const i = arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn);
      if (i !== 0) {
        return i;
      }
    }

    const a1HarInntektsmelding = harInntektmelding(a1, inntektsmeldinger);
    const a2HarInntektsmelding = harInntektmelding(a2, inntektsmeldinger);

    if (a1HarInntektsmelding && a2HarInntektsmelding) {
      const a1MottattDato = inntektsmeldinger.find(im => erMatch(a1, im))?.mottattDato;
      const a2MottattDato = inntektsmeldinger.find(im => erMatch(a2, im))?.mottattDato;
      return dayjs(a2MottattDato, ISO_DATE_FORMAT).diff(dayjs(a1MottattDato, ISO_DATE_FORMAT));
    }
    if (a1HarInntektsmelding) {
      return -1;
    }
    if (a2HarInntektsmelding) {
      return 1;
    }
    return a1.arbeidsgiverIdent.localeCompare(a2.arbeidsgiverIdent);
  };
