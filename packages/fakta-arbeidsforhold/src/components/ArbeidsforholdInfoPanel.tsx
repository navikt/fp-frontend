import React, { FunctionComponent, useState } from 'react';
import moment from 'moment';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import {
  Aksjonspunkt, Arbeidsforhold, ArbeidsgiverOpplysningerPerId, AlleKodeverk,
} from '@fpsak-frontend/types';

import PersonArbeidsforholdTable from './arbeidsforholdTabell/PersonArbeidsforholdTable';
import CustomArbeidsforhold from '../typer/CustomArbeidsforholdTsType';
import ArbeidsforholdHandling from '../kodeverk/arbeidsforholdHandling';
import AktivtArbeidsforholdHandling from '../kodeverk/aktivtArbeidsforholdHandling';
import ArbeidsforholdDetail from './ArbeidsforholdDetail';

const addReplaceableArbeidsforhold = (arbeidsforholdList: Arbeidsforhold[]): CustomArbeidsforhold[] => arbeidsforholdList
  .map((a1: Arbeidsforhold) => {
    const matches = arbeidsforholdList.filter((a2: Arbeidsforhold) => a2.arbeidsgiverReferanse === a1.arbeidsgiverReferanse
      && a2.arbeidsforholdId && a1.arbeidsforholdId && a2.arbeidsforholdId !== a1.arbeidsforholdId);
    const hasSomeNewer = matches.some((m: Arbeidsforhold) => moment(m.mottattDatoInntektsmelding).isAfter(a1.mottattDatoInntektsmelding));
    return {
      ...a1,
      replaceOptions: hasSomeNewer ? [] : matches,
    };
  });

const utledArbeidsforholdHandling = (arbeidsforhold: CustomArbeidsforhold): string | undefined => {
  if (arbeidsforhold.tilVurdering === false && arbeidsforhold.erEndret === false) {
    return undefined;
  }

  if (arbeidsforhold.brukArbeidsforholdet === true && arbeidsforhold.brukMedJustertPeriode === true) {
    return ArbeidsforholdHandling.OVERSTYR_TOM;
  }

  const soekerErIPermisjon = arbeidsforhold.brukArbeidsforholdet === true
    && arbeidsforhold.permisjoner
    && arbeidsforhold.permisjoner.length > 0
    && arbeidsforhold.brukPermisjon === true;
  if (soekerErIPermisjon) {
    return ArbeidsforholdHandling.SOKER_ER_I_PERMISJON;
  }

  const harIkkeOverstyrtTom = arbeidsforhold.brukArbeidsforholdet === true && arbeidsforhold.brukMedJustertPeriode === false;
  const soekerErIkkeIPermisjon = arbeidsforhold.brukArbeidsforholdet === true
    && arbeidsforhold.permisjoner
    && arbeidsforhold.permisjoner.length > 0
    && arbeidsforhold.brukPermisjon === false;
  if (harIkkeOverstyrtTom || soekerErIkkeIPermisjon) {
    return ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD;
  }

  if (arbeidsforhold.brukArbeidsforholdet === false) {
    return ArbeidsforholdHandling.FJERN_ARBEIDSFORHOLD;
  }

  return undefined;
};

const utledAktivtArbeidsforholdHandling = (arbeidsforhold: CustomArbeidsforhold, arbeidsforholdHandlingField: string): string | undefined => {
  if (arbeidsforholdHandlingField === ArbeidsforholdHandling.AKTIVT_ARBEIDSFORHOLD
    && (arbeidsforhold.mottattDatoInntektsmelding === undefined || arbeidsforhold.mottattDatoInntektsmelding === null)) {
    if (arbeidsforhold.inntektMedTilBeregningsgrunnlag === false) {
      return AktivtArbeidsforholdHandling.INNTEKT_IKKE_MED_I_BG;
    }
    if (arbeidsforhold.fortsettBehandlingUtenInntektsmelding === true) {
      return AktivtArbeidsforholdHandling.BENYTT_A_INNTEKT_I_BG;
    }
    if (arbeidsforhold.fortsettBehandlingUtenInntektsmelding === false) {
      return AktivtArbeidsforholdHandling.AVSLA_YTELSE;
    }
  }
  return undefined;
};

const finnOverstyrtTom = (arbeidsforhold: CustomArbeidsforhold): string | undefined => {
  if (arbeidsforhold.overstyrtTom) {
    return arbeidsforhold.overstyrtTom;
  }
  return arbeidsforhold.brukMedJustertPeriode ? arbeidsforhold.tomDato : undefined;
};

const leggTilValuesForRendering = (
  arbeidsforholdList: CustomArbeidsforhold[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): CustomArbeidsforhold[] => arbeidsforholdList
  .map((arbeidsforhold): CustomArbeidsforhold => {
    const arbeidsforholdHandlingField = utledArbeidsforholdHandling(arbeidsforhold);
    const aktivtArbeidsforholdHandlingField = utledAktivtArbeidsforholdHandling(arbeidsforhold, arbeidsforholdHandlingField);
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse];
    return {
      ...arbeidsforhold,
      navn: arbeidsgiverOpplysninger?.navn,
      originalFomDato: arbeidsforhold.fomDato,
      overstyrtTom: finnOverstyrtTom(arbeidsforhold), // TODO : Fjern dette når back-end er på plass
      arbeidsforholdHandlingField,
      aktivtArbeidsforholdHandlingField,
    };
  });

const getSortArbeidsforholdFn = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => (
  a1: CustomArbeidsforhold,
  a2: CustomArbeidsforhold,
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
  aksjonspunkter: Aksjonspunkt[];
  arbeidsforhold: Arbeidsforhold[];
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdInfoPanelImpl:
 * Ansvarlig for å rendre aksjonspunktteksten, arbeidsforholdene, og
 * bekreft & fortsett knappen
 * */
const ArbeidsforholdInfoPanelImpl: FunctionComponent<PureOwnProps> = ({
  alleMerknaderFraBeslutter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  arbeidsforhold,
}) => {
  const [valgtArbeidsforhold, setValgtArbeidsforhold] = useState<CustomArbeidsforhold>();
  const setArbeidsforhold = (
    event: React.MouseEvent | React.KeyboardEvent, id: void, af: CustomArbeidsforhold,
  ) => {
    if (af.tilVurdering === true || af.erEndret === true) {
      setValgtArbeidsforhold(af);
    }
  };

  const af = leggTilValuesForRendering(addReplaceableArbeidsforhold(arbeidsforhold), arbeidsgiverOpplysningerPerId);
  const sorterteArbeidsforhold = af.sort(getSortArbeidsforholdFn(arbeidsgiverOpplysningerPerId));
  return (
    <>
      <PersonArbeidsforholdTable
        selectedId={undefined}
        alleArbeidsforhold={sorterteArbeidsforhold.filter((a) => !a.erSlettet)}
        selectArbeidsforholdCallback={setArbeidsforhold}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {valgtArbeidsforhold && (
        <ArbeidsforholdDetail
          valgtArbeidsforhold={valgtArbeidsforhold}
        />
      )}
    </>
  );
};

export default ArbeidsforholdInfoPanelImpl;
