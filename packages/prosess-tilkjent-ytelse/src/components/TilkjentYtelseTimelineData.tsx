import { type ReactElement, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Label, Panel } from '@navikt/ds-react';
import {
  FlexColumn,
  FlexContainer,
  FlexRow,
  Table,
  TableColumn,
  TableRow,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
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

const tableHeaderTextCodes = (isFagsakSVP = false): string[] => {
  if (isFagsakSVP) {
    return [
      'TilkjentYtelse.PeriodeData.Andel',
      'TilkjentYtelse.PeriodeData.Utbetalingsgrad',
      'TilkjentYtelse.PeriodeData.Refusjon',
      'TilkjentYtelse.PeriodeData.TilSoker',
      'TilkjentYtelse.PeriodeData.SisteUtbDato',
    ];
  }
  return [
    'TilkjentYtelse.PeriodeData.Andel',
    'TilkjentYtelse.PeriodeData.KontoType',
    'TilkjentYtelse.PeriodeData.Gradering',
    'TilkjentYtelse.PeriodeData.Utbetalingsgrad',
    'TilkjentYtelse.PeriodeData.Refusjon',
    'TilkjentYtelse.PeriodeData.TilSoker',
    'TilkjentYtelse.PeriodeData.SisteUtbDato',
  ];
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
export const TilkjentYtelseTimeLineData = ({
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
    <Panel border>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.fix}>
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
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <div className={styles.detailsPeriode}>
          <FlexRow spaceBetween>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage
                  id="TilkjentYtelse.PeriodeData.Periode"
                  values={{
                    fomVerdi: dayjs(selectedItemData.fom).format(DDMMYYYY_DATE_FORMAT).toString(),
                    tomVerdi: dayjs(selectedItemData.tom).format(DDMMYYYY_DATE_FORMAT).toString(),
                  }}
                />
              </Label>
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{numberOfDaysAndWeeks.formattedString}</BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer eightPx />
          <FlexRow>
            <FlexColumn>
              <FormattedMessage
                id="TilkjentYtelse.PeriodeData.Dagsats"
                values={{ dagsatsVerdi: selectedItemData.dagsats, b: bTag }}
              />
            </FlexColumn>
          </FlexRow>
        </div>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      {selectedItemData.andeler && selectedItemData.andeler.length !== 0 && (
        <Table headerTextCodes={tableHeaderTextCodes(isSoknadSvangerskapspenger)}>
          {selectedItemData.andeler.map((andel, index: number) => (
            <TableRow key={`index${index + 1}`}>
              <TableColumn>{findAndelsnavn(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId)}</TableColumn>
              {!isSoknadSvangerskapspenger && (
                <TableColumn>
                  <BodyShort size="small">{UttakPeriodeNavn[andel.uttak.stonadskontoType]}</BodyShort>
                </TableColumn>
              )}
              {!isSoknadSvangerskapspenger && (
                <TableColumn>
                  <BodyShort size="small">{getGradering(andel)}</BodyShort>
                </TableColumn>
              )}
              <TableColumn>
                <BodyShort size="small">{andel.utbetalingsgrad ? andel.utbetalingsgrad : ''}</BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">
                  {andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.refusjon ? andel.refusjon : ''}
                </BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">{andel.tilSoker ? andel.tilSoker : ''}</BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">
                  {andel.sisteUtbetalingsdato ? dayjs(andel.sisteUtbetalingsdato).format(DDMMYYYY_DATE_FORMAT) : ''}
                </BodyShort>
              </TableColumn>
            </TableRow>
          ))}
        </Table>
      )}
    </Panel>
  );
};

export default TilkjentYtelseTimeLineData;
