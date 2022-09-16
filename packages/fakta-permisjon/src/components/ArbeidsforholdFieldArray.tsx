import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';
import Hjelpetekst from 'nav-frontend-hjelpetekst';
import {
  FlexColumn, FlexContainer, FlexRow, Image, Tooltip, VerticalSpacer, PeriodLabel, DateLabel,
} from '@navikt/ft-ui-komponenter';

import advarselIkonUrl from '@fpsak-frontend/assets/images/advarsel2.svg';
import okIkonUrl from '@fpsak-frontend/assets/images/check.svg';
import { required } from '@navikt/ft-form-validators';
import { TIDENES_ENDE, getKodeverknavnFraKode } from '@navikt/ft-utils';
import { RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import {
  ArbeidOgInntektsmelding, AoIArbeidsforhold, ArbeidsgiverOpplysningerPerId, Inntektsmelding, AlleKodeverk,
} from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

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

const erMatch = (
  arbeidsforhold: AoIArbeidsforhold,
  inntektsmelding: Inntektsmelding,
): boolean => inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent
  && (!inntektsmelding.internArbeidsforholdId || inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const delOppAId = (eksternArbeidsforholdId: string) => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, (i * 25) + 25));
  return <p>{oppdeltId.join('-')}</p>;
};

interface OwnProps {
  saksnummer: string;
  sorterteArbeidsforhold: AoIArbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isReadOnly: boolean;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
  saksnummer,
  sorterteArbeidsforhold,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  isReadOnly,
  harÅpentAksjonspunkt,
  skjæringstidspunkt,
  alleKodeverk,
}) => {
  const intl = useIntl();
  const { inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const { control } = formHooks.useFormContext<FormValues>();
  const { fields } = formHooks.useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  return (
    <>
      {fields.map((field, index) => {
        const arbeidsforhold = sorterteArbeidsforhold[index];
        const inntektsmelding = inntektsmeldinger.find((i) => erMatch(arbeidsforhold, i));
        const inntektsposter = inntekter.find((inntekt) => inntekt.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent)?.inntekter;
        const visArbeidsforholdId = sorterteArbeidsforhold.filter((a) => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent).length > 1;
        const arbeidsgiverOpplysinger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
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
                      <Label size="small">
                        {arbeidsgiverOpplysinger.navn}
                      </Label>
                      {arbeidsforhold.arbeidsgiverIdent && (
                      <Detail size="small">
                        (
                        {arbeidsgiverOpplysinger.erPrivatPerson
                          ? <DateLabel dateString={arbeidsgiverOpplysinger.fødselsdato} /> : arbeidsforhold.arbeidsgiverIdent}
                        )
                      </Detail>
                      )}
                    </Column>
                    <Column xs="3">
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdFieldArray.Periode" />
                      </Label>
                      <BodyShort size="small">
                        {arbeidsforhold && (
                        <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom !== TIDENES_ENDE ? arbeidsforhold.tom : undefined} />
                        )}
                        {!arbeidsforhold && '-'}
                      </BodyShort>
                    </Column>
                    <Column xs="2">
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdFieldArray.Kilde" />
                      </Label>
                      <BodyShort size="small">
                        <FormattedMessage id={arbeidsforhold ? 'ArbeidsforholdFieldArray.AaRegisteret' : 'ArbeidsforholdFieldArray.Inntektsmelding'} />
                      </BodyShort>
                    </Column>
                    <Column xs="3">
                      <Label size="small">
                        <FormattedMessage id="ArbeidsforholdFieldArray.InntektsmeldingMottatt" />
                      </Label>
                      <BodyShort size="small">
                        {inntektsmelding?.motattDato && (
                          <DateLabel dateString={inntektsmelding.motattDato} />
                        )}
                        {!inntektsmelding?.motattDato && <FormattedMessage id="ArbeidsforholdFieldArray.IkkeMottatt" />}
                      </BodyShort>
                    </Column>
                  </Row>
                  <VerticalSpacer sixteenPx />
                  <Row>
                    <Column xs="4">
                      {visArbeidsforholdId && (
                        <>
                          <FlexRow>
                            <FlexColumn>
                              <Label size="small"><FormattedMessage id="ArbeidsforholdFieldArray.Id" /></Label>
                            </FlexColumn>
                            <FlexColumn>
                              {arbeidsforhold.eksternArbeidsforholdId.length < 50 && (
                                <BodyShort size="small">{arbeidsforhold.eksternArbeidsforholdId}</BodyShort>
                              )}
                              {arbeidsforhold.eksternArbeidsforholdId.length >= 50 && (
                                <Tooltip
                                  content={delOppAId(arbeidsforhold.eksternArbeidsforholdId)}
                                  alignBottom
                                >
                                  <BodyShort size="small">{`${arbeidsforhold.eksternArbeidsforholdId.substring(0, 50)}...`}</BodyShort>
                                </Tooltip>
                              )}
                            </FlexColumn>
                          </FlexRow>
                          <VerticalSpacer eightPx />
                        </>
                      )}
                      {arbeidsforhold.stillingsprosent && (
                        <>
                          <FlexRow>
                            <FlexColumn>
                              <Label size="small"><FormattedMessage id="ArbeidsforholdFieldArray.Stillingsprosent" /></Label>
                            </FlexColumn>
                            <FlexColumn>
                              <BodyShort size="small">{`${arbeidsforhold.stillingsprosent}%`}</BodyShort>
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
                      {!inntektsmelding && inntektsposter && (
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
                      <Label size="small">
                        {`${getKodeverknavnFraKode(alleKodeverk, KodeverkType.PERMISJONSBESKRIVELSE_TYPE, arbeidsforhold.permisjonOgMangel.type)} 100%`}
                      </Label>
                      <BodyShort size="small">
                        <PeriodLabel dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom} dateStringTom={undefined} />
                      </BodyShort>
                    </Column>
                  </Row>
                  <RadioGroupPanel
                    name={`${FIELD_ARRAY_NAME}.${index}.permisjonStatus`}
                    label={(
                      <FlexContainer>
                        <FlexRow>
                          <FlexColumn>
                            <FormattedMessage id="ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed" />
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
                    )}
                    validate={[required]}
                    isReadOnly={isReadOnly}
                    radios={[{
                      label: intl.formatMessage({
                        id: inntektsmelding
                          ? 'ArbeidsforholdFieldArray.TaMedArbeidsforhold' : 'ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding',
                      }),
                      value: BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON,
                    }, {
                      label: intl.formatMessage({ id: 'ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold' }),
                      value: BekreftetPermisjonStatus.BRUK_PERMISJON,
                    }]}
                  />
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
