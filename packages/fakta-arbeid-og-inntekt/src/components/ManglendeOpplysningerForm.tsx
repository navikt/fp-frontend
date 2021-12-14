import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element } from 'nav-frontend-typografi';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, DatepickerField, InputField, Form,
} from '@fpsak-frontend/form-hooks';
import { Inntektsmelding } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

const OPPRETT_ARBEIDSFORHOLD = 'OPPRETT';

type FormValues = {
  skalBrukeInntektsmelding: string;
  periodeFra?: string;
  periodeTil?: string;
  stillingsprosent?: number;
  begrunnelse: string;
}

export type FormValuesForManglendeArbeidsforhold = Omit<FormValues, 'skalBrukeInntektsmelding'> & {
  arbeidsgiverIdent: string;
  internArbeidsforholdId: string;
  skalBrukeInntektsmelding: boolean | undefined;
};

interface OwnProps {
  inntektsmelding: Inntektsmelding;
  isReadOnly: boolean;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => Promise<any>;
  avbrytEditering: () => void;
}

const ManglendeOpplysningerForm: FunctionComponent<OwnProps> = ({
  inntektsmelding,
  isReadOnly,
  lagreManglendeArbeidsforhold,
  avbrytEditering,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const skalBrukeInntektsmelding = formMethods.watch('skalBrukeInntektsmelding');

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  return (
    <>
      <InntektsmeldingOpplysningerPanel
        inntektsmelding={inntektsmelding}
      />
      <VerticalSpacer thirtyTwoPx />
      <AlertStripeInfo><FormattedMessage id="ManglendeOpplysningerForm.ErMottattMenIkkeReg" /></AlertStripeInfo>
      <VerticalSpacer sixteenPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => lagreManglendeArbeidsforhold({
          ...values,
          skalBrukeInntektsmelding: values.skalBrukeInntektsmelding === OPPRETT_ARBEIDSFORHOLD ? undefined : values.skalBrukeInntektsmelding === 'true',
          arbeidsgiverIdent: inntektsmelding.arbeidsgiverIdent,
          internArbeidsforholdId: inntektsmelding.innsendingstidspunkt,
        }).then(avbryt)}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="ManglendeOpplysningerForm.SkalBrukeInntekstmelding" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst><FormattedMessage id="ManglendeOpplysningerForm.Hjelpetekst" /></Hjelpetekst>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <RadioGroupField
          name="skalBrukeInntektsmelding"
          validate={[required]}
          readOnly={isReadOnly}
          direction="vertical"
        >
          <RadioOption value="true" label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.TarKontakt' })} />
          <RadioOption value="false" label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.GåVidere' })} />
          <RadioOption value={OPPRETT_ARBEIDSFORHOLD} label={intl.formatMessage({ id: 'ManglendeOpplysningerForm.OpprettArbeidsforhold' })} />
        </RadioGroupField>
        {skalBrukeInntektsmelding === OPPRETT_ARBEIDSFORHOLD && (
          <>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <DatepickerField
                    name="periodeFra"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeFra" />}
                    validate={[required, hasValidDate]}
                    readOnly={isReadOnly}
                  />
                </FlexColumn>
                <FlexColumn>
                  <DatepickerField
                    name="periodeTil"
                    label={<FormattedMessage id="ManglendeOpplysningerForm.PeriodeTil" />}
                    validate={[required, hasValidDate]}
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
        <VerticalSpacer thirtyTwoPx />
      </Form>
    </>
  );
};

export default ManglendeOpplysningerForm;
