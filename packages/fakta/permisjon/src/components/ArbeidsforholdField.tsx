import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkIcon, ExclamationmarkTriangleFillIcon, QuestionmarkDiamondIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, HStack, Label, Popover, Tooltip, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { DateLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';

import type {
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  Inntektsmelding,
} from '@navikt/fp-types';

import { BekreftetPermisjonStatus } from '../kodeverk/BekreftetPermisjonStatus';
import { ArbeidsforholdBoks } from './ArbeidsforholdBoks';
import { InntektsmeldingOpplysningerPanel } from './InntektsmeldingOpplysningerPanel';
import { InntektsposterPanel } from './InntektsposterPanel';

import styles from './arbeidsforholdField.module.css';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

export type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[];
};

interface Props {
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

export const ArbeidsforholdField = ({
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
}: Props) => {
  const intl = useIntl();

  const { control } = useFormContext<FormValues>();

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
  const toggleHjelpetekst = () => setOpenState(gammelVerdi => !gammelVerdi);

  return (
    <ArbeidsforholdBoks key={fieldId} harÅpentAksjonspunkt={harÅpentAksjonspunkt} harBorderTop={index === 0}>
      <HStack gap="space-24">
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
        <VStack gap="space-16" width="90%">
          <HStack justify="space-between">
            <div>
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
            </div>
            <div>
              <Label size="small">
                <FormattedMessage id="ArbeidsforholdFieldArray.Periode" />
              </Label>
              <BodyShort size="small">
                {arbeidsforhold ? (
                  <PeriodLabel dateStringFom={arbeidsforhold.fom} dateStringTom={arbeidsforhold.tom} />
                ) : (
                  '-'
                )}
              </BodyShort>
            </div>
            <div>
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
            </div>
            <div>
              <Label size="small">
                <FormattedMessage id="ArbeidsforholdFieldArray.InntektsmeldingMottatt" />
              </Label>
              <BodyShort size="small">
                {inntektsmelding?.motattDato && <DateLabel dateString={inntektsmelding.motattDato} />}
                {!inntektsmelding?.motattDato && <FormattedMessage id="ArbeidsforholdFieldArray.IkkeMottatt" />}
              </BodyShort>
            </div>
          </HStack>
          {visArbeidsforholdId && arbeidsforhold.eksternArbeidsforholdId && (
            <HStack gap="space-8">
              <Label size="small">
                <FormattedMessage id="ArbeidsforholdFieldArray.Id" />
              </Label>
              <div>
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
              </div>
            </HStack>
          )}
          {arbeidsforhold.stillingsprosent && (
            <HStack gap="space-8">
              <Label size="small">
                <FormattedMessage id="ArbeidsforholdFieldArray.Stillingsprosent" />
              </Label>
              <BodyShort size="small">{`${arbeidsforhold.stillingsprosent}%`}</BodyShort>
            </HStack>
          )}
          {arbeidsforhold.permisjonOgMangel && (
            <HStack gap="space-8">
              <>
                <Label size="small">
                  {`${alleKodeverk['PermisjonsbeskrivelseType'].find(k => k.kode === arbeidsforhold.permisjonOgMangel?.type)?.navn ?? ''} 100%`}
                </Label>
                <BodyShort size="small">
                  <PeriodLabel
                    dateStringFom={arbeidsforhold.permisjonOgMangel.permisjonFom}
                    dateStringTom={undefined}
                  />
                </BodyShort>
              </>
            </HStack>
          )}
          {inntektsmelding && (
            <InntektsmeldingOpplysningerPanel saksnummer={saksnummer} inntektsmelding={inntektsmelding} />
          )}
          {!inntektsmelding && inntektsposter && (
            <InntektsposterPanel inntektsposter={inntektsposter} skjæringstidspunkt={skjæringstidspunkt} />
          )}
          <RhfRadioGroup
            name={`${FIELD_ARRAY_NAME}.${index}.permisjonStatus`}
            control={control}
            label={
              <HStack gap="space-8">
                <FormattedMessage id="ArbeidsforholdFieldArray.SkalArbeidsforholdetTasMed" />
                <div className={styles.image}>
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
                      <VStack gap="space-8">
                        <BodyShort>
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel1" />
                        </BodyShort>
                        <BodyShort>
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel2" />
                        </BodyShort>
                        <BodyShort>
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel3" />
                        </BodyShort>
                        <BodyShort>
                          <FormattedMessage id="ArbeidsforholdFieldArray.HjelpetekstDel4" />
                        </BodyShort>
                      </VStack>
                    </Popover.Content>
                  </Popover>
                </div>
              </HStack>
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
        </VStack>
      </HStack>
    </ArbeidsforholdBoks>
  );
};

const erMatch = (arbeidsforhold: AoIArbeidsforhold, inntektsmelding: Inntektsmelding): boolean =>
  inntektsmelding.arbeidsgiverIdent === arbeidsforhold.arbeidsgiverIdent &&
  (!inntektsmelding.internArbeidsforholdId ||
    inntektsmelding.internArbeidsforholdId === arbeidsforhold.internArbeidsforholdId);

const delOppAId = (eksternArbeidsforholdId: string) => {
  const lengde = Math.ceil(eksternArbeidsforholdId.length / 25);
  const oppdeltId = Array.from({ length: lengde }, (_x, i) => eksternArbeidsforholdId.slice(i * 25, i * 25 + 25));
  return oppdeltId.join('-');
};
