import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { Label, BodyShort } from '@navikt/ds-react';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Table, TableColumn, TableRow, VerticalSpacer, FloatRight,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, getKodeverknavnFn } from '@navikt/ft-utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import { TimeLineButton, TimeLineDataContainer } from '@navikt/ft-tidslinje';
import { ArbeidsgiverOpplysningerPerId, BeregningsresultatPeriodeAndel, AlleKodeverk } from '@fpsak-frontend/types';

import { PeriodeMedId } from './TilkjentYtelse';

import styles from './tilkjentYtelse.less';

const getEndCharFromId = (id: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningNavnForUttakArbeidstaker = (
  andel: BeregningsresultatPeriodeAndel,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger || !arbeidsgiverOpplysninger.navn) {
    return andel.arbeidsforholdType ? getKodeverknavn(andel.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE) : '';
  }
  return arbeidsgiverOpplysninger.erPrivatPerson
    ? `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.fødselsdato})`
    : `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})${getEndCharFromId(andel.eksternArbeidsforholdId)}`;
};

const tableHeaderTextCodes = (isFagsakSVP = false): string[] => {
  if (isFagsakSVP) {
    return ([
      'TilkjentYtelse.PeriodeData.Andel',
      'TilkjentYtelse.PeriodeData.Utbetalingsgrad',
      'TilkjentYtelse.PeriodeData.Refusjon',
      'TilkjentYtelse.PeriodeData.TilSoker',
      'TilkjentYtelse.PeriodeData.SisteUtbDato',
    ]);
  }
  return ([
    'TilkjentYtelse.PeriodeData.Andel',
    'TilkjentYtelse.PeriodeData.KontoType',
    'TilkjentYtelse.PeriodeData.Gradering',
    'TilkjentYtelse.PeriodeData.Utbetalingsgrad',
    'TilkjentYtelse.PeriodeData.Refusjon',
    'TilkjentYtelse.PeriodeData.TilSoker',
    'TilkjentYtelse.PeriodeData.SisteUtbDato',
  ]);
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
  const stringId = andel.uttak && andel.uttak.gradering === true
    ? 'TilkjentYtelse.PeriodeData.Ja'
    : 'TilkjentYtelse.PeriodeData.Nei';
  return (
    <FormattedMessage
      id={stringId}
    />
  );
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

  return (
    <TimeLineDataContainer>
      <Row>
        <Column xs="10">
          <Label size="small">
            <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
          </Label>
        </Column>
        <Column xs="2">
          <FloatRight>
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={callbackBackward} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={callbackForward} />
          </FloatRight>
        </Column>
      </Row>
      <VerticalSpacer eightPx />
      <div className={styles.detailsPeriode}>
        <Row>
          <Column xs="7">
            <Label size="small">
              <FormattedMessage
                id="TilkjentYtelse.PeriodeData.Periode"
                values={{
                  fomVerdi: moment(selectedItemStartDate)
                    .format(DDMMYYYY_DATE_FORMAT)
                    .toString(),
                  tomVerdi: moment(selectedItemEndDate)
                    .format(DDMMYYYY_DATE_FORMAT)
                    .toString(),
                }}
              />
            </Label>
          </Column>
          <div>
            <Column xs="5">
              <BodyShort size="small">
                <FormattedMessage
                  id={numberOfDaysAndWeeks.id}
                  values={{
                    weeks: numberOfDaysAndWeeks.weeks.toString(),
                    days: numberOfDaysAndWeeks.days.toString(),
                  }}
                />
              </BodyShort>
            </Column>
          </div>
        </Row>
        <VerticalSpacer fourPx />
        <Row>
          <Column xs="12">
            <FormattedMessage
              id="TilkjentYtelse.PeriodeData.Dagsats"
              values={{ dagsatsVerdi: selectedItemData.dagsats, b: (chunks: any) => <b>{chunks}</b> }}
            />
          </Column>
        </Row>
      </div>
      <VerticalSpacer eightPx />
      {selectedItemData.andeler.length !== 0
          && (
            <Table headerTextCodes={tableHeaderTextCodes(isSoknadSvangerskapspenger)}>
              {selectedItemData.andeler.map((andel, index: number) => (
                <TableRow key={`index${index + 1}`}>
                  <TableColumn>{findAndelsnavn(andel, getKodeverknavn, arbeidsgiverOpplysningerPerId)}</TableColumn>
                  {!isSoknadSvangerskapspenger && (
                    <TableColumn><BodyShort size="small">{uttakPeriodeNavn[andel.uttak.stonadskontoType]}</BodyShort></TableColumn>
                  )}
                  {!isSoknadSvangerskapspenger && (
                    <TableColumn><BodyShort size="small">{getGradering(andel)}</BodyShort></TableColumn>
                  )}
                  <TableColumn><BodyShort size="small">{andel.utbetalingsgrad ? andel.utbetalingsgrad : ''}</BodyShort></TableColumn>
                  <TableColumn>
                    <BodyShort size="small">
                      {andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER && andel.refusjon ? andel.refusjon : ''}
                    </BodyShort>
                  </TableColumn>
                  <TableColumn><BodyShort size="small">{andel.tilSoker ? andel.tilSoker : ''}</BodyShort></TableColumn>
                  <TableColumn>
                    <BodyShort size="small">
                      {andel.sisteUtbetalingsdato ? moment(andel.sisteUtbetalingsdato)
                        .format(DDMMYYYY_DATE_FORMAT) : ''}
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
