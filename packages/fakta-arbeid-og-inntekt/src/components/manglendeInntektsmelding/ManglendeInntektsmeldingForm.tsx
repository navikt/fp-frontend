import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, HelpText, HStack, ReadMore, VStack } from '@navikt/ds-react';
import { Form, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

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
    <VStack gap="8">
      <ArbeidsforholdInformasjonPanel
        saksnummer={saksnummer}
        skjæringspunktDato={skjæringspunktDato}
        inntektsposter={inntektsposter}
        arbeidsforholdForRad={arbeidsforholdForRad}
        inntektsmeldingerForRad={inntektsmeldingerForRad}
        alleKodeverk={alleKodeverk}
        arbeidsgiverFødselsdato={arbeidsgiverFødselsdato}
        arbeidsgiverNavn={radData.arbeidsgiverNavn}
      />

      <Form formMethods={formMethods} onSubmit={lagre}>
        <VStack gap="4">
          {!erEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
            <Alert variant="info" size="small">
              <FormattedMessage id="InntektsmeldingInnhentesForm.InnehentAlle" />
            </Alert>
          )}

          <RadioGroupPanel
            name="saksbehandlersVurdering"
            label={<FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" />}
            validate={[required]}
            isReadOnly={isReadOnly}
            radios={radioOptions}
          />

          <ReadMore header={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.ReadMore.header' })}>
            <FormattedMessage id="InntektsmeldingInnhentesForm.ReadMore.del1" />
            <br />
            <FormattedMessage id="InntektsmeldingInnhentesForm.ReadMore.del2" />
            <br />
            <FormattedMessage id="InntektsmeldingInnhentesForm.ReadMore.del3" />
          </ReadMore>

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
    </VStack>
  );
};
