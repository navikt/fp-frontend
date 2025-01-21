import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon, QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, Label, Popover, Tooltip } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import {
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
} from '@navikt/fp-types';

import BekreftetPermisjonStatus from '../kodeverk/BekreftetPermisjonStatus';
import ArbeidsforholdBoks from './ArbeidsforholdBoks';
import InntektsmeldingOpplysningerPanel from './InntektsmeldingOpplysningerPanel';
import InntektsposterPanel from './InntektsposterPanel';

import styles from './arbeidsforholdField.module.css';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const delOppAId = (eksternArbeidsforholdId: string) => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, i * 25 + 25));
  return oppdeltId.join('-');
};

interface OwnProps {
  index: number;
  fieldId: string;
  saksnummer: string;
  sorterteArbeidsforhold: AoIArbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isReadOnly: boolean;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
}

const ArbeidsforholdField: FunctionComponent<OwnProps> = ({
  index,
  fieldId,
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

  const arbeidsforhold = sorterteArbeidsforhold[index];
  const inntektsmelding = inntektsmeldinger.find(i => erMatch(arbeidsforhold, i));
  const inntektsposter = inntekter.find(
    inntekt => inntekt.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent,
  )?.inntekter;
  const visArbeidsforholdId =
    sorterteArbeidsforhold.filter(a => a.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent).length > 1;
  const arbeidsgiverOpplysinger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);
  const toggleHjelpetekst = useCallback(() => setOpenState(gammelVerdi => !gammelVerdi), []);

  return (
    <ArbeidsforholdBoks key={fieldId} harÅpentAksjonspunkt={harÅpentAksjonspunkt} harBorderTop={index === 0}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            {!harÅpentAksjonspunkt && (
              <CheckmarkIcon
                title={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.Ok' })}
                className={styles.checkmarkIcon}
              />
            )}
            {harÅpentAksjonspunkt && (
              <ExclamationmarkTriangleFillIcon
                title={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.Aksjonspunkt' })}
                className={styles.exclamationmarkIcon}
              />
            )}
          </FlexColumn>
          <FlexColumn className={styles.body}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.firstCol}>
                  <Label size="small">{arbeidsgiverOpplysinger.navn}</Label>
                  {arbeidsforhold.arbeidsgiverIdent && (
                    <Detail>
                      (
                      {arbeidsgiverOpplysinger.erPrivatPerson && arbeidsgiverOpplysinger.fødselsdato ? (
                        <DateLabel dateString={arbeidsgiverOpplysinger.fødselsdato} />
                      ) : (
                        arbeidsforhold.arbeidsgiverIdent
                      )}
                      )
                    </Detail>
                  )}
                </FlexColumn>
                <FlexColumn className={styles.secCol}>
                  <Label size="small">
                    <FormattedMessage id="ArbeidsforholdFieldArray.Periode" />
                  </Label>
                  <BodyShort size="small">
                    {arbeidsforhold && (
                      <PeriodLabel
                        dateStringFom={arbeidsforhold.fom}
                        dateStringTom={arbeidsforhold.tom !== TIDENES_ENDE ? arbeidsforhold.tom : undefined}
                      />
                    )}
                    {!arbeidsforhold && '-'}
                  </BodyShort>
                </FlexColumn>
                <FlexColumn className={styles.thirdCol}>
                  <Label size="small">
                    <FormattedMessage id="ArbeidsforholdFieldArray.Kilde" />
                  </Label>
                  <BodyShort size="small">
                    <FormattedMessage
                      id={
                        arbeidsforhold
                          ? 'ArbeidsforholdFieldArray.AaRegisteret'
                          : 'ArbeidsforholdFieldArray.Inntektsmelding'
                      }
                    />
                  </BodyShort>
                </FlexColumn>
                <FlexColumn className={styles.fourthCol}>
                  <Label size="small">
                    <FormattedMessage id="ArbeidsforholdFieldArray.InntektsmeldingMottatt" />
                  </Label>
                  <BodyShort size="small">
                    {inntektsmelding?.motattDato && <DateLabel dateString={inntektsmelding.motattDato} />}
                    {!inntektsmelding?.motattDato && <FormattedMessage id="ArbeidsforholdFieldArray.IkkeMottatt" />}
                  </BodyShort>
                </FlexColumn>
              </FlexRow>
              <VerticalSpacer sixteenPx />
              <FlexRow>
                <FlexColumn className={styles.firstCol}>
                  {visArbeidsforholdId && arbeidsforhold.eksternArbeidsforholdId && (
                    <>
                      <FlexRow>
                        <FlexColumn>
                          <Label size="small">
                            <FormattedMessage id="ArbeidsforholdFieldArray.Id" />
                          </Label>
                        </FlexColumn>
                        <FlexColumn className={styles.topPadding}>
                          {arbeidsforhold.eksternArbeidsforholdId.length < 50 && (
                            <BodyShort size="small">{arbeidsforhold.eksternArbeidsforholdId}</BodyShort>
                          )}
                          {arbeidsforhold.eksternArbeidsforholdId.length >= 50 && (
                            <Tooltip content={delOppAId(arbeidsforhold.eksternArbeidsforholdId)} placement="bottom">
                              <BodyShort size="small">{`${arbeidsforhold.eksternArbeidsforholdId.substring(
                                0,
                                50,
                              )}...`}</BodyShort>
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
                          <Label size="small">
                            <FormattedMessage id="ArbeidsforholdFieldArray.Stillingsprosent" />
                          </Label>
                        </FlexColumn>
                        <FlexColumn className={styles.topPadding}>
                          <BodyShort size="small">{`${arbeidsforhold.stillingsprosent}%`}</BodyShort>
                        </FlexColumn>
                      </FlexRow>
                      <VerticalSpacer eightPx />
                    </>
                  )}
                  {inntektsmelding && (
                    <InntektsmeldingOpplysningerPanel saksnummer={saksnummer} inntektsmelding={inntektsmelding} />
                  )}
                  {!inntektsmelding && inntektsposter && (
                    <>
                      <VerticalSpacer thirtyTwoPx />
                      <InntektsposterPanel inntektsposter={inntektsposter} skjæringstidspunkt={skjæringstidspunkt} />
                      <VerticalSpacer thirtyTwoPx />
                    </>
                  )}
                </FlexColumn>
                <FlexColumn>
                  {arbeidsforhold.permisjonOgMangel && (
                    <>
                      <Label size="small">
                        {`${getKodeverknavnFraKode(
                          alleKodeverk,
                          KodeverkType.PERMISJONSBESKRIVELSE_TYPE,
                          arbeidsforhold.permisjonOgMangel.type,
                        )} 100%`}
                      </Label>
                      <BodyShort size="small">
                        <PeriodLabel
                          dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                          dateStringTom={undefined}
                        />
                      </BodyShort>
                    </>
                  )}
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
            <RadioGroupPanel
              name={`${FIELD_ARRAY_NAME}.${index}.permisjonStatus`}
              label={
                <FlexContainer>
                  <FlexRow>
                    <FlexColumn>
                      <FormattedMessage id="ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed" />
                    </FlexColumn>
                    <FlexColumn className={styles.image}>
                      <Button
                        ref={buttonRef}
                        type="button"
                        variant="tertiary"
                        onClick={toggleHjelpetekst}
                        icon={
                          <QuestionmarkDiamondIcon
                            title={intl.formatMessage({ id: 'ArbeidsforholdFieldArray.AltHjelpetekst' })}
                          />
                        }
                      />
                      <Popover
                        open={openState}
                        onClose={toggleHjelpetekst}
                        anchorEl={buttonRef.current}
                        className={styles.hjelpetekst}
                      >
                        <Popover.Content className={styles.hjelpetekstInnhold}>
                          <BodyShort>
                            <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel1" />
                          </BodyShort>
                          <VerticalSpacer eightPx />
                          <BodyShort>
                            <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel2" />
                          </BodyShort>
                          <VerticalSpacer eightPx />
                          <BodyShort>
                            <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel3" />
                          </BodyShort>
                          <VerticalSpacer eightPx />
                          <BodyShort>
                            <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel4" />
                          </BodyShort>
                        </Popover.Content>
                      </Popover>
                    </FlexColumn>
                  </FlexRow>
                </FlexContainer>
              }
              validate={[required]}
              isReadOnly={isReadOnly}
              radios={[
                {
                  label: intl.formatMessage({
                    id: inntektsmelding
                      ? 'ArbeidsforholdFieldArray.TaMedArbeidsforhold'
                      : 'ArbeidsforholdFieldArray.TaMedArbeidsforholdIkkeInntektsmelding',
                  }),
                  value: BekreftetPermisjonStatus.IKKE_BRUK_PERMISJON,
                },
                {
                  label: intl.formatMessage({ id: 'ArbeidsforholdFieldArray.IkkeTaMedArbeidsforhold' }),
                  value: BekreftetPermisjonStatus.BRUK_PERMISJON,
                },
              ]}
            />
            <VerticalSpacer fourPx />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </ArbeidsforholdBoks>
  );
};

export default ArbeidsforholdField;
