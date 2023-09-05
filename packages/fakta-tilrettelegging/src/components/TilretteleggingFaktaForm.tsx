import React, { useMemo, FunctionComponent, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Datepicker, Form, TextAreaField } from '@navikt/ft-form-hooks';
import {
  AksjonspunktHelpTextHTML,
  FlexColumn,
  FlexContainer,
  FlexRow,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { hasValidDate, hasValidText, maxLength, required } from '@navikt/ft-form-validators';

import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  FodselOgTilrettelegging,
  ArbeidsforholdFodselOgTilrettelegging,
  AoIArbeidsforhold,
  KodeverkMedNavn,
} from '@navikt/fp-types';
import { BekreftSvangerskapspengerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import { FaktaSubmitButtonNew } from '@navikt/fp-fakta-felles';
import { Alert } from '@navikt/ds-react';
import ArbeidsforholdFieldArray from './arbeidsforhold/ArbeidsforholdFieldArray';
import { filtrerVelferdspermisjoner } from './arbeidsforhold/ArbeidsforholdPanel';

const maxLength1500 = maxLength(1500);

type FormValues = {
  arbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[];
  termindato: string;
  fødselsdato: string;
  begrunnelse: string;
};

const sorterArbeidsforhold = (
  alleArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdFodselOgTilrettelegging[] =>
  [...(alleArbeidsforhold || [])].sort((a, b) => {
    const arbeidsgiverOpplysningerA1 = arbeidsgiverOpplysningerPerId[a.arbeidsgiverReferanse];
    const arbeidsgiverOpplysningerA2 = arbeidsgiverOpplysningerPerId[b.arbeidsgiverReferanse];
    return arbeidsgiverOpplysningerA1 && arbeidsgiverOpplysningerA2
      ? arbeidsgiverOpplysningerA1.navn.localeCompare(arbeidsgiverOpplysningerA2.navn)
      : 0;
  });

const getAksjonspunktBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): string | undefined => {
  const aksjonpunkt = aksjonspunkter.find(ap => ap.definisjon === AksjonspunktCode.FODSELTILRETTELEGGING);
  return aksjonpunkt ? aksjonpunkt.begrunnelse : undefined;
};

const getIsBegrunnelseRequired = (isDirty: boolean) => (value?: string) => value !== undefined || isDirty;

const utledOmEnSkalVurdereVelferdspermisjoner = (alleArbeidsforhold: ArbeidsforholdFodselOgTilrettelegging[]) =>
  alleArbeidsforhold.some(arbeidsforhold =>
    filtrerVelferdspermisjoner(arbeidsforhold.velferdspermisjoner, arbeidsforhold.tilretteleggingBehovFom).some(
      p => p.erGyldig === undefined,
    ),
  );

interface OwnProps {
  behandlingVersjon: number;
  readOnly: boolean;
  hasOpenAksjonspunkter: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  svangerskapspengerTilrettelegging: FodselOgTilrettelegging;
  aoiArbeidsforhold: AoIArbeidsforhold[];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: BekreftSvangerskapspengerAp) => Promise<void>;
  formData: FormValues;
  setFormData: (data: FormValues) => void;
  submittable: boolean;
  uttakArbeidTyper: KodeverkMedNavn[];
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
  arbeidsgiverOpplysningerPerId,
  aksjonspunkter,
  svangerskapspengerTilrettelegging,
  aoiArbeidsforhold,
  submitCallback,
  formData,
  setFormData,
  submittable,
  uttakArbeidTyper,
}) => {
  const intl = useIntl();

  const sorterteArbeidsforhold = useMemo(
    () => sorterArbeidsforhold(svangerskapspengerTilrettelegging.arbeidsforholdListe, arbeidsgiverOpplysningerPerId),
    [behandlingVersjon],
  );

  const formMethods = useForm<FormValues>({
    defaultValues: formData || {
      arbeidsforhold: sorterteArbeidsforhold,
      termindato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.termindato : '',
      fødselsdato: svangerskapspengerTilrettelegging ? svangerskapspengerTilrettelegging.fødselsdato : '',
      begrunnelse: getAksjonspunktBegrunnelse(aksjonspunkter),
    },
  });

  const fødselsdato = svangerskapspengerTilrettelegging?.fødselsdato || '';

  const isRequiredFn = getIsBegrunnelseRequired(formMethods.formState.isDirty);

  const arbeidsforhold = formMethods.watch('arbeidsforhold');

  const skalVurdereVelferdspermisjoner = utledOmEnSkalVurdereVelferdspermisjoner(sorterteArbeidsforhold);
  const harIkkeVurdertAlleVelferdspermisjoner = utledOmEnSkalVurdereVelferdspermisjoner(arbeidsforhold);

  const harIkkeValgtNoenArbeidsforhold = !arbeidsforhold.some(a => a.skalBrukes);
  const harPeriodeSomIkkeErFerdig = arbeidsforhold.some(
    a => a.tilretteleggingDatoer.some(td => !td.fom) || a.avklarteOppholdPerioder.some(td => !td.fom),
  );
  const harArbeidsforholdUtenTilrettelegging = arbeidsforhold.some(
    a => a.skalBrukes && a.tilretteleggingDatoer.length === 0,
  );

  const [visFeil, skalViseFeil] = useState(false);

  const harFeil =
    harIkkeVurdertAlleVelferdspermisjoner ||
    harIkkeValgtNoenArbeidsforhold ||
    harPeriodeSomIkkeErFerdig ||
    harArbeidsforholdUtenTilrettelegging;

  const onSubmit = useCallback(
    (values: FormValues) => {
      if (harFeil) {
        skalViseFeil(true);
        return Promise.resolve();
      }
      return submitCallback({
        kode: AksjonspunktCode.FODSELTILRETTELEGGING,
        termindato: values.termindato,
        fødselsdato: values.fødselsdato,
        begrunnelse: values.begrunnelse,
        bekreftetSvpArbeidsforholdList: values.arbeidsforhold,
      });
    },
    [harFeil, submitCallback],
  );

  return (
    <Form formMethods={formMethods} setDataOnUnmount={setFormData} onSubmit={onSubmit}>
      {hasOpenAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {skalVurdereVelferdspermisjoner
              ? [
                  <FormattedMessage
                    id="TilretteleggingFaktaForm.AksjonspunktOgVelferdspermisjoner"
                    key="svangerskapspengerAp"
                  />,
                ]
              : [<FormattedMessage id="TilretteleggingFaktaForm.Aksjonspunkt" key="svangerskapspengerAp" />]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer fourtyPx />
        </>
      )}
      <FlexContainer wrap>
        <FlexRow>
          <FlexColumn>
            <Datepicker
              name="termindato"
              label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Termindato' })}
              validate={[required, hasValidDate]}
              isReadOnly={readOnly}
            />
          </FlexColumn>
          {fødselsdato && (
            <FlexColumn>
              <Datepicker
                name="fødselsdato"
                label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.Fodselsdato' })}
                validate={[required, hasValidDate]}
                isReadOnly={readOnly}
              />
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer fourtyPx />
      <ArbeidsforholdFieldArray
        sorterteArbeidsforhold={arbeidsforhold}
        aoiArbeidsforhold={aoiArbeidsforhold}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        readOnly={readOnly}
        uttakArbeidTyper={uttakArbeidTyper}
      />
      {harIkkeVurdertAlleVelferdspermisjoner && visFeil && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.IkkeAllePermisjonerVurdert" />
          </Alert>
        </>
      )}
      {harIkkeValgtNoenArbeidsforhold && visFeil && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.HarIkkeValgtArbeidsforhold" />
          </Alert>
        </>
      )}
      {harPeriodeSomIkkeErFerdig && visFeil && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.PeriodeIkkeLagtTil" />
          </Alert>
        </>
      )}
      {harArbeidsforholdUtenTilrettelegging && visFeil && (
        <>
          <VerticalSpacer sixteenPx />
          <Alert variant="error">
            <FormattedMessage id="TilretteleggingFaktaForm.ArbeidsforholdUtenTilrettelegging" />
          </Alert>
        </>
      )}
      <VerticalSpacer fourtyPx />
      <TextAreaField
        name="begrunnelse"
        label={intl.formatMessage({ id: 'TilretteleggingFaktaForm.BegrunnEndringene' })}
        validate={[isRequiredFn, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      <VerticalSpacer fourtyPx />
      <FaktaSubmitButtonNew
        isSubmittable={submittable}
        isReadOnly={readOnly}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
      <VerticalSpacer fourtyPx />
    </Form>
  );
};

export default TilretteleggingFaktaForm;
