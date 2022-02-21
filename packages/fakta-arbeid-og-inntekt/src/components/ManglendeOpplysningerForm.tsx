import React, {
  useCallback, FunctionComponent, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue, dateAfterOrEqual,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, DatepickerField, InputField, Form,
} from '@fpsak-frontend/form-hooks';
import {
  Inntektsmelding, AoIArbeidsforhold, ManueltArbeidsforhold, ManglendeInntektsmeldingVurdering,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

import styles from './manglendeOpplysningerForm.less';

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

const erMatch = (
  inntektsmelding1: Inntektsmelding,
  inntektsmelding2?: Inntektsmelding,
) => inntektsmelding1.arbeidsgiverIdent === inntektsmelding2?.arbeidsgiverIdent
  && inntektsmelding2.internArbeidsforholdId === inntektsmelding2?.internArbeidsforholdId;

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  arbeidsgiverNavn: string;
  inntektsmelding: Inntektsmelding;
  arbeidsforhold?: AoIArbeidsforhold;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
  skalViseArbeidsforholdId: boolean;
}

const ManglendeOpplysningerForm: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  arbeidsgiverNavn,
  inntektsmelding,
  arbeidsforhold,
  isReadOnly,
  registrerArbeidsforhold,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
  skalViseArbeidsforholdId,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: inntektsmelding.saksbehandlersVurdering,
    fom: arbeidsforhold?.fom,
    tom: arbeidsforhold?.tom,
    stillingsprosent: arbeidsforhold?.stillingsprosent,
    begrunnelse: inntektsmelding.begrunnelse,
  }), [inntektsmelding, arbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const saksbehandlersVurdering = formMethods.watch('saksbehandlersVurdering');

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [defaultValues, lukkArbeidsforholdRad]);

  const lagre = useCallback((formValues: FormValues) => {
    const oppdater = (() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (erMatch(inntektsmelding, data.inntektsmelding)) {
          const af = formValues.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING ? {
            arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
            internArbeidsforholdId: inntektsmelding.internArbeidsforholdId,
            fom: formValues.fom,
            tom: formValues.tom,
            stillingsprosent: formValues.stillingsprosent,
          } : undefined;
          return {
            ...data,
            inntektsmelding: {
              ...data.inntektsmelding,
              begrunnelse: formValues.begrunnelse,
              saksbehandlersVurdering: formValues.saksbehandlersVurdering,
            },
            arbeidsforhold: af,
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
      {skalViseArbeidsforholdId && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="ManglendeOpplysningerForm.ArbeidsforholdId" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{inntektsmelding.eksternArbeidsforholdId}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      <InntektsmeldingOpplysningerPanel saksnummer={saksnummer} inntektsmelding={inntektsmelding} />
      <VerticalSpacer fourtyPx />
      <div className={styles.alertStripe}>
        <AlertStripeInfo><FormattedMessage id="ManglendeOpplysningerForm.ErMottattMenIkkeReg" /></AlertStripeInfo>
      </div>
      <VerticalSpacer thirtyTwoPx />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="ManglendeOpplysningerForm.SkalBrukeInntekstmelding" /></Element>
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
        <RadioGroupField
          name="saksbehandlersVurdering"
          validate={[required]}
          readOnly={isReadOnly}
          direction="vertical"
        >
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.TarKontakt' })}
          />
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.GåVidere' })}
          />
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.OpprettArbeidsforhold' })}
          />
        </RadioGroupField>
        {saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.OPPRETT_BASERT_PÅ_INNTEKTSMELDING && (
          <>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    name="fom"
                    label={<Element><FormattedMessage id="ManglendeOpplysningerForm.PeriodeFra" /></Element>}
                    validate={[required, hasValidDate]}
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name="tom"
                    label={<Element><FormattedMessage id="ManglendeOpplysningerForm.PeriodeTil" /></Element>}
                    validate={[hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="stillingsprosent"
                    label={<Element><FormattedMessage id="ManglendeOpplysningerForm.Stillingsprosent" /></Element>}
                    parse={(value: string) => {
                      const parsedValue = parseInt(value, 10);
                      return Number.isNaN(parsedValue) ? value : parsedValue;
                    }}
                    validate={[required, hasValidInteger, minValue1, maxValue100]}
                    bredde="XS"
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
          label={<Element><FormattedMessage id="ManglendeOpplysningerForm.Begrunn" /></Element>}
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
                <Knapp
                  mini
                  spinner={formMethods.formState.isSubmitting}
                  disabled={!formMethods.formState.isDirty || formMethods.formState.isSubmitting}
                  htmlType="submit"
                >
                  <FormattedMessage id="ManglendeOpplysningerForm.Lagre" />
                </Knapp>
              </FlexColumn>
              <FlexColumn>
                <Flatknapp
                  mini
                  spinner={false}
                  disabled={formMethods.formState.isSubmitting}
                  onClick={avbryt}
                  htmlType="button"
                >
                  <FormattedMessage id="ManglendeOpplysningerForm.Avbryt" />
                </Flatknapp>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        )}
        <VerticalSpacer fourtyPx />
      </Form>
    </>
  );
};

export default ManglendeOpplysningerForm;
