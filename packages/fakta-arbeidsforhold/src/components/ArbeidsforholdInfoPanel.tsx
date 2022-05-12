import React, {
  FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import {
  Arbeidsforhold, ArbeidsgiverOpplysningerPerId, AlleKodeverk,
} from '@fpsak-frontend/types';

import { Undertittel } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import PersonArbeidsforholdTable from './arbeidsforholdTabell/PersonArbeidsforholdTable';
import ArbeidsforholdDetail from './arbeidsforholdDetaljer/ArbeidsforholdDetail';

const getSortArbeidsforholdFn = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => (
  a1: Arbeidsforhold,
  a2: Arbeidsforhold,
): number => {
  const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a1.arbeidsgiverReferanse];
  const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[a2.arbeidsgiverReferanse];
  if (arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2) {
    const i = arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn);
    if (i !== 0) {
      return i;
    }
  }

  if (a1.mottattDatoInntektsmelding && a2.mottattDatoInntektsmelding) {
    return moment(a2.mottattDatoInntektsmelding, ISO_DATE_FORMAT).diff(moment(a1.mottattDatoInntektsmelding, ISO_DATE_FORMAT));
  }
  if (a1.mottattDatoInntektsmelding) {
    return -1;
  }
  if (a2.mottattDatoInntektsmelding) {
    return 1;
  }
  return a1.id.localeCompare(a2.id);
};

interface PureOwnProps {
  arbeidsforhold: Arbeidsforhold[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const ArbeidsforholdInfoPanel: FunctionComponent<PureOwnProps> = ({
  arbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
}) => {
  const [valgtArbeidsforhold, setValgtArbeidsforhold] = useState<Arbeidsforhold>();

  const setArbeidsforhold = useCallback((
    _event: React.MouseEvent | React.KeyboardEvent, _id: void, af: Arbeidsforhold,
  ) => {
    const skalSetteArbeidsforhold = af.tilVurdering === true || af.erEndret === true;
    setValgtArbeidsforhold(skalSetteArbeidsforhold ? af : undefined);
  }, [setValgtArbeidsforhold]);

  const sorterteArbeidsforhold = useMemo(() => arbeidsforhold.slice().sort(getSortArbeidsforholdFn(arbeidsgiverOpplysningerPerId)),
    [arbeidsgiverOpplysningerPerId]);

  return (
    <>
      <Undertittel><FormattedMessage id="ArbeidsforholdInfoPanel.ArbeidsforholdHeader" /></Undertittel>
      <PersonArbeidsforholdTable
        selectedId={valgtArbeidsforhold?.id}
        alleArbeidsforhold={sorterteArbeidsforhold.filter((a) => !a.erSlettet)}
        selectArbeidsforholdCallback={setArbeidsforhold}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {valgtArbeidsforhold && (
        <ArbeidsforholdDetail valgtArbeidsforhold={valgtArbeidsforhold} />
      )}
    </>
  );
};

export default ArbeidsforholdInfoPanel;
