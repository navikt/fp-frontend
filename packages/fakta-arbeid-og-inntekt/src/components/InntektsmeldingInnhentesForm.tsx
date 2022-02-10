import React, {
  FunctionComponent, useState, useMemo, useCallback,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import Lenke from 'nav-frontend-lenker';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Knapp, Flatknapp } from 'nav-frontend-knapper';

import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import {
  required, hasValidText, maxLength, minLength, formatCurrencyNoKr, ISO_DATE_FORMAT,
} from '@fpsak-frontend/utils';
import {
  TextAreaField, RadioGroupField, RadioOption, Form,
} from '@fpsak-frontend/form-hooks';
import {
  AoIArbeidsforhold, Inntektspost, ManglendeInntektsmeldingVurdering,
} from '@fpsak-frontend/types';
import {
  VerticalSpacer, FlexColumn, FlexContainer, FlexRow, Image, FloatRight,
} from '@fpsak-frontend/shared-components';
import ArbeidsforholdKomplettVurderingType from '@fpsak-frontend/kodeverk/src/arbeidsforholdKomplettVurderingType';

import ArbeidsforholdOgInntekt from '../types/arbeidsforholdOgInntekt';

import styles from './inntektsmeldingInnhentesForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

type ForenkletInntektspost = {
  beløp: number;
  fom: string;
}

const behandleInntektsposter = (
  skjæringspunktDato: string,
  inntektsposter: Inntektspost[],
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
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}

interface OwnProps {
  behandlingUuid: string;
  skjæringspunktDato: string;
  inntektsposter?: Inntektspost[];
  isReadOnly: boolean;
  arbeidsforhold: AoIArbeidsforhold;
  lagreVurdering: (params: ManglendeInntektsmeldingVurdering) => Promise<void>;
  lukkArbeidsforholdRad: () => void;
  oppdaterTabell: React.Dispatch<React.SetStateAction<ArbeidsforholdOgInntekt[]>>
}

const InntektsmeldingInnhentesForm: FunctionComponent<OwnProps> = ({
  behandlingUuid,
  skjæringspunktDato,
  inntektsposter = [],
  arbeidsforhold,
  isReadOnly,
  lagreVurdering,
  lukkArbeidsforholdRad,
  oppdaterTabell,
}) => {
  const intl = useIntl();

  const defaultValues = useMemo<FormValues>(() => ({
    saksbehandlersVurdering: arbeidsforhold.saksbehandlersVurdering,
    begrunnelse: arbeidsforhold.begrunnelse,
  }), [arbeidsforhold]);

  const formMethods = useForm<FormValues>({
    defaultValues,
  });

  const [visAlleMåneder, toggleMånedvisning] = useState(false);

  const sorterteInntektsposter = useMemo(() => behandleInntektsposter(skjæringspunktDato, inntektsposter), [inntektsposter]);

  const avbryt = useCallback(() => {
    lukkArbeidsforholdRad();
    formMethods.reset(defaultValues);
  }, [defaultValues]);

  const lagre = useCallback((formValues: FormValues) => {
    const params = {
      behandlingUuid,
      vurdering: formValues.saksbehandlersVurdering,
      arbeidsgiverIdent: arbeidsforhold.arbeidsgiverIdent,
      internArbeidsforholdRef: arbeidsforhold.internArbeidsforholdId,
      begrunnelse: formValues.begrunnelse,
    };
    lagreVurdering(params).then(() => {
      oppdaterTabell((oldData) => oldData.map((data) => {
        if (data.arbeidsforhold?.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent) {
          return {
            ...data,
            arbeidsforhold: {
              ...data.arbeidsforhold,
              begrunnelse: formValues.begrunnelse,
              saksbehandlersVurdering: formValues.saksbehandlersVurdering,
            },
          };
        }
        return data;
      }));
    }).finally(() => formMethods.reset(formValues));
  }, [arbeidsforhold, oppdaterTabell]);

  return (
    <>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Stillingsprosent" /></Element>
        </FlexColumn>
        <FlexColumn>
          <Normaltekst>{`${arbeidsforhold.stillingsprosent}%`}</Normaltekst>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer thirtyTwoPx />
      {inntektsposter.length > 0 && (
        <>
          <Element><FormattedMessage id="InntektsmeldingInnhentesForm.Inntekter" /></Element>
          <FlexContainer>
            {sorterteInntektsposter.filter((_inntekt, index) => (visAlleMåneder ? true : index < 3)).map((inntekt) => (
              <FlexRow key={inntekt.fom}>
                <FlexColumn className={styles.maanedBredde}>
                  <Normaltekst>
                    <FormattedMessage id={`InntektsmeldingInnhentesForm.${dayjs(inntekt.fom).month() + 1}`} />
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn className={styles.aarBredde}>
                  <Normaltekst>
                    {dayjs(inntekt.fom).year()}
                  </Normaltekst>
                </FlexColumn>
                <FlexColumn className={styles.belopBredde}>
                  <FloatRight>
                    <Normaltekst>
                      {formatCurrencyNoKr(inntekt.beløp)}
                    </Normaltekst>
                  </FloatRight>
                </FlexColumn>
              </FlexRow>
            ))}
          </FlexContainer>
          <Lenke
            onClick={(e) => {
              e.preventDefault();
              toggleMånedvisning(!visAlleMåneder);
            }}
            href=""
          >
            <span>
              <Normaltekst className={styles.inline}>
                <FormattedMessage id={visAlleMåneder ? 'InntektsmeldingInnhentesForm.FaerreManeder' : 'InntektsmeldingInnhentesForm.TidligereManeder'} />
              </Normaltekst>
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
      <Form formMethods={formMethods} onSubmit={lagre}>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Element><FormattedMessage id="InntektsmeldingInnhentesForm.MåInnhentes" /></Element>
            </FlexColumn>
            <FlexColumn>
              <Hjelpetekst
                /* @ts-ignore */
                popoverProps={{ className: styles.hjelpetekst }}
              >
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel1" />
                <VerticalSpacer eightPx />
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel2" />
                <VerticalSpacer eightPx />
                <FormattedMessage id="InntektsmeldingInnhentesForm.HjelpetekstDel3" />
              </Hjelpetekst>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <RadioGroupField
                name="saksbehandlersVurdering"
                validate={[required]}
                readOnly={isReadOnly}
                direction="vertical"
              >
                <RadioOption
                  value={ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}
                  label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.TarKontakt' })}
                />
                <RadioOption
                  value={ArbeidsforholdKomplettVurderingType.FORTSETT_UTEN_INNTEKTSMELDING}
                  label={intl.formatMessage({ id: 'InntektsmeldingInnhentesForm.GåVidere' })}
                />
              </RadioGroupField>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <TextAreaField
          label={<Element><FormattedMessage id="InntektsmeldingInnhentesForm.Begrunn" /></Element>}
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
