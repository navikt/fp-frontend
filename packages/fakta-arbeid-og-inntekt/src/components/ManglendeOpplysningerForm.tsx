import React, {
  useCallback, FunctionComponent, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { Undertekst } from 'nav-frontend-typografi';
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

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

const OPPRETT_ARBEIDSFORHOLD = 'OPPRETT';

type FormValues = {
  saksbehandlersVurdering: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
  begrunnelse: string;
}

const validerPeriodeRekkefølge = (getValues: UseFormGetValues<FormValues>) => (tom: string) => dateAfterOrEqual(getValues('fom'))(tom);

interface OwnProps {
  behandlingUuid: string;
  arbeidsforholdNavn: string;
  inntektsmelding: Inntektsmelding;
  arbeidsforhold: AoIArbeidsforhold;
  isReadOnly: boolean;
  registrerArbeidsforhold: (params: ManueltArbeidsforhold) => Promise<void>;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  avbrytEditering: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
}

const ManglendeOpplysningerForm: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  arbeidsforholdNavn,
  inntektsmelding,
  arbeidsforhold,
  isReadOnly,
  registrerArbeidsforhold,
  lagreVurdering,
  avbrytEditering,
  oppdaterTabell,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: inntektsmelding.saksbehandlersVurdering?.kode,
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
    avbrytEditering();
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const lagre = useCallback((formValues: FormValues) => {
    const oppdater = (() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (data.inntektsmelding?.arbeidsgiverIdent === inntektsmelding.arbeidsgiverIdent) {
          const af = formValues.saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER ? {
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
              saksbehandlersVurdering: { kode: formValues.saksbehandlersVurdering, kodeverk: '' },
            },
            arbeidsforhold: af,
          };
        }
        return data;
      }));
      avbrytEditering();
    });

    if (formValues.saksbehandlersVurdering === OPPRETT_ARBEIDSFORHOLD) {
      registrerArbeidsforhold({
        behandlingUuid,
        arbeidsgiverNavn: arbeidsforholdNavn,
        arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
        vurdering: ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,
        begrunnelse: formValues.begrunnelse,
        fom: formValues.fom,
        tom: formValues.tom,
        stillingsprosent: formValues.stillingsprosent,
      }).then(oppdater);
    } else {
      lagreVurdering({
        behandlingUuid,
        vurdering: saksbehandlersVurdering,
        begrunnelse: formValues.begrunnelse,
        arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
        internArbeidsforholdRef: inntektsmelding.internArbeidsforholdId,
      }).then(oppdater);
    }
  }, [inntektsmelding]);

  return (
    <>
      <InntektsmeldingOpplysningerPanel
        inntektsmelding={inntektsmelding}
      />
      <VerticalSpacer thirtyTwoPx />
      <AlertStripeInfo><FormattedMessage id="ManglendeOpplysningerForm.ErMottattMenIkkeReg" /></AlertStripeInfo>
      <VerticalSpacer sixteenPx />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Undertekst><FormattedMessage id="ManglendeOpplysningerForm.SkalBrukeInntekstmelding" /></Undertekst>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst><FormattedMessage id="ManglendeOpplysningerForm.Hjelpetekst" /></Hjelpetekst>
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
            value={ArbeidsforholdKomplettVurderingType.VENT_PÅ_ARBEIDSFORHOLD}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.TarKontakt' })}
          />
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.GåVidere' })}
          />
          <RadioOption
            value={ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}
            label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.OpprettArbeidsforhold' })}
          />
        </RadioGroupField>
        {saksbehandlersVurdering === ArbeidsforholdKomplettVurderingType.MANUELT_OPPRETTET_AV_SAKSBEHANDLER && (
          <>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    name="fom"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeFra" />}
                    validate={[required, hasValidDate]}
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name="tom"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeTil" />}
                    validate={[required, hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <InputField
                    name="stillingsprosent"
                    label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.Stillingsprosent' })}
                    parse={(value: string) => {
                      const parsedValue = parseInt(value, 10);
                      return Number.isNaN(parsedValue) ? value : parsedValue;
                    }}
                    validate={[required, hasValidInteger, minValue1, maxValue100]}
                    bredde="XS"
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer eightPx />
          </>
        )}
        <TextAreaField
          label={<FormattedMessage id="ManglendeOpplysningerForm.Begrunn" />}
          name="begrunnelse"
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={isReadOnly}
        />
        <VerticalSpacer sixteenPx />
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
        <VerticalSpacer thirtyTwoPx />
      </Form>
    </>
  );
};

export default ManglendeOpplysningerForm;
