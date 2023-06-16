import React, { useMemo, FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Form } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import {
  AoIArbeidsforhold,
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  KodeverkMedNavn,
  FodselOgTilrettelegging,
  ArbeidsforholdFodselOgTilrettelegging,
} from '@navikt/fp-types';
import { BekreftSvangerskapspengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import ArbeidsgiverFieldArray from './arbeidsgiver/ArbeidsgiverFieldArray';

type FormValues = {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

const getAlleArbeidsforhold = (
  tilrettelegging: FodselOgTilrettelegging,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdFodselOgTilrettelegging[] => {
  const arbeidsforhold = tilrettelegging?.arbeidsforholdListe || [];
  arbeidsforhold.sort((a, b) => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse];
    return arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2
      ? arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn)
      : 0;
  });
  return arbeidsforhold;
};

interface OwnProps {
  behandlingVersjon: number;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  arbeidsforhold: AoIArbeidsforhold[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: BekreftSvangerskapspengerAp) => Promise<void>;
  uttakArbeidTyper: KodeverkMedNavn[];
  submittable: boolean;
  formData: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * TilretteleggingFaktaForm
 *
 * Viser tillrettlegging før svangerskapspenger
 */
const TilretteleggingFaktaForm: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  readOnly,
  hasOpenAksjonspunkter,
  arbeidsforhold,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  aksjonspunkter,
  svangerskapspengerTilrettelegging,
  uttakArbeidTyper,
  submitCallback,
  submittable,
  formData,
  setFormData,
}) => {
  const sorterteArbeidsforhold = useMemo(
    () => getAlleArbeidsforhold(svangerskapspengerTilrettelegging, arbeidsgiverOpplysningerPerId),
    [behandlingVersjon],
  );

  const formMethods = useForm<FormValues>({
    defaultValues: {
      arbeidsforhold: sorterteArbeidsforhold,
    },
  });

  return (
    <Form formMethods={formMethods} setDataOnUnmount={setFormData}>
      {hasOpenAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[<FormattedMessage id="FodselOgTilretteleggingInfoPanel.Aksjonspunkt" key="svangerskapspengerAp" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <ArbeidsgiverFieldArray
        sorterteArbeidsforhold={sorterteArbeidsforhold}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        readOnly={readOnly}
      />
      <VerticalSpacer fourtyPx />
    </Form>
  );
};

export default TilretteleggingFaktaForm;
