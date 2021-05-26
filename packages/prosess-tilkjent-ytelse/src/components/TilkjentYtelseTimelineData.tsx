import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  Table, TableColumn, TableRow, VerticalSpacer, FloatRight,
} from '@fpsak-frontend/shared-components';
import { calcDaysAndWeeks, DDMMYYYY_DATE_FORMAT, getKodeverknavnFn } from '@fpsak-frontend/utils';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { uttakPeriodeNavn } from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';
import { TimeLineButton, TimeLineDataContainer } from '@fpsak-frontend/tidslinje';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsresultatPeriodeAndel, Kodeverk, AlleKodeverk,
} from '@fpsak-frontend/types';

import { PeriodeMedId } from './TilkjentYtelse';
import styles from './tilkjentYtelse.less';

const getEndCharFromId = (id: string): string => (id ? `...${id.substring(id.length - 4, id.length)}` : '');

const createVisningNavnForUttakArbeidstaker = (
  andel: BeregningsresultatPeriodeAndel,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger || !arbeidsgiverOpplysninger.navn) {
    return andel.arbeidsforholdType ? getKodeverknavn(andel.arbeidsforholdType) : '';
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
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  switch (andel.aktivitetStatus.kode) {
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
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);

  return (
    <TimeLineDataContainer>
      <Row>
        <Column xs="10">
          <Element>
            <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
          </Element>
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
            <Element>
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
            </Element>
          </Column>
          <div>
            <Column xs="5">
              <Normaltekst>
                <FormattedMessage
                  id={numberOfDaysAndWeeks.id}
                  values={{
                    weeks: numberOfDaysAndWeeks.weeks.toString(),
                    days: numberOfDaysAndWeeks.days.toString(),
                  }}
                />
              </Normaltekst>
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
                    <TableColumn><Normaltekst>{uttakPeriodeNavn[andel.uttak.stonadskontoType]}</Normaltekst></TableColumn>
                  )}
                  {!isSoknadSvangerskapspenger && (
                    <TableColumn><Normaltekst>{getGradering(andel)}</Normaltekst></TableColumn>
                  )}
                  <TableColumn><Normaltekst>{andel.utbetalingsgrad}</Normaltekst></TableColumn>
                  <TableColumn>
                    <Normaltekst>
                      {andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER ? andel.refusjon : ''}
                    </Normaltekst>
                  </TableColumn>
                  <TableColumn><Normaltekst>{andel.tilSoker}</Normaltekst></TableColumn>
                  <TableColumn>
                    <Normaltekst>
                      {andel.sisteUtbetalingsdato ? moment(andel.sisteUtbetalingsdato)
                        .format(DDMMYYYY_DATE_FORMAT) : ''}
                    </Normaltekst>
                  </TableColumn>
                </TableRow>
              ))}
            </Table>
          )}
    </TimeLineDataContainer>
  );
};

export default TilkjentYtelseTimeLineData;
