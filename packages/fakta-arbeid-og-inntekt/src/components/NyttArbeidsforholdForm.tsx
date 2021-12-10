import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { Undertittel } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';

import { AoIArbeidsforhold } from '@fpsak-frontend/types';
import {
  hasValidText, maxLength, minLength, hasValidDate, hasValidInteger, required, minValue, maxValue, dateAfterOrEqual,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, DatepickerField, InputField, Form,
} from '@fpsak-frontend/form-hooks';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

const validerPeriodeRekkefølge = (getValues: UseFormGetValues<any>) => (tom: string) => dateAfterOrEqual(getValues('periodeFra'))(tom);

export type FormValues = {
  arbeidsgiver: string;
  periodeFra: string;
  periodeTil: string;
  stillingsprosent: number;
  begrunnelse: string;
}

interface OwnProps {
  isReadOnly: boolean;
  lagreNyttArbeidsforhold: (formValues: FormValues, nyttArbeidsforholdId?: number) => Promise<any>;
  arbeidsforhold?: AoIArbeidsforhold;
  arbeidsforholdNavn?: string;
  avbrytEditering?: () => void;
  nyttArbeidsforholdId?: number;
}

const NyttArbeidsforholdForm: FunctionComponent<OwnProps> = ({
  isReadOnly,
  lagreNyttArbeidsforhold,
  arbeidsforhold,
  arbeidsforholdNavn,
  avbrytEditering,
  nyttArbeidsforholdId,
}) => {
  const formMethods = useForm<FormValues>({
    defaultValues: arbeidsforhold ? {
      periodeFra: arbeidsforhold.fom,
      periodeTil: arbeidsforhold.tom,
      stillingsprosent: arbeidsforhold.stillingsprosent,
      begrunnelse: arbeidsforhold.begrunnelse,
      arbeidsgiver: arbeidsforholdNavn,
    } : undefined,
  });

  const avbryt = () => {
    avbrytEditering();
    formMethods.reset();
  };

  return (
    <>
      <Undertittel><FormattedMessage id="LeggTilArbeidsforholdForm.LeggTilArbeidsforhold" /></Undertittel>
      <VerticalSpacer sixteenPx />
      <AlertStripeInfo><FormattedMessage id="LeggTilArbeidsforholdForm.Info" /></AlertStripeInfo>
      <VerticalSpacer thirtyTwoPx />
      <Form formMethods={formMethods} onSubmit={(values) => lagreNyttArbeidsforhold(values, nyttArbeidsforholdId).then(() => avbryt())}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <InputField
                name="arbeidsgiver"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.Arbeidsgiver" />}
                validate={[required]}
                bredde="XXL"
                readOnly={isReadOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                name="periodeFra"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeFra" />}
                validate={[required, hasValidDate]}
                readOnly={isReadOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <DatepickerField
                name="periodeTil"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.PeriodeTil" />}
                validate={[required, hasValidDate, validerPeriodeRekkefølge(formMethods.getValues)]}
                readOnly={isReadOnly}
              />
            </FlexColumn>
            <FlexColumn>
              <InputField
                name="stillingsprosent"
                label={<FormattedMessage id="LeggTilArbeidsforholdForm.Stillingsprosent" />}
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
        <VerticalSpacer sixteenPx />
        <TextAreaField
          label={<FormattedMessage id="LeggTilArbeidsforholdForm.Begrunn" />}
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
                spinner={false}
                disabled={false}
                htmlType="submit"
              >
                <FormattedMessage id="LeggTilArbeidsforholdForm.Lagre" />
              </Knapp>
            </FlexColumn>
            <FlexColumn>
              <Flatknapp
                mini
                spinner={false}
                disabled={false}
                onClick={avbryt}
                htmlType="button"
              >
                <FormattedMessage id="LeggTilArbeidsforholdForm.Avbryt" />
              </Flatknapp>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Form>
    </>
  );
};

export default NyttArbeidsforholdForm;
