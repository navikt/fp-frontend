import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import type {
  ArbeidsgiverOpplysningerPerId,
  DetaljertSimuleringResultat,
  Mottaker,
  SimuleringResultatPerFagområde,
  SimuleringResultatRad,
} from '@navikt/fp-types';
import { classNames } from '@navikt/fp-utils';

import { CollapseButton } from './CollapseButton';

import styles from './simuleringTable.module.css';

import messages from '../../i18n/nb_NO.json';

const simuleringCodes = {
  DIFFERANSE: 'differanse',
  INNTREKK: 'inntrekk',
  FEILUTBETALING: 'feilutbetaling',
  INNTREKKNESTEMÅNED: 'inntrekkNesteMåned',
  OPPFYLT: 'oppfylt',
  REDUKSJON: 'reduksjon',
};

type Details = {
  id: number;
  show: boolean;
};

interface Props {
  toggleDetails: (id: number) => void;
  showDetails: Details[];
  simuleringResultat: DetaljertSimuleringResultat;
  ingenPerioderMedAvvik: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const erMeldingId = (id: string): id is keyof typeof messages => Object.hasOwn(messages, id);

const Tekst = ({ id }: { id: string }) => (erMeldingId(id) ? <FormattedMessage id={id} /> : id);

type MånedOgÅr = { month: string; månedIndeks: number; year: string };

const MÅNED_IDER = [
  'Simulering.headerText.januar',
  'Simulering.headerText.februar',
  'Simulering.headerText.mars',
  'Simulering.headerText.april',
  'Simulering.headerText.mai',
  'Simulering.headerText.juni',
  'Simulering.headerText.juli',
  'Simulering.headerText.august',
  'Simulering.headerText.september',
  'Simulering.headerText.oktober',
  'Simulering.headerText.november',
  'Simulering.headerText.desember',
] as const;

export const SimuleringTable = ({
  simuleringResultat,
  toggleDetails,
  showDetails,
  ingenPerioderMedAvvik,
  arbeidsgiverOpplysningerPerId,
}: Props) => (
  <>
    {simuleringResultat.perioderPerMottaker.map((mottaker, mottakerIndex) => {
      const rangeOfMonths = getPeriod(ingenPerioderMedAvvik, simuleringResultat.periode.fom, mottaker);
      const nesteMåned = mottaker.nesteUtbPeriode.tom;
      const visDetaljer = showDetails.find(d => d.id === mottakerIndex);

      const resultatRader = getResultatRadene(
        ingenPerioderMedAvvik,
        mottaker.resultatPerFagområde,
        mottaker.resultatOgMotregningRader,
      );

      return (
        <div className={styles['tableWrapper']} key={`tableIndex${mottakerIndex + 1}`}>
          {tableTitle(mottaker, arbeidsgiverOpplysningerPerId)}
          <Table key={`tableIndex${mottakerIndex + 1}`} className={styles['simuleringTable']}>
            <Table.Header>
              <Table.Row>
                {skalViseCollapseButton(mottaker.resultatPerFagområde) ? (
                  <Table.HeaderCell scope="col">
                    <CollapseButton
                      toggleDetails={toggleDetails}
                      mottakerIndex={mottakerIndex}
                      showDetails={visDetaljer ? visDetaljer.show : false}
                      key={`collapseButton-${rangeOfMonths.length}`}
                    />
                  </Table.HeaderCell>
                ) : (
                  <Table.HeaderCell />
                )}
                {rangeOfMonths.map(monthAndYear => (
                  <Table.HeaderCell
                    scope="col"
                    className={isNextPeriod(monthAndYear, nesteMåned) ? styles['nextPeriod'] : styles['normalPeriod']}
                    key={`${monthAndYear.month}-${monthAndYear.year}`}
                  >
                    <FormattedMessage id={MÅNED_IDER[monthAndYear.månedIndeks]} />
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {mottaker.resultatPerFagområde.map((fagOmråde, fagIndex) =>
                fagOmråde.rader
                  .filter(rad => {
                    const isFeilUtbetalt = rad.feltnavn === simuleringCodes.DIFFERANSE;
                    const isRowToggable = rowToggable(fagOmråde, isFeilUtbetalt);
                    return !rowIsHidden(isRowToggable, visDetaljer ? visDetaljer.show : false);
                  })
                  .map((rad, rowIndex) => {
                    const isFeilUtbetalt = rad.feltnavn === simuleringCodes.DIFFERANSE;
                    const isRowToggable = rowToggable(fagOmråde, isFeilUtbetalt);
                    const borderBottom = isRowToggable
                      ? 'dashed 1px var(--ax-neutral-300)'
                      : 'solid 1px var(--ax-neutral-300)';
                    return (
                      <Table.Row key={`rowIndex${fagIndex + 1}${rowIndex + 1}`}>
                        <Table.DataCell
                          style={
                            isFeilUtbetalt || ingenPerioderMedAvvik
                              ? { fontWeight: 'bold', borderBottom }
                              : { borderBottom }
                          }
                        >
                          <Tekst id={`Simulering.${fagOmråde.fagOmrådeKode}.${rad.feltnavn}`} />
                        </Table.DataCell>
                        {createColumns(rad.resultaterPerMåned, rangeOfMonths, nesteMåned, borderBottom)}
                      </Table.Row>
                    );
                  }),
              )}
              {resultatRader.map((resultat, resultatIndex) => (
                <Table.Row key={`rowIndex${resultatIndex + 1}`}>
                  <Table.DataCell
                    style={resultat.feltnavn === simuleringCodes.INNTREKKNESTEMÅNED ? {} : { fontWeight: 'bold' }}
                  >
                    <Tekst id={`Simulering.${resultat.feltnavn}`} />
                  </Table.DataCell>
                  {createColumns(resultat.resultaterPerMåned, rangeOfMonths, nesteMåned)}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      );
    })}
  </>
);

const isNextPeriod = (monthAndYear: MånedOgÅr, nextPeriod: string): boolean =>
  `${monthAndYear.month}${monthAndYear.year}` === (nextPeriod ? dayjs(nextPeriod).format('MMMMYY') : false);

const skalViseCollapseButton = (mottakerResultatPerFag: SimuleringResultatPerFagområde[]): boolean =>
  mottakerResultatPerFag.some(fag => fag.rader.length > 1);

const rowToggable = (fagOmråde: SimuleringResultatPerFagområde, rowIsFeilUtbetalt: boolean): boolean => {
  const fagHarFeilUtbetaltRad = fagOmråde.rader.some(rad => rad.feltnavn === simuleringCodes.DIFFERANSE);
  return fagHarFeilUtbetaltRad && !rowIsFeilUtbetalt;
};

const rowIsHidden = (isRowToggable: boolean, showDetails: boolean): boolean => isRowToggable && !showDetails;

const createColumns = (
  perioder: SimuleringResultatRad['resultaterPerMåned'],
  rangeOfMonths: MånedOgÅr[],
  nextPeriod: string,
  borderBottom?: string,
): ReactElement[] => {
  const nextPeriodFormatted = dayjs(nextPeriod).format('MMMMYY');

  const perioderData = rangeOfMonths.map(monthAndYear => {
    const periodeExists = perioder.find(
      periode =>
        dayjs(periode.periode.tom).format('MMMMYY').toLowerCase() === `${monthAndYear.month}${monthAndYear.year}`,
    );
    return periodeExists || { måned: `${monthAndYear.month}${monthAndYear.year}`, beløp: null };
  });

  return perioderData.map((måned, månedIndex) => (
    <Table.DataCell
      key={`columnIndex${månedIndex + 1}`}
      style={{ borderBottom }}
      className={classNames(
        (!måned.beløp || måned.beløp < 0) && styles['rodTekst'],
        ('måned' in måned
          ? måned.måned === nextPeriodFormatted
          : dayjs(måned.periode.tom).format('MMMMYY') === nextPeriodFormatted) && styles['lastColumn'],
      )}
    >
      <BeløpLabel beløp={måned.beløp} />
    </Table.DataCell>
  ));
};

const lagVisningsNavn = (mottaker: Mottaker, arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId): string => {
  const agOpplysning = mottaker.mottakerIdentifikator
    ? arbeidsgiverOpplysninger[mottaker.mottakerIdentifikator]
    : undefined;
  return agOpplysning ? `${agOpplysning.navn} (${mottaker.mottakerNummer})` : mottaker.mottakerNummer;
};

const tableTitle = (
  mottaker: Mottaker,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | null =>
  mottaker.mottakerType === 'ARBG_ORG' || mottaker.mottakerType === 'ARBG_PRIV' ? (
    <Heading size="xsmall" level="3">
      {lagVisningsNavn(mottaker, arbeidsgiverOpplysningerPerId)}
    </Heading>
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
    ? resultatOgMotregningRader.filter(resultat => resultat.feltnavn !== simuleringCodes.INNTREKKNESTEMÅNED)
    : [];
};

const avvikBruker = (ingenPerioderMedAvvik: boolean, mottakerTypeKode: Mottaker['mottakerType']): boolean =>
  !!(ingenPerioderMedAvvik && mottakerTypeKode === 'BRUKER');

const getPeriodeFom = (periodeFom: string, nesteUtbPeriodeFom: string): string => periodeFom || nesteUtbPeriodeFom;

const getPeriod = (ingenPerioderMedAvvik: boolean, periodeFom: string, mottaker: Mottaker): MånedOgÅr[] => {
  const fomDato = avvikBruker(ingenPerioderMedAvvik, mottaker.mottakerType)
    ? dayjs(mottaker.nesteUtbPeriode.tom).subtract(1, 'months').format()
    : getPeriodeFom(periodeFom, mottaker.nesteUtbPeriode.fom);
  return getRangeOfMonths(fomDato, mottaker.nesteUtbPeriode.tom);
};

const getRangeOfMonths = (fom: string, tom: string): MånedOgÅr[] => {
  const fraMåned = dayjs(fom).startOf('month');
  const tilMåned = dayjs(tom).startOf('month');
  let currentMonth = fraMåned;
  const range = [
    {
      month: currentMonth.format('MMMM'),
      månedIndeks: currentMonth.month(),
      year: currentMonth.format('YY'),
    },
  ];

  while (currentMonth.isBefore(tilMåned)) {
    currentMonth = currentMonth.add(1, 'month');
    range.push({
      month: currentMonth.format('MMMM'),
      månedIndeks: currentMonth.month(),
      year: currentMonth.format('YY'),
    });
  }

  return range;
};
