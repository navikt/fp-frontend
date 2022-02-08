import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import {
  hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import { Inntektsmelding, AoIArbeidsforhold } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';
import BekreftetPermisjonStatus from '../kodeverk/BekreftetPermisjonStatus';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}

interface OwnProps {
  saksnummer: string;
  inntektsmelding: Inntektsmelding;
  arbeidsforhold?: AoIArbeidsforhold;
  isReadOnly: boolean;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>;
  lukkArbeidsforholdRad: () => void;
}

const VurderArbeidsforholdForm: FunctionComponent<OwnProps> = ({
  saksnummer,
  inntektsmelding,
  arbeidsforhold,
  isReadOnly,
  oppdaterTabell,
  lukkArbeidsforholdRad,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: arbeidsforhold.permisjonUtenSluttdatoDto?.permisjonStatus,
    begrunnelse: arbeidsforhold.begrunnelse,
  }), [inntektsmelding, arbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const lagre = useCallback((formValues: FormValues) => {
    oppdaterTabell((oldData) => oldData.map((data) => {
      if (data.arbeidsforhold.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent) {
        return {
          ...data,
          arbeidsforhold: {
            ...data.arbeidsforhold,
            begrunnelse: formValues.begrunnelse,
            permisjonUtenSluttdatoDto: {
              ...data.arbeidsforhold.permisjonUtenSluttdatoDto,
              permisjonStatus: formValues.saksbehandlersVurdering,
            },
          },
        };
      }
      return data;
    }));
    formMethods.reset(formValues);
  }, [inntektsmelding, oppdaterTabell]);

  return (
    <>
      {arbeidsforhold.stillingsprosent && (
        <>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingOpplysningerPanel.Stillingsprosent" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Normaltekst>{`${arbeidsforhold.stillingsprosent}%`}</Normaltekst>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
        </>
      )}
      {inntektsmelding && (
        <InntektsmeldingOpplysningerPanel
          saksnummer={saksnummer}
          inntektsmelding={inntektsmelding}
        />
      )}
      <VerticalSpacer sixteenPx />
      <Form formMethods={formMethods} onSubmit={lagre}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="VurderArbeidsforholdForm.SkalArbeidsforholdetTasMed" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst><FormattedMessage id="VurderArbeidsforholdForm.Hjelpetekst" /></Hjelpetekst>
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
            value={BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON}
            label={intl.formatMessage({ id: 'VurderArbeidsforholdForm.TaMedArbeidsforhold' })}
          />
          <RadioOption
            value={BekreftetPermisjonStatus.BRUK_PERMISJON}
            label={intl.formatMessage({ id: 'VurderArbeidsforholdForm.IkkeTaMedArbeidsforhold' })}
          />
        </RadioGroupField>
        <VerticalSpacer fourPx />
        <TextAreaField
          label={<Element><FormattedMessage id="VurderArbeidsforholdForm.Begrunn" /></Element>}
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
                  <FormattedMessage id="VurderArbeidsforholdForm.Oppdater" />
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
                  <FormattedMessage id="VurderArbeidsforholdForm.Avbryt" />
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

export default VurderArbeidsforholdForm;
