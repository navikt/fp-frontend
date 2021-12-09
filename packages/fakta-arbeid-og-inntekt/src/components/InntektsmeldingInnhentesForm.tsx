import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import {
  required, hasValidText, maxLength, minLength,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import { AoIArbeidsforhold, Inntektspost } from '@fpsak-frontend/types';
import {
  VerticalSpacer, DateLabel, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type FormValues = {
  skalInnhenteInntektsmelding: boolean;
  begrunnelse: string;
}

export type FormValuesForManglendeInntektsmelding = {
  arbeidsgiverIdent: string;
  internArbeidsforholdId: string;
} & FormValues;

interface OwnProps {
  inntektsposter: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforhold: AoIArbeidsforhold;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  inntektsposter,
  arbeidsforhold,
  isReadOnly,
  lagreManglendeInntekstmelding,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const skalInnhenteInntektsmelding = formMethods.watch('skalInnhenteInntektsmelding');

  return (
    <>
      <VerticalSpacer sixteenPx />
      <Normaltekst>
        <FormattedMessage id="InntektsmeldingInnhentesForm.Stillingsprosent" values={{ stillingsprosent: arbeidsforhold.stillingsprosent }} />
      </Normaltekst>
      <VerticalSpacer sixteenPx />
      <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Inntekter" /></Element>
      <FlexContainer>
        {inntektsposter.map((inntekt) => (
          <FlexRow>
            <FlexColumn>
              <DateLabel dateString={inntekt.fom} />
            </FlexColumn>
            <FlexColumn>
              {inntekt.beløp}
            </FlexColumn>
          </FlexRow>
        ))}
      </FlexContainer>
      <VerticalSpacer thirtyTwoPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => lagreManglendeInntekstmelding({
          ...values,
          arbeidsgiverIdent: arbeidsforhold.arbeidsgiverIdent,
          internArbeidsforholdId: arbeidsforhold.internArbeidsforholdId,
        })}
      >
        <RadioGroupField
          label={<Undertekst><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Undertekst>}
          name="skalInnhenteInntektsmelding"
          validate={[required]}
          readOnly={isReadOnly}
          parse={(value: string) => value === 'true'}
          direction="vertical"
        >
          <RadioOption value="true" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' })} />
          <RadioOption value="false" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' })} />
        </RadioGroupField>
        {skalInnhenteInntektsmelding === false && (
          <>
            <TextAreaField
              label={<FormattedMessage id="InntektsmeldingInnhentesForm.Begrunn" />}
              name="begrunnelse"
              validate={[required, minLength3, maxLength1500, hasValidText]}
              maxLength={1500}
              readOnly={isReadOnly}
            />
            <VerticalSpacer sixteenPx />
          </>
        )}
        <VerticalSpacer eightPx />
        {skalInnhenteInntektsmelding !== undefined && (
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Knapp
                  mini
                  spinner={false}
                  disabled={false}
                  htmlType="submit"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
                </Knapp>
              </FlexColumn>
              <FlexColumn>
                <Flatknapp
                  mini
                  spinner={false}
                  disabled={false}
                  onClick={() => undefined}
                  htmlType="button"
                >
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Avbryt" />
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

export default InntektsmeldingInnhentesForm;
