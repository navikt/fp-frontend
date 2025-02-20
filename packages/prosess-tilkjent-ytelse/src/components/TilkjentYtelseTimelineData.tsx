import { type ReactElement, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AktivitetStatus, getKodeverknavnFn, KodeverkType } from '@navikt/fp-kodeverk';
import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatPeriode,
  BeregningsresultatPeriodeAndel,
} from '@navikt/fp-types';

import styles from './tilkjentYtelseTimelineData.module.css';

// TODO Kva er dette? Kodeverk-navn skal hentast fra databasen!
const UttakPeriodeNavn = {
  MØDREKVOTE: 'Mødrekvote',
  FEDREKVOTE: 'Fedrekvote',
  FELLESPERIODE: 'Fellesperiode',
  FORELDREPENGER_FØR_FØDSEL: 'Foreldrepenger før fødsel',
  FORELDREPENGER: 'Foreldrepenger',
  FLERBARNSDAGER: 'Flerbarnsdager',
  UDEFINERT: '-',
} as Record<string, string>;

const getEndCharFromId = (id: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningNavnForUttakArbeidstaker = (
  andel: BeregningsresultatPeriodeAndel,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger || !arbeidsgiverOpplysninger.navn) {
    return andel.arbeidsforholdType
      ? getKodeverknavn(andel.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return arbeidsgiverOpplysninger.erPrivatPerson
    ? `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.fødselsdato})`
    : `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(
        andel.eksternArbeidsforholdId,
      )}`;
};

const findAndelsnavn = (
  andel: BeregningsresultatPeriodeAndel,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  switch (andel.aktivitetStatus) {
    case AktivitetStatus.ARBEIDSTAKER:
      return createVisningNavnForUttakArbeidstaker(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId);
    case AktivitetStatus.FRILANSER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Frilans" />;
    case AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende" />;
    case AktivitetStatus.DAGPENGER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Dagpenger" />;
    case AktivitetStatus.ARBEIDSAVKLARINGSPENGER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.AAP" />;
    case AktivitetStatus.MILITAER_ELLER_SIVIL:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Militaer" />;
    case AktivitetStatus.BRUKERS_ANDEL:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.BrukersAndel" />;

    default:
      return '';
  }
};

const getGradering = (andel?: BeregningsresultatPeriodeAndel): ReactElement | null => {
  if (andel === undefined) {
    return null;
  }
  const stringId =
    andel.uttak && andel.uttak.gradering === true ? 'TilkjentYtelse.PeriodeData.Ja' : 'TilkjentYtelse.PeriodeData.Nei';
  return <FormattedMessage id={stringId} />;
};

interface Props {
  selectedItemData: BeregningsresultatPeriode;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  alleKodeverk: AlleKodeverk;
  isSoknadSvangerskapspenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lukkPeriode: () => void;
}

/**
 * TimeLineData
 *
 * Viser opp data fra valgt periode i tilkjent ytelse-tidslinjen
 */
export const TilkjentYtelseTimelineData = ({
  selectedItemData,
  callbackForward,
  callbackBackward,
  alleKodeverk,
  isSoknadSvangerskapspenger,
  arbeidsgiverOpplysningerPerId,
  lukkPeriode,
}: Props) => {
  const numberOfDaysAndWeeks = calcDaysAndWeeks(selectedItemData.fom, selectedItemData.tom);
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <Box borderWidth="1" padding="4">
      <VStack gap="4">
        <HStack justify="space-between">
          <Label size="small">
            <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
          </Label>
          <HStack gap="2" align="center">
            <Button
              className={styles.margin}
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={callbackBackward}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.prevPeriod' })}
            >
              <FormattedMessage id="Timeline.prevPeriodShort" />
            </Button>
            <Button
              className={styles.margin}
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={callbackForward}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.nextPeriod' })}
              iconPosition="right"
            >
              <FormattedMessage id="Timeline.nextPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.lukkPeriode' })}
            />
          </HStack>
        </HStack>
        <div className={styles.detailsPeriode}>
          <VStack gap="2">
            <HStack justify="space-between">
              <Label size="small">
                <FormattedMessage
                  id="TilkjentYtelse.PeriodeData.Periode"
                  values={{
                    fomVerdi: dayjs(selectedItemData.fom).format(DDMMYYYY_DATE_FORMAT).toString(),
                    tomVerdi: dayjs(selectedItemData.tom).format(DDMMYYYY_DATE_FORMAT).toString(),
                  }}
                />
              </Label>
              <BodyShort size="small">{numberOfDaysAndWeeks.formattedString}</BodyShort>
            </HStack>
            <HStack gap="2">
              <FormattedMessage
                id="TilkjentYtelse.PeriodeData.Dagsats"
                values={{ dagsatsVerdi: selectedItemData.dagsats, b: bTag }}
              />
            </HStack>
          </VStack>
        </div>
        {selectedItemData.andeler && selectedItemData.andeler.length !== 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Andel" />
                </Table.HeaderCell>
                {!isSoknadSvangerskapspenger && (
                  <>
                    <Table.HeaderCell scope="col">
                      <FormattedMessage id="TilkjentYtelse.PeriodeData.KontoType" />
                    </Table.HeaderCell>
                    <Table.HeaderCell scope="col">
                      <FormattedMessage id="TilkjentYtelse.PeriodeData.Gradering" />
                    </Table.HeaderCell>
                  </>
                )}
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Utbetalingsgrad" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Refusjon" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.TilSoker" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.SisteUtbDato" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {selectedItemData.andeler.map((andel, index: number) => (
                <Table.Row key={`index${index + 1}`}>
                  <Table.DataCell>
                    {findAndelsnavn(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId)}
                  </Table.DataCell>
                  {!isSoknadSvangerskapspenger && (
                    <Table.DataCell>
                      <BodyShort size="small">{UttakPeriodeNavn[andel.uttak.stonadskontoType]}</BodyShort>
                    </Table.DataCell>
                  )}
                  {!isSoknadSvangerskapspenger && (
                    <Table.DataCell>
                      <BodyShort size="small">{getGradering(andel)}</BodyShort>
                    </Table.DataCell>
                  )}
                  <Table.DataCell>
                    <BodyShort size="small">{andel.utbetalingsgrad ? andel.utbetalingsgrad : ''}</BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">
                      {andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.refusjon ? andel.refusjon : ''}
                    </BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">{andel.tilSoker ? andel.tilSoker : ''}</BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">
                      {andel.sisteUtbetalingsdato ? dayjs(andel.sisteUtbetalingsdato).format(DDMMYYYY_DATE_FORMAT) : ''}
                    </BodyShort>
                  </Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </VStack>
    </Box>
  );
};
