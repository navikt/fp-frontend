import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import moment from 'moment/moment';
import { Normaltekst } from 'nav-frontend-typografi';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { formatCurrencyNoKr, getRangeOfMonths } from '@fpsak-frontend/utils';
import mottakerTyper from '@fpsak-frontend/kodeverk/src/mottakerTyper';
import {
  DetaljertSimuleringResultat, Mottaker, SimuleringResultatPerFagområde, SimuleringResultatRad,
} from '@fpsak-frontend/types';

import CollapseButton from './CollapseButton';

import styles from './avregningTable.less';

const classNames = classnames.bind(styles);

export const avregningCodes = {
  DIFFERANSE: 'differanse',
  INNTREKK: 'inntrekk',
  FEILUTBETALING: 'feilutbetaling',
  INNTREKKNESTEMÅNED: 'inntrekkNesteMåned',
  OPPFYLT: 'oppfylt',
  REDUKSJON: 'reduksjon',
};

const isNextPeriod = (monthAndYear: { month: string, year: string}, nextPeriod: string) => `${monthAndYear.month}${monthAndYear.year}` === (nextPeriod
  ? moment(nextPeriod).format('MMMMYY') : false);

const getHeaderCodes = (
  showCollapseButton: boolean,
  collapseProps: { toggleDetails: (id: number) => void, showDetails: boolean, mottakerIndex: number },
  rangeOfMonths: { month: string, year: string}[],
  nextPeriod: string,
) => {
  const firstElement = showCollapseButton ? <CollapseButton {...collapseProps} key={`collapseButton-${rangeOfMonths.length}`} /> : <div />;
  return [
    firstElement,
    ...rangeOfMonths.map((monthAndYear) => (
      <span
        className={classNames({
          nextPeriod: isNextPeriod(monthAndYear, nextPeriod),
          normalPeriod: !isNextPeriod(monthAndYear, nextPeriod),
        })}
        key={`${monthAndYear.month}-${monthAndYear.year}`}
      >
        <FormattedMessage id={`Avregning.headerText.${monthAndYear.month}`} />
      </span>
    )),
  ];
};

const showCollapseButton = (mottakerResultatPerFag: SimuleringResultatPerFagområde[]): boolean => mottakerResultatPerFag.some((fag) => fag.rader.length > 1);

const rowToggable = (fagOmråde: SimuleringResultatPerFagområde, rowIsFeilUtbetalt: boolean) => {
  const fagFeilUtbetalt = fagOmråde.rader.find((rad) => rad.feltnavn === avregningCodes.DIFFERANSE);
  return fagFeilUtbetalt && !rowIsFeilUtbetalt;
};

const rowIsHidden = (isRowToggable: boolean, showDetails: boolean) => isRowToggable && !showDetails;

const createColumns = (perioder: SimuleringResultatRad['resultaterPerMåned'], rangeOfMonths: { month: string, year: string}[], nextPeriod: string) => {
  const nextPeriodFormatted = `${moment(nextPeriod).format('MMMMYY')}`;

  const perioderData = rangeOfMonths.map((monthAndYear) => {
    const periodeExists = perioder.find((periode) => moment(periode.periode.tom).format('MMMMYY') === `${monthAndYear.month}${monthAndYear.year}`);
    return periodeExists || { måned: `${monthAndYear.month}${monthAndYear.year}`, beløp: null };
  });

  return perioderData.map((måned: { måned?: string, beløp?: number, periode?: { tom: string } }, månedIndex: number) => (
    <TableColumn
      key={`columnIndex${månedIndex + 1}`}
      className={classNames({
        rodTekst: måned.beløp < 0,
        lastColumn: måned.måned ? måned.måned === nextPeriodFormatted : moment(måned.periode.tom).format('MMMMYY') === nextPeriodFormatted,
      })}
    >
      {formatCurrencyNoKr(måned.beløp)}
    </TableColumn>
  ));
};

const tableTitle = (mottaker: Mottaker) => (mottaker.mottakerType.kode === mottakerTyper.ARBG
  ? (
    <Normaltekst className={styles.tableTitle}>
      {`${mottaker.mottakerNavn} (${mottaker.mottakerNummer})`}
    </Normaltekst>
  )
  : null);

const getResultatRadene = (ingenPerioderMedAvvik: boolean, resultatPerFagområde: SimuleringResultatPerFagområde[],
  resultatOgMotregningRader: Mottaker['resultatOgMotregningRader']): Mottaker['resultatOgMotregningRader'] => {
  if (!ingenPerioderMedAvvik) {
    return resultatOgMotregningRader;
  }
  return resultatPerFagområde.length > 1 ? resultatOgMotregningRader.filter((resultat) => resultat.feltnavn !== avregningCodes.INNTREKKNESTEMÅNED) : [];
};

const avvikBruker = (ingenPerioderMedAvvik: boolean, mottakerTypeKode: string) => (!!(ingenPerioderMedAvvik && mottakerTypeKode === mottakerTyper.BRUKER));

const getPeriodeFom = (periodeFom: string, nesteUtbPeriodeFom: string) => (periodeFom || nesteUtbPeriodeFom);

const getPeriod = (ingenPerioderMedAvvik: boolean, periodeFom: string, mottaker: Mottaker) => {
  const fomDato = avvikBruker(ingenPerioderMedAvvik, mottaker.mottakerType.kode)
    ? moment(mottaker.nestUtbPeriodeTom).subtract(1, 'months').format()
    : getPeriodeFom(periodeFom, mottaker.nesteUtbPeriodeFom);
  return getRangeOfMonths(fomDato, mottaker.nestUtbPeriodeTom);
};

type Details = {
  id: number;
  show: boolean;
}

interface OwnProps {
  toggleDetails: (id: number) => void;
  showDetails: Details[];
  simuleringResultat: DetaljertSimuleringResultat;
  ingenPerioderMedAvvik: boolean;
}

const AvregningTable: FunctionComponent<OwnProps> = ({
  simuleringResultat,
  toggleDetails,
  showDetails,
  ingenPerioderMedAvvik,
}) => (
  <>
    {simuleringResultat.perioderPerMottaker.map((mottaker: Mottaker, mottakerIndex: number) => {
      const rangeOfMonths = getPeriod(ingenPerioderMedAvvik, simuleringResultat.periodeFom, mottaker);
      const nesteMåned = mottaker.nestUtbPeriodeTom;
      const visDetaljer = showDetails.find((d) => d.id === mottakerIndex);
      return (
        <div className={styles.tableWrapper} key={`tableIndex${mottakerIndex + 1}`}>
          { tableTitle(mottaker) }
          <Table
            headerColumnContent={getHeaderCodes(
              showCollapseButton(mottaker.resultatPerFagområde),
              { toggleDetails, showDetails: (visDetaljer ? visDetaljer.show : false), mottakerIndex },
              rangeOfMonths,
              nesteMåned,
            )}
            key={`tableIndex${mottakerIndex + 1}`}
            classNameTable={styles.simuleringTable}
          >
            {[].concat(
              ...mottaker.resultatPerFagområde.map((fagOmråde: SimuleringResultatPerFagområde, fagIndex: number) => fagOmråde.rader
                .filter((rad: SimuleringResultatRad) => {
                  const isFeilUtbetalt = rad.feltnavn === avregningCodes.DIFFERANSE;
                  const isRowToggable = rowToggable(fagOmråde, isFeilUtbetalt);
                  return !rowIsHidden(isRowToggable, visDetaljer ? visDetaljer.show : false);
                })
                .map((rad: SimuleringResultatRad, rowIndex: number) => {
                  const isFeilUtbetalt = rad.feltnavn === avregningCodes.DIFFERANSE;
                  const isRowToggable = rowToggable(fagOmråde, isFeilUtbetalt);
                  return (
                    <TableRow
                      isBold={isFeilUtbetalt || ingenPerioderMedAvvik}
                      isDashedBottomBorder={isRowToggable}
                      isSolidBottomBorder={!isRowToggable}
                      key={`rowIndex${fagIndex + 1}${rowIndex + 1}`}
                    >
                      <TableColumn>
                        <FormattedMessage id={`Avregning.${fagOmråde.fagOmrådeKode.kode}.${rad.feltnavn}`} />
                      </TableColumn>
                      {createColumns(rad.resultaterPerMåned, rangeOfMonths, nesteMåned)}
                    </TableRow>
                  );
                })),
            )
              .concat(getResultatRadene(ingenPerioderMedAvvik, mottaker.resultatPerFagområde, mottaker.resultatOgMotregningRader)
                .map((resultat, resultatIndex: number) => (
                  <TableRow
                    isBold={resultat.feltnavn !== avregningCodes.INNTREKKNESTEMÅNED}
                    isSolidBottomBorder
                    key={`rowIndex${resultatIndex + 1}`}
                  >
                    <TableColumn>
                      <FormattedMessage id={`Avregning.${resultat.feltnavn}`} />
                    </TableColumn>
                    {createColumns(resultat.resultaterPerMåned, rangeOfMonths, nesteMåned)}
                  </TableRow>
                )))}
          </Table>
        </div>
      );
    })}
  </>
);

export default AvregningTable;
