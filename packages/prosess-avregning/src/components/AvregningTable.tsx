import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import dayjs from 'dayjs';
import { BodyShort } from '@navikt/ds-react';

import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, getRangeOfMonths } from '@navikt/ft-utils';
import { mottakerTyper } from '@navikt/fp-kodeverk';
import {
  DetaljertSimuleringResultat,
  Mottaker,
  SimuleringResultatPerFagområde,
  SimuleringResultatRad,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import CollapseButton from './CollapseButton';

import styles from './avregningTable.module.css';

const classNames = classnames.bind(styles);

export const avregningCodes = {
  DIFFERANSE: 'differanse',
  INNTREKK: 'inntrekk',
  FEILUTBETALING: 'feilutbetaling',
  INNTREKKNESTEMÅNED: 'inntrekkNesteMåned',
  OPPFYLT: 'oppfylt',
  REDUKSJON: 'reduksjon',
};

const isNextPeriod = (monthAndYear: { month: string; year: string }, nextPeriod: string): boolean =>
  `${monthAndYear.month}${monthAndYear.year}` === (nextPeriod ? dayjs(nextPeriod).format('MMMMYY') : false);

const getHeaderCodes = (
  showCollapseButton: boolean,
  collapseProps: { toggleDetails: (id: number) => void; showDetails: boolean; mottakerIndex: number },
  rangeOfMonths: { month: string; year: string }[],
  nextPeriod: string,
): ReactElement[] => {
  const firstElement = showCollapseButton ? (
    <CollapseButton {...collapseProps} key={`collapseButton-${rangeOfMonths.length}`} />
  ) : (
    <div />
  );
  return [
    firstElement,
    ...rangeOfMonths.map(monthAndYear => (
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

const skalViseCollapseButton = (mottakerResultatPerFag: SimuleringResultatPerFagområde[]): boolean =>
  mottakerResultatPerFag.some(fag => fag.rader.length > 1);

const rowToggable = (fagOmråde: SimuleringResultatPerFagområde, rowIsFeilUtbetalt: boolean): boolean => {
  const fagFeilUtbetalt = fagOmråde.rader.find(rad => rad.feltnavn === avregningCodes.DIFFERANSE);
  return !!fagFeilUtbetalt && !rowIsFeilUtbetalt;
};

const rowIsHidden = (isRowToggable: boolean, showDetails: boolean): boolean => isRowToggable && !showDetails;

const createColumns = (
  perioder: SimuleringResultatRad['resultaterPerMåned'],
  rangeOfMonths: { month: string; year: string }[],
  nextPeriod: string,
): ReactElement[] => {
  const nextPeriodFormatted = `${dayjs(nextPeriod).format('MMMMYY')}`;

  const perioderData = rangeOfMonths.map(monthAndYear => {
    const periodeExists = perioder.find(
      periode =>
        dayjs(periode.periode.tom).format('MMMMYY').toLowerCase() === `${monthAndYear.month}${monthAndYear.year}`,
    );
    return periodeExists || { måned: `${monthAndYear.month}${monthAndYear.year}`, beløp: null };
  });

  return perioderData.map((måned, månedIndex) => (
    <TableColumn
      key={`columnIndex${månedIndex + 1}`}
      className={classNames({
        rodTekst: !måned.beløp || måned.beløp < 0,
        lastColumn:
          'måned' in måned
            ? måned.måned === nextPeriodFormatted
            : dayjs(måned.periode.tom).format('MMMMYY') === nextPeriodFormatted,
      })}
    >
      {måned.beløp ? formatCurrencyNoKr(måned.beløp) : '-'}
    </TableColumn>
  ));
};

const lagVisningsNavn = (mottaker: Mottaker, arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = mottaker.mottakerIdentifikator ? arbeidsgiverOpplysninger[mottaker.mottakerIdentifikator] : undefined;
  return agOpplysning ? `${agOpplysning.navn} (${mottaker.mottakerNummer})` : `${mottaker.mottakerNummer}`;
};

const tableTitle = (mottaker: Mottaker, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): ReactElement | null =>
  mottaker.mottakerType === mottakerTyper.ARBG || mottaker.mottakerType === mottakerTyper.ARBGP ? (
    <BodyShort size="small" className={styles.tableTitle}>
      {lagVisningsNavn(mottaker, arbeidsgiverOpplysningerPerId)}
    </BodyShort>
  ) : null;

const getResultatRadene = (
  ingenPerioderMedAvvik: boolean,
  resultatPerFagområde: SimuleringResultatPerFagområde[],
  resultatOgMotregningRader: Mottaker['resultatOgMotregningRader'],
): Mottaker['resultatOgMotregningRader'] => {
  if (!ingenPerioderMedAvvik) {
    return resultatOgMotregningRader;
  }
  return resultatPerFagområde.length > 1
    ? resultatOgMotregningRader.filter(resultat => resultat.feltnavn !== avregningCodes.INNTREKKNESTEMÅNED)
    : [];
};

const avvikBruker = (ingenPerioderMedAvvik: boolean, mottakerTypeKode: string): boolean =>
  !!(ingenPerioderMedAvvik && mottakerTypeKode === mottakerTyper.BRUKER);

const getPeriodeFom = (periodeFom: string, nesteUtbPeriodeFom: string): string => periodeFom || nesteUtbPeriodeFom;

const getPeriod = (
  ingenPerioderMedAvvik: boolean,
  periodeFom: string,
  mottaker: Mottaker,
): { month: string; year: string }[] => {
  const fomDato = avvikBruker(ingenPerioderMedAvvik, mottaker.mottakerType)
    ? dayjs(mottaker.nesteUtbPeriode.tom).subtract(1, 'months').format()
    : getPeriodeFom(periodeFom, mottaker.nesteUtbPeriode.fom);
  return getRangeOfMonths(fomDato, mottaker.nesteUtbPeriode.tom);
};

type Details = {
  id: number;
  show: boolean;
};

interface OwnProps {
  toggleDetails: (id: number) => void;
  showDetails: Details[];
  simuleringResultat: DetaljertSimuleringResultat;
  ingenPerioderMedAvvik: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const AvregningTable: FunctionComponent<OwnProps> = ({
  simuleringResultat,
  toggleDetails,
  showDetails,
  ingenPerioderMedAvvik,
  arbeidsgiverOpplysningerPerId,
}) => (
  <>
    {simuleringResultat.perioderPerMottaker.map((mottaker, mottakerIndex) => {
      const rangeOfMonths = getPeriod(ingenPerioderMedAvvik, simuleringResultat.periode.fom, mottaker);
      const nesteMåned = mottaker.nesteUtbPeriode.tom;
      const visDetaljer = showDetails.find(d => d.id === mottakerIndex);
      const array = [] as ReactElement[];
      return (
        <div className={styles.tableWrapper} key={`tableIndex${mottakerIndex + 1}`}>
          {tableTitle(mottaker, arbeidsgiverOpplysningerPerId)}
          <Table
            headerColumnContent={getHeaderCodes(
              skalViseCollapseButton(mottaker.resultatPerFagområde),
              { toggleDetails, showDetails: visDetaljer ? visDetaljer.show : false, mottakerIndex },
              rangeOfMonths,
              nesteMåned,
            )}
            key={`tableIndex${mottakerIndex + 1}`}
            classNameTable={styles.simuleringTable}
          >
            {array
              .concat(
                ...mottaker.resultatPerFagområde.map((fagOmråde, fagIndex) =>
                  fagOmråde.rader
                    .filter(rad => {
                      const isFeilUtbetalt = rad.feltnavn === avregningCodes.DIFFERANSE;
                      const isRowToggable = rowToggable(fagOmråde, isFeilUtbetalt);
                      return !rowIsHidden(isRowToggable, visDetaljer ? visDetaljer.show : false);
                    })
                    .map((rad, rowIndex) => {
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
                            <FormattedMessage id={`Avregning.${fagOmråde.fagOmrådeKode}.${rad.feltnavn}`} />
                          </TableColumn>
                          {createColumns(rad.resultaterPerMåned, rangeOfMonths, nesteMåned)}
                        </TableRow>
                      );
                    }),
                ),
              )
              .concat(
                getResultatRadene(
                  ingenPerioderMedAvvik,
                  mottaker.resultatPerFagområde,
                  mottaker.resultatOgMotregningRader,
                ).map((resultat, resultatIndex) => (
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
                )),
              )}
          </Table>
        </div>
      );
    })}
  </>
);

export default AvregningTable;
