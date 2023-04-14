import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Heading } from '@navikt/ds-react';

import {
  ArbeidOgInntektsmelding,
  AoIArbeidsforhold,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
} from '@navikt/fp-types';

import { FormattedMessage } from 'react-intl';
import PersonArbeidsforholdTable, { erMatch } from './arbeidsforholdTabell/PersonArbeidsforholdTable';
import ArbeidsforholdDetail from './arbeidsforholdDetaljer/ArbeidsforholdDetail';

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
      return moment(a2MottattDato, ISO_DATE_FORMAT).diff(moment(a1MottattDato, ISO_DATE_FORMAT));
    }
    if (a1HarInntektsmelding) {
      return -1;
    }
    if (a2HarInntektsmelding) {
      return 1;
    }
    return a1.arbeidsgiverIdent.localeCompare(a2.arbeidsgiverIdent);
  };

interface PureOwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdInfoPanel: FunctionComponent<PureOwnProps> = ({
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
}) => {
  const [valgtArbeidsforhold, setValgtArbeidsforhold] = useState<AoIArbeidsforhold>();

  const setArbeidsforhold = useCallback(
    (_event: React.MouseEvent | React.KeyboardEvent, _id: void, af: AoIArbeidsforhold) => {
      const skalSetteArbeidsforhold = !!af.saksbehandlersVurdering;
      setValgtArbeidsforhold(skalSetteArbeidsforhold ? af : undefined);
    },
    [setValgtArbeidsforhold],
  );

  const { arbeidsforhold, inntektsmeldinger } = arbeidOgInntekt;

  const sorterteArbeidsforhold = useMemo(
    () => arbeidsforhold.slice().sort(getSortArbeidsforholdFn(arbeidsgiverOpplysningerPerId, inntektsmeldinger)),
    [arbeidsgiverOpplysningerPerId],
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

export default ArbeidsforholdInfoPanel;
