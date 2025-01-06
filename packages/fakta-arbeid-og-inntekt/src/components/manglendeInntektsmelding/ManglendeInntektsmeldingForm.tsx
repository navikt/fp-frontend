import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, HelpText, HStack, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import {
  AlleKodeverk,
  AoIArbeidsforhold,
  Inntektsmelding,
  Inntektspost,
  ManglendeInntektsmeldingVurdering,
} from '@navikt/fp-types';

import { useSetDirtyForm } from '../../DirtyFormProvider';
import { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';
import { ArbeidsforholdInformasjonPanel } from '../felles/ArbeidsforholdInformasjonPanel';

import styles from './manglendeInntektsmeldingForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
};

const getOppdaterTabell =
  (
    oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void,
    radData: ArbeidsforholdOgInntektRadData,
    formValues: FormValues,
  ) =>
  () => {
    oppdaterTabell(oldData =>
      oldData.map(data => {
        if (data.arbeidsgiverIdent === radData.arbeidsgiverIdent) {
          return {
            ...radData,
            avklaring: {
              begrunnelse: formValues.begrunnelse,
              saksbehandlersVurdering: formValues.saksbehandlersVurdering,
            },
          };
        }
        return data;
      }),
    );
  };

interface Props {
  saksnummer: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforholdForRad: AoIArbeidsforhold[];
  inntektsmeldingerForRad: Inntektsmelding[];
  radData: ArbeidsforholdOgInntektRadData;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverFødselsdato?: string;
}

export const ManglendeInntektsmeldingForm = ({
  saksnummer,
  behandlingUuid,
  behandlingVersjon,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforholdForRad,
  inntektsmeldingerForRad,
  radData,
  isReadOnly,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
  alleKodeverk,
  arbeidsgiverFødselsdato,
}: Props) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(
    () => ({
      saksbehandlersVurdering: radData.avklaring?.saksbehandlersVurdering,
      begrunnelse: radData.avklaring?.begrunnelse,
    }),
    [radData],
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const erEttArbeidsforhold = arbeidsforholdForRad.length === 1;

  const avbryt = () => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  };

  const lagre = (formValues: FormValues) => {
    const params = {
      behandlingUuid,
      behandlingVersjon,
      vurdering: formValues.saksbehandlersVurdering!,
      arbeidsgiverIdent: radData.arbeidsgiverIdent,
      internArbeidsforholdRef: erEttArbeidsforhold ? arbeidsforholdForRad[0].internArbeidsforholdId : undefined,
      begrunnelse: formValues.begrunnelse!,
    };
    return lagreVurdering(params)
      .then(getOppdaterTabell(oppdaterTabell, radData, formValues))
      .finally(() => formMethods.reset(formValues));
  };

  const radioOptions = [
    {
      label: intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' }),
      value: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
    },
    {
      label: intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' }),
      value: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
    },
  ];
  // Dette valget skal ikke være tilgjengelig hvis arbeidsgiver ikke er en bedrift
  if (radData.arbeidsgiverIdent.length === 9) {
    radioOptions.splice(1, 0, {
      label: intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo' }),
      value: ArbeidsforholdKomplettVurderingType.MELDING_TIL_ARBEIDSGIVER_NAV_NO,
    });
  }
  return (
    <>
      <ArbeidsforholdInformasjonPanel
        saksnummer={saksnummer}
        skjæringspunktDato={skjæringspunktDato}
        inntektsposter={inntektsposter}
        arbeidsforholdForRad={arbeidsforholdForRad}
        inntektsmeldingerForRad={inntektsmeldingerForRad}
        alleKodeverk={alleKodeverk}
        arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
      />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <VStack gap="4">
          {!erEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
            <Alert variant="info">
              <FormattedMessage id="InntektsmeldingInnhentesForm.InnehentAlle" />
            </Alert>
          )}
          <RadioGroupPanel
            name="saksbehandlersVurdering"
            label={
              <HStack gap="2" align="center">
                <FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" />
                <HelpText title={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.AltHjelpetekst' })}>
                  <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel1" />
                  <br />
                  <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel2" />
                  <br />
                  <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel3" />
                </HelpText>
              </HStack>
            }
            validate={[required]}
            isReadOnly={isReadOnly}
            radios={radioOptions}
          />
          <TextAreaField
            label={
              <FormattedMessage
                id={
                  erEttArbeidsforhold
                    ? 'InntektsmeldingInnhentesForm.Begrunn'
                    : 'InntektsmeldingInnhentesForm.Kommentar'
                }
              />
            }
            name="begrunnelse"
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={isReadOnly}
          />
          {!isReadOnly && (
            <HStack gap="4">
              <Button
                size="small"
                variant="secondary"
                loading={formMethods.formState.isSubmitting}
                disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
              >
                <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
              </Button>
              <Button
                size="small"
                variant="tertiary"
                loading={false}
                disabled={formMethods.formState.isSubmitting}
                onClick={avbryt}
                type="button"
              >
                <FormattedMessage id="InntektsmeldingInnhentesForm.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </Form>
    </>
  );
};
