import React, {
  useCallback, FunctionComponent, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Alert, Button } from '@navikt/ds-react';

import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue, dateAfterOrEqual,
} from '@navikt/ft-form-validators';
import {
  TextAreaField, RadioGroupPanel, Datepicker, InputField, Form,
} from '@navikt/ft-form-hooks';
import {
  Inntektsmelding, ManueltArbeidsforhold, ManglendeInntektsmeldingVurdering,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import InntektsmeldingOpplysningerPanel from '../felles/InntektsmeldingOpplysningerPanel';
import ArbeidsforholdOgInntekt from '../../types/arbeidsforholdOgInntekt';

import styles from './manglendeArbeidsforholdForm.less';
import { useSetDirtyForm } from '../../DirtyFormProvider';

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
}

const validerPeriodeRekkefølge = (
  getValues: UseFormGetValues<FormValues>,
) => (tom?: string) => (tom ? dateAfterOrEqual(getValues('fom'))(tom) : null);

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  arbeidsgiverNavn: string;
  inntektsmelding: Inntektsmelding;
  radData: ArbeidsforholdOgInntekt;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  skalViseArbeidsforholdId: boolean;
}

const ManglendeArbeidsforholdForm: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  arbeidsgiverNavn,
  inntektsmelding,
  radData,
  isReadOnly,
  registrerArbeidsforhold,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
  skalViseArbeidsforholdId,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: radData.avklaring?.saksbehandlersVurdering,
    begrunnelse: radData.avklaring?.begrunnelse,
    fom: radData.avklaring?.fom,
    tom: radData.avklaring?.tom,
    stillingsprosent: radData.avklaring?.stillingsprosent,
  }), [radData]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  useSetDirtyForm(formMethods.formState.isDirty);

  const saksbehandlersVurdering = formMethods.watch('saksbehandlersVurdering');

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [defaultValues, lukkArbeidsforholdRad]);

  const lagre = useCallback((formValues: FormValues) => {
    const oppdater = (() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (inntektsmelding.arbeidsgiverIdent === data.arbeidsgiverIdent) {
          const opprettArbeidsforhold = formValues.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING;
          const avklaringOpprett = opprettArbeidsforhold ? {
            arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
            fom: formValues.fom,
            tom: formValues.tom,
            stillingsprosent: formValues.stillingsprosent,
            begrunnelse: formValues.begrunnelse,
            saksbehandlersVurdering: formValues.saksbehandlersVurdering,
          } : undefined;
          return {
            ...radData,
            avklaring: avklaringOpprett || {
              begrunnelse: formValues.begrunnelse,
              saksbehandlersVurdering: formValues.saksbehandlersVurdering,
            },
          };
        }
        return data;
      }));
    });

    if (formValues.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING) {
      registrerArbeidsforhold({
        behandlingUuid,
        internArbeidsforholdRef: inntektsmelding.internArbeidsforholdId,
        arbeidsgiverNavn,
        arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
        vurdering: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
        begrunnelse: formValues.begrunnelse,
        fom: formValues.fom,
        tom: formValues.tom,
        stillingsprosent: formValues.stillingsprosent,
      }).then(oppdater).finally(() => formMethods.reset(formValues));
    } else {
      lagreVurdering({
        behandlingUuid,
        vurdering: formValues.saksbehandlersVurdering,
        begrunnelse: formValues.begrunnelse,
        arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
        internArbeidsforholdRef: inntektsmelding.internArbeidsforholdId,
      }).then(oppdater).finally(() => formMethods.reset(formValues));
    }
  }, [inntektsmelding, oppdaterTabell]);

  return (
    <>
      <InntektsmeldingOpplysningerPanel
        saksnummer={saksnummer}
        inntektsmelding={inntektsmelding}
        skalViseArbeidsforholdId={skalViseArbeidsforholdId}
      />
      <VerticalSpacer fourtyPx />
      <div className={styles.alertStripe}>
        <Alert variant="info"><FormattedMessage id="ManglendeOpplysningerForm.ErMottattMenIkkeReg" /></Alert>
      </div>
      <VerticalSpacer thirtyTwoPx />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <RadioGroupPanel
          name="saksbehandlersVurdering"
          label={(
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <FormattedMessage id="ManglendeOpplysningerForm.SkalBrukeInntekstmelding" />
                </FlexColumn>
                <FlexColumn>
                  <Hjelpetekst
                  /* @ts-ignore */
                    popoverProps={{ className: styles.hjelpetekst }}
                  >
                    <FormattedMessage id="ManglendeOpplysningerForm.Hjelpetekst" />
                  </Hjelpetekst>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          )}
          validate={[required]}
          isReadOnly={isReadOnly}
          radios={[{
            label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.TarKontakt' }),
            value: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,
          }, {
            label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.GåVidere' }),
            value: ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          }, {
            label: intl.formatMessage({ id: 'ManglendeOpplysningerForm.OpprettArbeidsforhold' }),
            value: ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,
          }]}
        />
        {saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING && (
          <>
            <FlexContainer>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Datepicker
                    name="fom"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeFra" />}
                    validate={[required, hasValidDate]}
                    isReadOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <Datepicker
                    name="tom"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeTil" />}
                    validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                    isReadOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="stillingsprosent"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.Stillingsprosent" />}
                    parse={(value: string) => {
                      const parsedValue = parseInt(value, 10);
                      return Number.isNaN(parsedValue) ? value : parsedValue;
                    }}
                    validate={[required, hasValidInteger, minValue1, maxValue100]}
                    readOnly={isReadOnly}
                    maxLength={3}
                  />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer fourPx />
          </>
        )}
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={<FormattedMessage id="ManglendeOpplysningerForm.Begrunn" />}
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
                  <FormattedMessage id="ManglendeOpplysningerForm.Lagre" />
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
                  <FormattedMessage id="ManglendeOpplysningerForm.Avbryt" />
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

export default ManglendeArbeidsforholdForm;
