import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, BodyShort, Button, HelpText, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import type { ArbeidsforholdKomplettVurderingType, ManglendeInntektsmeldingVurdering } from '@navikt/fp-types';
import { useReadOnly } from '@navikt/fp-utils';

import { useSetDirtyForm } from '../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
};

interface Props {
  behandlingUuid: string;
  behandlingVersjon: number;
  radData: ArbeidsforholdOgInntektRadData;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
}

export const ManglendeInntektsmeldingForm = ({
  behandlingUuid,
  behandlingVersjon,
  radData,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
}: Props) => {
  const isReadOnly = useReadOnly();
  const intl = useIntl();
  const { arbeidsforholdForRad, inntektsmeldingerForRad } = radData;

  const defaultValues = {
    saksbehandlersVurdering: radData.avklaring?.saksbehandlersVurdering,
    begrunnelse: radData.avklaring?.begrunnelse,
  };
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
    const oppdater = getOppdaterTabell(oppdaterTabell, radData, formValues);
    const params = {
      behandlingUuid,
      behandlingVersjon,
      vurdering: formValues.saksbehandlersVurdering ?? '-',
      arbeidsgiverIdent: radData.arbeidsgiverIdent,
      internArbeidsforholdRef: erEttArbeidsforhold
        ? (arbeidsforholdForRad[0]!.internArbeidsforholdId ?? undefined)
        : undefined,
      begrunnelse: formValues.begrunnelse ?? '',
    };
    return lagreVurdering(params).then(() => {
      oppdater();
      formMethods.reset(formValues);
    });
  };

  return (
    <RhfForm formMethods={formMethods} onSubmit={lagre}>
      <VStack gap="space-16">
        {!erEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
          <Alert variant="info" size="small" className="self-start">
            <FormattedMessage id="InntektsmeldingInnhentesForm.InnehentAlle" />
          </Alert>
        )}
        <RhfRadioGroup
          name="saksbehandlersVurdering"
          control={formMethods.control}
          legend={
            <HStack gap="space-8" align="center">
              <FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" />
              <HelpText content={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.AltHjelpetekst' })}>
                <VStack gap="space-16">
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel1" />
                  </BodyShort>
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel2" />
                  </BodyShort>
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel3" />
                  </BodyShort>
                </VStack>
              </HelpText>
            </HStack>
          }
          validate={[required]}
          readOnly={isReadOnly}
        >
          <>
            <Radio value="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING" size="small">
              <FormattedMessage id="InntektsmeldingInnhentesForm.TarKontakt" />
            </Radio>
            {!radData.erPrivatPerson && (
              <Radio value="MELDING_TIL_ARBEIDSGIVER_NAV_NO" size="small">
                <FormattedMessage id="InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo" />
              </Radio>
            )}
            <Radio value="FORTSETT_UTEN_INNTEKTSMELDING" size="small">
              <FormattedMessage id="InntektsmeldingInnhentesForm.GåVidere" />
            </Radio>
          </>
        </RhfRadioGroup>

        <RhfTextarea
          name="begrunnelse"
          control={formMethods.control}
          label={
            <FormattedMessage
              id={
                erEttArbeidsforhold ? 'InntektsmeldingInnhentesForm.Begrunn' : 'InntektsmeldingInnhentesForm.Kommentar'
              }
            />
          }
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
          className="max-w-3xl"
        />

        {!isReadOnly && (
          <HStack gap="space-16">
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
    </RhfForm>
  );
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
