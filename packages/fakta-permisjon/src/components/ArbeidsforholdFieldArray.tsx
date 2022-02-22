import React, { FunctionComponent } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/fp-react-components';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import { required, TIDENES_ENDE } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form-hooks';
import {
  VerticalSpacer, PeriodLabel, DateTimeLabel,
} from '@fpsak-frontend/shared-components';
import { ArbeidOgInntektsmelding, AoIArbeidsforhold, ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

import { Column, Row } from 'nav-frontend-grid';
import BekreftetPermisjonStatus from '../kodeverk/BekreftetPermisjonStatus';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import ArbeidsforholdBoks from './ArbeidsforholdBoks';

import styles from './arbeidsforholdFieldArray.less';
import InntektsposterPanel from './InntektsposterPanel';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[],
}

interface OwnProps {
  saksnummer: string;
  sorterteArbeidsforhold: AoIArbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isReadOnly: boolean;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
  saksnummer,
  sorterteArbeidsforhold,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  isReadOnly,
  harÅpentAksjonspunkt,
  skjæringstidspunkt,
}) => {
  const intl = useIntl();
  const { inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const { control } = useFormContext<FormValues>();
  const { fields } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  return (
    <>
      {fields.map((field, index) => {
        const arbeidsforhold = sorterteArbeidsforhold[index];
        const inntektsmelding = inntektsmeldinger.find((i) => i.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);
        const inntektsposter = inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent)?.inntekter;
        return (
          <ArbeidsforholdBoks key={field.id} harÅpentAksjonspunkt={harÅpentAksjonspunkt} harBorderTop={index === 0}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  {!harÅpentAksjonspunkt && (
                    <Image alt={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.Ok' })} src={okIkonUrl} />
                  )}
                  {harÅpentAksjonspunkt && (
                    <Image alt={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.Aksjonspunkt' })} src={advarselIkonUrl} />
                  )}
                </FlexColumn>
                <FlexColumn className={styles.body}>
                  <Row>
                    <Column xs="4">
                      <Element>
                        {arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent].navn}
                      </Element>
                      {arbeidsforhold.arbeidsgiverIdent && (
                      <Undertekst>
                        (
                        {arbeidsforhold.arbeidsgiverIdent}
                        )
                      </Undertekst>
                      )}
                    </Column>
                    <Column xs="3">
                      <Element>
                        <FormattedMessage id="ArbeidsforholdFieldArray.Periode" />
                      </Element>
                      <Normaltekst>
                        {arbeidsforhold && (
                        <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom !== TIDENES_ENDE ? arbeidsforhold.tom : undefined} />
                        )}
                        {!arbeidsforhold && '-'}
                      </Normaltekst>
                    </Column>
                    <Column xs="2">
                      <Element>
                        <FormattedMessage id="ArbeidsforholdFieldArray.Kilde" />
                      </Element>
                      <Normaltekst>
                        <FormattedMessage id={arbeidsforhold ? 'ArbeidsforholdFieldArray.AaRegisteret' : 'ArbeidsforholdFieldArray.Inntektsmelding'} />
                      </Normaltekst>
                    </Column>
                    <Column xs="3">
                      <Element>
                        <FormattedMessage id="ArbeidsforholdFieldArray.InntektsmeldingMottatt" />
                      </Element>
                      <Normaltekst>
                        {inntektsmelding?.motattDato && (
                        <DateTimeLabel dateTimeString={inntektsmelding.motattDato} useNewFormat />
                        )}
                        {!inntektsmelding?.motattDato && '-'}
                      </Normaltekst>
                    </Column>
                  </Row>
                  <VerticalSpacer sixteenPx />
                  <Row>
                    <Column xs="4">
                      {arbeidsforhold.stillingsprosent && (
                        <>
                          <FlexRow>
                            <FlexColumn>
                              <Element><FormattedMessage id="ArbeidsforholdFieldArray.Stillingsprosent" /></Element>
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
                      {!inntektsmelding && inntekter && (
                        <>
                          <VerticalSpacer thirtyTwoPx />
                          <InntektsposterPanel
                            inntektsposter={inntektsposter}
                            skjæringstidspunkt={skjæringstidspunkt}
                          />
                          <VerticalSpacer thirtyTwoPx />
                        </>
                      )}
                    </Column>
                    <Column xs="3">
                      <Element>
                        <FormattedMessage id="ArbeidsforholdFieldArray.Permisjon" />
                      </Element>
                      <Normaltekst>
                        <PeriodLabel dateStringFom={arbeidsforhold.permisjonUtenSluttdatoDto.permisjonFom} dateStringTom={undefined} />
                      </Normaltekst>
                    </Column>
                  </Row>
                  <FlexContainer>
                    <FlexRow>
                      <FlexColumn>
                        <Element><FormattedMessage id="ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed" /></Element>
                      </FlexColumn>
                      <FlexColumn>
                        <Hjelpetekst
                          /* @ts-ignore */
                          popoverProps={{ className: styles.hjelpetekst }}
                        >
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel1" />
                          <VerticalSpacer eightPx />
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel2" />
                          <VerticalSpacer eightPx />
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel3" />
                          <VerticalSpacer eightPx />
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel4" />
                        </Hjelpetekst>
                      </FlexColumn>
                    </FlexRow>
                  </FlexContainer>
                  <RadioGroupField
                    name={`${FIELD_ARRAY_NAME}.${index}.permisjonStatus`}
                    validate={[required]}
                    readOnly={isReadOnly}
                    direction="vertical"
                  >
                    <RadioOption
                      value={BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON}
                      label={intl.formatMessage({
                        id: inntektsmelding
                          ? 'ArbeidsforholdFieldArray.TaMedArbeidsforhold' : 'ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding',
                      })}
                    />
                    <RadioOption
                      value={BekreftetPermisjonStatus.BRUK_PERMISJON}
                      label={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold' })}
                    />
                  </RadioGroupField>
                  <VerticalSpacer fourPx />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </ArbeidsforholdBoks>
        );
      })}
    </>
  );
};

export default ArbeidsforholdFieldArray;
