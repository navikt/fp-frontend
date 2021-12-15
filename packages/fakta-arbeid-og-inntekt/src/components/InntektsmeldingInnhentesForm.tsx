import React, {
  FunctionComponent, useState, useMemo, useCallback,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import Lenke from 'nav-frontend-lenker';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import {
  required, hasValidText, maxLength, minLength, formatCurrencyNoKr, ISO_DATE_FORMAT,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import { AoIArbeidsforhold, Inntektspost } from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
}

const behandleInntektsposter = (
  skjæringspunktDato: string,
  inntektsposter?: Inntektspost[],
): ForenkletInntektspost[] => {
  const skjæringstidspunkt = dayjs(skjæringspunktDato);
  const sluttPeriode = skjæringstidspunkt.startOf('month');
  const startPeriode = sluttPeriode.subtract(12, 'month');

  const poster = [];
  for (let måned = sluttPeriode; måned.isAfter(startPeriode); måned = måned.subtract(1, 'month')) {
    const månedString = måned.format(ISO_DATE_FORMAT);
    const inntekt = inntektsposter.find((inn) => dayjs(inn.fom).startOf('month').format(ISO_DATE_FORMAT) === månedString);
    poster.push({
      beløp: inntekt?.beløp || 0,
      fom: månedString,
    });
  }

  return poster;
};

type FormValues = {
  skalInnhenteInntektsmelding: string;
  begrunnelse: string;
}

export type FormValuesForManglendeInntektsmelding = Omit<FormValues, 'skalInnhenteInntektsmelding'> & {
  arbeidsgiverIdent: string;
  internArbeidsforholdId: string;
  skalInnhenteInntektsmelding: boolean;
};

interface OwnProps {
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforhold: AoIArbeidsforhold;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => Promise<any>;
  avbrytEditering: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforhold,
  isReadOnly,
  lagreManglendeInntekstmelding,
  avbrytEditering,
  oppdaterTabell,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo(() => ({
    skalInnhenteInntektsmelding: arbeidsforhold.skalInnhenteInntektsmelding?.toString(),
    begrunnelse: arbeidsforhold.begrunnelse,
  }), [arbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = useMemo(() => behandleInntektsposter(skjæringspunktDato, inntektsposter), [inntektsposter]);

  const avbryt = useCallback(() => {
    avbrytEditering();
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const lagre = useCallback((formValues: FormValuesForManglendeInntektsmelding) => {
    lagreManglendeInntekstmelding(formValues).then(() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (data.arbeidsforhold.arbeidsgiverIdent === formValues.arbeidsgiverIdent) {
          return {
            ...data,
            arbeidsforhold: {
              ...data.arbeidsforhold,
              begrunnelse: formValues.begrunnelse,
              skalInnhenteInntektsmelding: formValues.skalInnhenteInntektsmelding,
            },
          };
        }
        return data;
      }));
      avbrytEditering();
    });
  }, []);

  return (
    <>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Stillingsprosent" /></Element>
        </FlexColumn>
        <FlexColumn>
          {`${arbeidsforhold.stillingsprosent}%`}
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer thirtyTwoPx />
      {inntektsposter.length > 0 && (
        <>
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Inntekter" /></Element>
          {sorterteInntektsposter.filter((_inntekt, index) => (visAlleMåneder ? true : index < 3)).map((inntekt) => (
            <Row key={inntekt.fom}>
              <Column xs="1">
                {`${intl.formatMessage({ id: `InntektsmeldingInnhentesForm.${dayjs(inntekt.fom).month() + 1}` })} ${dayjs(inntekt.fom).year()}`}
              </Column>
              <Column xs="2">
                {formatCurrencyNoKr(inntekt.beløp)}
              </Column>
            </Row>
          ))}
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
        </>
      )}
      {inntektsposter.length === 0 && (
        <Element>
          <FormattedMessage id="InntektsmeldingInnhentesForm.IngenInntekt" />
        </Element>
      )}
      <VerticalSpacer thirtyTwoPx />
      <Form
        formMethods={formMethods}
        onSubmit={(values) => lagre({
          ...values,
          arbeidsgiverIdent: arbeidsforhold.arbeidsgiverIdent,
          internArbeidsforholdId: arbeidsforhold.internArbeidsforholdId,
          skalInnhenteInntektsmelding: values.skalInnhenteInntektsmelding === 'true',
        })}
      >
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Undertekst><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Undertekst>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst><FormattedMessage id="InntektsmeldingInnhentesForm.Hjelpetekst" /></Hjelpetekst>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <RadioGroupField
                name="skalInnhenteInntektsmelding"
                validate={[required]}
                readOnly={isReadOnly}
                direction="vertical"
              >
                <RadioOption value="true" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' })} />
                <RadioOption value="false" label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' })} />
              </RadioGroupField>
              <FlexColumn />
              <TextAreaField
                label={<FormattedMessage id="InntektsmeldingInnhentesForm.Begrunn" />}
                name="begrunnelse"
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={isReadOnly}
              />
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
                  <FormattedMessage id="InntektsmeldingInnhentesForm.Lagre" />
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
