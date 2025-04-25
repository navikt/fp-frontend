import { useCallback, useMemo, useRef, useState } from 'react';
import { useForm, type UseFormGetValues } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, HStack, Popover, VStack } from '@navikt/ds-react';
import { Datepicker, Form, InputField, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import {
  dateAfterOrEqual,
  hasValidDate,
  hasValidInteger,
  hasValidText,
  maxLength,
  maxValue,
  minLength,
  minValue,
  required,
} from '@navikt/ft-form-validators';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type { Inntektsmelding, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold } from '@navikt/fp-types';

import { useSetDirtyForm } from '../../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

import styles from './manglendeArbeidsforholdForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

type FormValues = {
  saksbehandlersVurdering?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
  begrunnelse?: string;
};

const validerPeriodeRekkefølge = (getValues: UseFormGetValues<FormValues>) => (tom?: string) => {
  const fom = getValues('fom');
  return fom && tom ? dateAfterOrEqual(fom)(tom) : null;
};

const getOppdaterTabell =
  (
    oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void,
    radData: ArbeidsforholdOgInntektRadData,
    inntektsmelding: Inntektsmelding,
    formValues: FormValues,
  ) =>
  () => {
    oppdaterTabell(oldData =>
      oldData.map(data => {
        if (inntektsmelding.arbeidsgiverIdent === data.arbeidsgiverIdent) {
          const opprettArbeidsforhold =
            formValues.saksbehandlersVurdering ===
            ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
          const avklaring = opprettArbeidsforhold
            ? {
                arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
                fom: formValues.fom,
                tom: formValues.tom,
                stillingsprosent: formValues.stillingsprosent,
                begrunnelse: formValues.begrunnelse,
                saksbehandlersVurdering: formValues.saksbehandlersVurdering,
              }
            : {
                begrunnelse: formValues.begrunnelse,
                saksbehandlersVurdering: formValues.saksbehandlersVurdering,
              };
          return {
            ...radData,
            avklaring,
          };
        }
        return data;
      }),
    );
  };

interface Props {
  behandlingUuid: string;
  behandlingVersjon: number;
  radData: ArbeidsforholdOgInntektRadData;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
}

export const ManglendeArbeidsforholdForm = ({
  behandlingUuid,
  behandlingVersjon,
  radData,
  isReadOnly,
  registrerArbeidsforhold,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
}: Props) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(
    () => ({
      saksbehandlersVurdering: radData.avklaring?.saksbehandlersVurdering,
      begrunnelse: radData.avklaring?.begrunnelse,
      fom: radData.avklaring?.fom,
      tom: radData.avklaring?.tom,
      stillingsprosent: radData.avklaring?.stillingsprosent,
    }),
    [radData],
  );

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const saksbehandlersVurdering = formMethods.watch('saksbehandlersVurdering');

  const avbryt = () => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  };

  const inntektsmelding = radData.inntektsmeldingerForRad[0];

  const lagre = (formValues: FormValues) => {
    const oppdater = getOppdaterTabell(oppdaterTabell, radData, inntektsmelding, formValues);
    if (formValues.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING) {
      return registrerArbeidsforhold({
        behandlingUuid,
        behandlingVersjon,
        internArbeidsforholdRef: inntektsmelding.internArbeidsforholdId,
        arbeidsgiverNavn: radData.arbeidsgiverNavn,
        arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
        vurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: formValues.begrunnelse!,
        fom: formValues.fom!,
        tom: formValues.tom,
        stillingsprosent: formValues.stillingsprosent!,
      })
        .then(oppdater)
        .finally(() => formMethods.reset(formValues));
    }
    return lagreVurdering({
      behandlingUuid,
      behandlingVersjon,
      vurdering: formValues.saksbehandlersVurdering!,
      begrunnelse: formValues.begrunnelse!,
      arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
      internArbeidsforholdRef: inntektsmelding.internArbeidsforholdId,
    })
      .then(oppdater)
      .finally(() => formMethods.reset(formValues));
  };

  const buttonRef = useRef<SVGSVGElement>(null);
  const [openState, setOpenState] = useState(false);
  const toggleHjelpetekst = useCallback(() => setOpenState(gammelVerdi => !gammelVerdi), []);

  return (
    <VStack gap="8">
      <div className={styles.alertStripe}>
        <Alert variant="info">
          <FormattedMessage id="ManglendeOpplysningerForm.ErMottattMenIkkeReg" />
        </Alert>
      </div>
      <Form formMethods={formMethods} onSubmit={lagre}>
        <VStack gap="4">
          <RadioGroupPanel
            name="saksbehandlersVurdering"
            label={
              <HStack gap="2">
                <FormattedMessage id="ManglendeOpplysningerForm.SkalBrukeInntekstmelding" />
                <QuestionmarkDiamondIcon
                  className={styles.svg}
                  ref={buttonRef}
                  onClick={toggleHjelpetekst}
                  title={intl.formatMessage({ id: 'ManglendeOpplysningerForm.AltHjelpetekst' })}
                />
                <Popover
                  open={openState}
                  onClose={toggleHjelpetekst}
                  anchorEl={buttonRef.current}
                  className={styles.hjelpetekst}
                >
                  <Popover.Content className={styles.hjelpetekstInnhold}>
                    <BodyShort>
                      <FormattedMessage id="ManglendeOpplysningerForm.Hjelpetekst" />
                    </BodyShort>
                  </Popover.Content>
                </Popover>
              </HStack>
            }
            validate={[required]}
            isReadOnly={isReadOnly}
            radios={[
              {
                label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.TarKontakt' }),
                value: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,
              },
              {
                label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.GåVidere' }),
                value: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
              },
              {
                label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.OpprettArbeidsforhold' }),
                value: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
              },
            ]}
          />
          {saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING && (
            <HStack gap="4">
              <Datepicker
                name="fom"
                label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeFra" />}
                validate={[required, hasValidDate]}
                isReadOnly={isReadOnly}
              />
              <Datepicker
                name="tom"
                label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeTil" />}
                validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                isReadOnly={isReadOnly}
              />
              <InputField
                name="stillingsprosent"
                label={<FormattedMessage id="ManglendeOpplysningerForm.Stillingsprosent" />}
                parse={value => {
                  const parsedValue = parseInt(value.toString(), 10);
                  return Number.isNaN(parsedValue) ? value : parsedValue;
                }}
                validate={[required, hasValidInteger, minValue1, maxValue100]}
                readOnly={isReadOnly}
                maxLength={3}
              />
            </HStack>
          )}
          <TextAreaField
            label={<FormattedMessage id="ManglendeOpplysningerForm.Begrunn" />}
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
                <FormattedMessage id="ManglendeOpplysningerForm.Lagre" />
              </Button>
              <Button
                size="small"
                variant="tertiary"
                loading={false}
                disabled={formMethods.formState.isSubmitting}
                onClick={avbryt}
                type="button"
              >
                <FormattedMessage id="ManglendeOpplysningerForm.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </Form>
    </VStack>
  );
};
