import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import Lenke from 'nav-frontend-lenker';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import {
  required, hasValidText, maxLength, minLength, formatCurrencyNoKr,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import { AoIArbeidsforhold, Inntektspost } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image,
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
  inntektsposter?: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforhold: AoIArbeidsforhold;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  inntektsposter = [],
  arbeidsforhold,
  isReadOnly,
  lagreManglendeInntekstmelding,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const skalInnhenteInntektsmelding = formMethods.watch('skalInnhenteInntektsmelding');

  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = [...inntektsposter].sort((i1, i2) => dayjs(i2.fom).diff(i1.fom));

  return (
    <>
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Stillingsprosent" /></Element>
        </FlexColumn>
        <FlexColumn>
          {`${arbeidsforhold.stillingsprosent}%`}
        </FlexColumn>
      </FlexRow>
      {sorterteInntektsposter.length > 0 && (
        <>
          <VerticalSpacer sixteenPx />
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Inntekter" /></Element>
          {sorterteInntektsposter.filter((inntekt, index) => (visAlleMåneder ? true : index < 3)).map((inntekt) => (
            <Row>
              <Column xs="1">
                {`${intl.formatMessage({ id: `InntektsmeldingInnhentesForm.${dayjs(inntekt.fom).month()}` })} ${dayjs(inntekt.fom).year()}`}
              </Column>
              <Column xs="2">
                {formatCurrencyNoKr(inntekt.beløp)}
              </Column>
            </Row>
          ))}
          {sorterteInntektsposter.length > 3 && (
            <Lenke
              onClick={(e) => {
                e.preventDefault();
                toggleMånedvisning(!visAlleMåneder);
              }}
              href=""
            >
              <span>
                <FormattedMessage id={visAlleMåneder ? 'InntektsmeldingInnhentesForm.FaerreManeder' : 'InntektsmeldingInnhentesForm.TidligereManeder'} />
              </span>
              <Image src={visAlleMåneder ? pilOppIkonUrl : pilNedIkonUrl} />
            </Lenke>
          )}
        </>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => lagreManglendeInntekstmelding({
          ...values,
          arbeidsgiverIdent: arbeidsforhold.arbeidsgiverIdent,
          internArbeidsforholdId: arbeidsforhold.internArbeidsforholdId,
        })}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst><FormattedMessage id="InntektsmeldingInnhentesForm.Hjelpetekst" /></Hjelpetekst>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <RadioGroupField
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
