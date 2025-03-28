import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
} from '@navikt/fp-types';

import { ArbeidsforholdDetail } from './arbeidsforholdDetaljer/ArbeidsforholdDetail';
import { erMatch, PersonArbeidsforholdTable } from './arbeidsforholdTabell/PersonArbeidsforholdTable';

interface Props {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidsforholdInfoPanel = ({ arbeidOgInntekt, arbeidsgiverOpplysningerPerId }: Props) => {
  const [valgtArbeidsforhold, setValgtArbeidsforhold] = useState<AoIArbeidsforhold>();

  const setArbeidsforhold = (af: AoIArbeidsforhold) => {
    const skalSetteArbeidsforhold = !!af.saksbehandlersVurdering;
    setValgtArbeidsforhold(skalSetteArbeidsforhold ? af : undefined);
  };

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const sorterteArbeidsforhold = arbeidsforhold.toSorted(
    getSortArbeidsforholdFn(arbeidsgiverOpplysningerPerId, inntektsmeldinger),
  );

  return (
    <>
      <Heading size="small">
        <FormattedMessage id="ArbeidsforholdInfoPanel.ArbeidsforholdHeader" />
      </Heading>
      <PersonArbeidsforholdTable
        selectedId={valgtArbeidsforhold?.arbeidsgiverIdent}
        alleArbeidsforhold={sorterteArbeidsforhold}
        selectArbeidsforholdCallback={setArbeidsforhold}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        inntektsmeldinger={inntektsmeldinger}
      />
      {valgtArbeidsforhold && <ArbeidsforholdDetail valgtArbeidsforhold={valgtArbeidsforhold} />}
    </>
  );
};

const harInntektmelding = (arbeidsforhold: AoIArbeidsforhold, inntektsmeldinger: Inntektsmelding[]): boolean =>
  inntektsmeldinger.some(im => erMatch(arbeidsforhold, im));

const getSortArbeidsforholdFn =
  (arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId, inntektsmeldinger: Inntektsmelding[]) =>
  (a1: AoIArbeidsforhold, a2: AoIArbeidsforhold): number => {
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
      const a1MottattDato = inntektsmeldinger.find(im => erMatch(a1, im))?.motattDato;
      const a2MottattDato = inntektsmeldinger.find(im => erMatch(a2, im))?.motattDato;
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
