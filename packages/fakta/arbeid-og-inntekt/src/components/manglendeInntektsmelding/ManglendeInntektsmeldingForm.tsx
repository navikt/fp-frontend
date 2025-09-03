import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { Alert, BodyShort, Button, HStack, Popover, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroupNew, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';
import type {
  foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType,
  ManglendeInntektsmeldingVurdering,
} from '@navikt/fp-types';

import { useSetDirtyForm } from '../../DirtyFormProvider';
import type { ArbeidsforholdOgInntektRadData } from '../../types/arbeidsforholdOgInntekt';

import styles from './manglendeInntektsmeldingForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
};

interface Props {
  behandlingUuid: string;
  behandlingVersjon: number;
  radData: ArbeidsforholdOgInntektRadData;
  isReadOnly: boolean;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: (data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void;
}

export const ManglendeInntektsmeldingForm = ({
  behandlingUuid,
  behandlingVersjon,
  radData,
  isReadOnly,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
}: Props) => {
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

  const svgRef = useRef<SVGSVGElement>(null);
  const [openState, setOpenState] = useState(false);
  const toggleHjelpetekst = () => setOpenState(gammelVerdi => !gammelVerdi);

  return (
    <RhfForm formMethods={formMethods} onSubmit={lagre}>
      <VStack gap="space-16">
        {!erEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
          <div className={styles.alertStripe}>
            <Alert variant="info">
              <FormattedMessage id="InntektsmeldingInnhentesForm.InnehentAlle" />
            </Alert>
          </div>
        )}
        <RhfRadioGroupNew
          name="saksbehandlersVurdering"
          control={formMethods.control}
          label={
            <HStack gap="space-8">
              <FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" />
              <QuestionmarkDiamondIcon
                ref={svgRef}
                onClick={toggleHjelpetekst}
                className={styles.svg}
                title={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.AltHjelpetekst' })}
              />
              <Popover
                open={openState}
                onClose={toggleHjelpetekst}
                anchorEl={svgRef.current}
                className={styles.hjelpetekst}
              >
                <Popover.Content className={styles.hjelpetekstInnhold}>
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
                </Popover.Content>
              </Popover>
            </HStack>
          }
          validate={[required]}
          isReadOnly={isReadOnly}
        >
          <VStack gap="space-2">
            <Radio
              value={ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}
              size="small"
            >
              <FormattedMessage id="InntektsmeldingInnhentesForm.TarKontakt" />
            </Radio>
            {!radData.erPrivatPerson && (
              <Radio value={ArbeidsforholdKomplettVurderingType.MELDING_TIL_ARBEIDSGIVER_NAV_NO} size="small">
                <FormattedMessage id="InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo" />
              </Radio>
            )}
            <Radio value={ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING} size="small">
              <FormattedMessage id="InntektsmeldingInnhentesForm.GåVidere" />
            </Radio>
          </VStack>
        </RhfRadioGroupNew>
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
