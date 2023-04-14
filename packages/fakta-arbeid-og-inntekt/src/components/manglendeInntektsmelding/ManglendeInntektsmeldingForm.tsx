import React, { FunctionComponent, useMemo, useCallback, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Alert, BodyShort, Button, Popover } from '@navikt/ds-react';

import { required, hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { TextAreaField, RadioGroupPanel, Form } from '@navikt/ft-form-hooks';
import {
  AlleKodeverk,
  AoIArbeidsforhold,
  Inntektsmelding,
  Inntektspost,
  ManglendeInntektsmeldingVurdering,
} from '@navikt/fp-types';
import { VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';
import { ArbeidsforholdKomplettVurderingType } from '@navikt/fp-kodeverk';

import questionNormalUrl from '../../images/question_normal.svg';
import questionHoverUrl from '../../images/question_hover.svg';
import ArbeidsforholdOgInntekt from '../../types/arbeidsforholdOgInntekt';
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
  radData: ArbeidsforholdOgInntekt;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>;
  alleKodeverk: AlleKodeverk;
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
        vurdering: formValues.saksbehandlersVurdering,
        arbeidsgiverIdent: radData.arbeidsgiverIdent,
        internArbeidsforholdRef: erEttArbeidsforhold ? arbeidsforholdForRad[0].internArbeidsforholdId : undefined,
        begrunnelse: formValues.begrunnelse,
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

  const imageRef = useRef<HTMLImageElement>(null);
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
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.radioHeader}>
                  <FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" />
                </FlexColumn>
                <FlexColumn>
                  <Image
                    src={questionNormalUrl}
                    srcHover={questionHoverUrl}
                    ref={imageRef}
                    onClick={toggleHjelpetekst}
                    onKeyDown={toggleHjelpetekst}
                    tabIndex={0}
                    alt={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.AltHjelpetekst' })}
                    className={styles.image}
                  />
                  <Popover
                    open={openState}
                    onClose={toggleHjelpetekst}
                    anchorEl={imageRef.current}
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
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
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
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Button
                  size="small"
                  variant="secondary"
                  loading={formMethods.formState.isSubmitting}
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
                </Button>
              </FlexColumn>
              <FlexColumn>
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
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
        <VerticalSpacer fourtyPx />
      </Form>
    </>
  );
};

export default ManglendeInntektsmeldingForm;
