import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Label, BodyShort } from '@navikt/ds-react';

import { KodeverkType, aktivitetStatus, uttakPeriodeNavn, getKodeverknavnFn } from '@navikt/fp-kodeverk';
import {
  Table,
  TableColumn,
  TableRow,
  VerticalSpacer,
  FlexContainer,
  FlexRow,
  FlexColumn,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { TimeLineButton, TimeLineDataContainer } from '@navikt/ft-tidslinje';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatPeriodeAndel,
  AlleKodeverk,
  BeregningsresultatPeriode,
} from '@navikt/fp-types';

import styles from './tilkjentYtelse.module.css';

export type PeriodeMedId = BeregningsresultatPeriode & { id: number };

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
    case aktivitetStatus.ARBEIDSTAKER:
      return createVisningNavnForUttakArbeidstaker(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId);
    case aktivitetStatus.FRILANSER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Frilans" />;
    case aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende" />;
    case aktivitetStatus.DAGPENGER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Dagpenger" />;
    case aktivitetStatus.ARBEIDSAVKLARINGSPENGER:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.AAP" />;
    case aktivitetStatus.MILITAER_ELLER_SIVIL:
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Militaer" />;
    case aktivitetStatus.BRUKERS_ANDEL:
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

interface OwnProps {
  selectedItemStartDate: string;
  selectedItemEndDate: string;
  selectedItemData?: PeriodeMedId;
  callbackForward: (...args: any[]) => any;
  callbackBackward: (...args: any[]) => any;
  alleKodeverk: AlleKodeverk;
  isSoknadSvangerskapspenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * TimeLineData
 *
 * Viser opp data fra valgt periode i tilkjent ytelse-tidslinjen
 */
const TilkjentYtelseTimeLineData: FunctionComponent<OwnProps> = ({
  selectedItemStartDate,
  selectedItemEndDate,
  selectedItemData,
  callbackForward,
  callbackBackward,
  alleKodeverk,
  isSoknadSvangerskapspenger,
  arbeidsgiverOpplysningerPerId,
}) => {
  const numberOfDaysAndWeeks = calcDaysAndWeeks(selectedItemStartDate, selectedItemEndDate);
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <TimeLineDataContainer>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.ctrlCol}>
            <TimeLineButton
              text={intl.formatMessage({ id: 'Timeline.prevPeriod' })}
              type="prev"
              callback={callbackBackward}
            />
            <TimeLineButton
              text={intl.formatMessage({ id: 'Timeline.nextPeriod' })}
              type="next"
              callback={callbackForward}
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
                    fomVerdi: moment(selectedItemStartDate).format(DDMMYYYY_DATE_FORMAT).toString(),
                    tomVerdi: moment(selectedItemEndDate).format(DDMMYYYY_DATE_FORMAT).toString(),
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
      {selectedItemData.andeler.length !== 0 && (
        <Table headerTextCodes={tableHeaderTextCodes(isSoknadSvangerskapspenger)}>
          {selectedItemData.andeler.map((andel, index: number) => (
            <TableRow key={`index${index + 1}`}>
              <TableColumn>{findAndelsnavn(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId)}</TableColumn>
              {!isSoknadSvangerskapspenger && (
                <TableColumn>
                  <BodyShort size="small">{uttakPeriodeNavn[andel.uttak.stonadskontoType]}</BodyShort>
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
                  {andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER && andel.refusjon ? andel.refusjon : ''}
                </BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">{andel.tilSoker ? andel.tilSoker : ''}</BodyShort>
              </TableColumn>
              <TableColumn>
                <BodyShort size="small">
                  {andel.sisteUtbetalingsdato ? moment(andel.sisteUtbetalingsdato).format(DDMMYYYY_DATE_FORMAT) : ''}
                </BodyShort>
              </TableColumn>
            </TableRow>
          ))}
        </Table>
      )}
    </TimeLineDataContainer>
  );
};

export default TilkjentYtelseTimeLineData;
