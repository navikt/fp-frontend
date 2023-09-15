import React, { FunctionComponent, useMemo, useCallback, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Alert, BodyShort, Button, HStack, Popover } from '@navikt/ds-react';
import { QuestionmarkDiamondIcon } from '@navikt/aksel-icons';

import { required, hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { TextAreaField, RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import {
  AlleKodeverk,
  AoIArbeidsforhold,
  Inntektsmelding,
  Inntektspost,
  ManglendeInntektsmeldingVurdering,
} from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';

import ArbeidsforholdOgInntektRadData from '../../types/arbeidsforholdOgInntekt';
import ArbeidsforholdInformasjonPanel from '../felles/ArbeidsforholdInformasjonPanel';
import { useSetDirtyForm } from '../../DirtyFormProvider';

import styles from './manglendeInntektsmeldingForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
};

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
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

const ManglendeInntektsmeldingForm: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
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
}) => {
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

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [lukkArbeidsforholdRad, defaultValues]);

  const lagre = useCallback(
    (formValues: FormValues) => {
      const params = {
        behandlingUuid,
        vurdering: formValues.saksbehandlersVurdering!,
        arbeidsgiverIdent: radData.arbeidsgiverIdent,
        internArbeidsforholdRef: erEttArbeidsforhold ? arbeidsforholdForRad[0].internArbeidsforholdId : undefined,
        begrunnelse: formValues.begrunnelse!,
      };
      lagreVurdering(params)
        .then(() => {
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
        })
        .finally(() => formMethods.reset(formValues));
    },
    [arbeidsforholdForRad, radData, oppdaterTabell],
  );

  const svgRef = useRef<SVGSVGElement>(null);
  const [openState, setOpenState] = useState(false);
  const toggleHjelpetekst = useCallback(() => setOpenState(gammelVerdi => !gammelVerdi), []);

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
        {!erEttArbeidsforhold && inntektsmeldingerForRad.length > 0 && (
          <div className={styles.alertStripe}>
            <Alert variant="info">
              <FormattedMessage id="InntektsmeldingInnhentesForm.InnehentAlle" />
            </Alert>
            <VerticalSpacer sixteenPx />
          </div>
        )}
        <RadioGroupPanel
          name="saksbehandlersVurdering"
          label={
            <HStack gap="2">
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
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel1" />
                  </BodyShort>
                  <VerticalSpacer eightPx />
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel2" />
                  </BodyShort>
                  <VerticalSpacer eightPx />
                  <BodyShort>
                    <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel3" />
                  </BodyShort>
                </Popover.Content>
              </Popover>
            </HStack>
          }
          validate={[required]}
          isReadOnly={isReadOnly}
          radios={[
            {
              label: intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' }),
              value: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,
            },
            {
              label: intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' }),
              value: ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING,
            },
          ]}
        />
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={
            <FormattedMessage
              id={
                erEttArbeidsforhold ? 'InntektsmeldingInnhentesForm.Begrunn' : 'InntektsmeldingInnhentesForm.Kommentar'
              }
            />
          }
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
        />
        <VerticalSpacer twentyPx />
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
        <VerticalSpacer fourtyPx />
      </Form>
    </>
  );
};

export default ManglendeInntektsmeldingForm;
