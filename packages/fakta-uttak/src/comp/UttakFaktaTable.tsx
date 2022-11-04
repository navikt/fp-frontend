import React, {
  useCallback, FunctionComponent, useRef, useState, useEffect,
} from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Table, ExpandableTableRow, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import { UttakKontrollerFaktaPerioder } from '@fpsak-frontend/types';
import oppholdArsakType from '@fpsak-frontend/kodeverk/src/oppholdArsakType';

import UttakFaktaDetailForm from './UttakFaktaDetailForm';

const HEADER_TEXT_CODES = [
  'UttakFaktaTable.Periode',
  'UttakFaktaTable.AntallDager',
  'UttakFaktaTable.Stonadskonto',
  'UttakFaktaTable.Kilde',
  'EMPTY',
];

const getTextId = (weeks?: number, days?: number): string => {
  let id = 'UttakFaktaTable.AntallFlereDagerOgFlereUker';
  if (weeks === undefined && days === undefined) {
    id = 'UttakFaktaTable.TidenesEnde';
  }
  if (days === 0) {
    id = weeks === 1 ? 'UttakFaktaTable.AntallNullDagerOgEnUke' : 'UttakFaktaTable.AntallNullDagerOgFlereUker';
  }
  if (weeks === 0) {
    id = days === 1 ? 'UttakFaktaTable.AntallEnDagOgNullUker' : 'UttakFaktaTable.AntallFlereDagerOgNullUker';
  }
  if (days === 1) {
    id = weeks === 1 ? 'UttakFaktaTable.AntallEnDagOgEnUke' : 'UttakFaktaTable.AntallEnDagOgFlereUker';
  }
  if (weeks === 1) {
    id = 'UttakFaktaTable.AntallFlereDagerOgEnUke';
  }
  return id;
};

const getUttakPeriode = (
  alleKodeverk: AlleKodeverk,
  uttakPeriodeType: string,
  oppholdArsak?: string,
): string => (oppholdArsak === oppholdArsakType.UDEFINERT
  ? alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE].find((k) => k.kode === uttakPeriodeType)?.navn
  : alleKodeverk[KodeverkType.OPPHOLD_ARSAK].find((k) => k.kode === KodeverkType.MORS_AKTIVITET)?.navn);

interface OwnProps {
  uttakKontrollerFaktaPerioder: UttakKontrollerFaktaPerioder[];
  oppdaterUttakPerioder: (perioder: UttakKontrollerFaktaPerioder[]) => void;
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  erRedigerbart: boolean;
}

const UttakFaktaTable: FunctionComponent<OwnProps> = ({
  uttakKontrollerFaktaPerioder,
  oppdaterUttakPerioder,
  alleKodeverk,
  readOnly,
  setDirty,
  erRedigerbart,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [valgteFomDatoer, setValgteFomDatoer] = useState<string[]>([]);

  const velgPeriodeFomDato = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgteFomDatoer.includes(fom)) {
      setValgteFomDatoer((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setValgteFomDatoer((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
    tableRef?.current?.scrollIntoView();
  }, [valgteFomDatoer, setValgteFomDatoer]);

  useEffect(() => velgPeriodeFomDato(uttakKontrollerFaktaPerioder?.find((oa) => !oa.bekreftet)?.fom), []);

  const oppdaterPerioder = useCallback((uPerioder: { perioder: UttakKontrollerFaktaPerioder[] }) => {
    const { perioder } = uPerioder;
    const oppdatertePerioder = uttakKontrollerFaktaPerioder
      .filter((p) => p.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(oppdatertePerioder.find((oa) => !oa.bekreftet)?.fom, true);
    setDirty(true);
  }, [uttakKontrollerFaktaPerioder]);

  const slettPeriode = useCallback((fom: string) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder.filter((p) => p.fom !== fom);
    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(oppdatertePerioder.find((oa) => !oa.bekreftet)?.fom, true);
    setDirty(true);
  }, [uttakKontrollerFaktaPerioder]);

  return (
    <Table
      ref={tableRef}
      headerTextCodes={erRedigerbart ? HEADER_TEXT_CODES : HEADER_TEXT_CODES.filter((h) => h !== 'EMPTY')}
      noHover
      hasGrayHeader
    >
      {uttakKontrollerFaktaPerioder.map((periode) => {
        const numberOfDaysAndWeeks = calcDaysAndWeeks(periode.fom, periode.tom);

        const kolonner = (
          <>
            <TableColumn>{`${dateFormat(periode.fom)} - ${dateFormat(periode.tom)}`}</TableColumn>
            <TableColumn>
              <FormattedMessage
                id={getTextId(numberOfDaysAndWeeks.weeks, numberOfDaysAndWeeks.days)}
                values={{
                  weeks: numberOfDaysAndWeeks.weeks,
                  days: numberOfDaysAndWeeks.days,
                }}
              />
            </TableColumn>
            <TableColumn>{getUttakPeriode(alleKodeverk, periode.uttakPeriodeType, periode.oppholdÅrsak)}</TableColumn>
            <TableColumn><FormattedMessage id={periode.begrunnelse ? 'UttakFaktaTable.Redigert' : 'UttakFaktaTable.FraSøknad'} /></TableColumn>
          </>
        );

        if (!erRedigerbart) {
          return (
            <TableRow>
              {kolonner}
            </TableRow>
          );
        }

        return (
          <ExpandableTableRow
            key={periode.fom + periode.tom}
            isApLeftBorder={periode.bekreftet === false}
            showContent={valgteFomDatoer.includes(periode.fom)}
            toggleContent={() => velgPeriodeFomDato(periode.fom)}
            content={valgteFomDatoer.includes(periode.fom) && (
              <UttakFaktaDetailForm
                valgtPeriode={periode}
                readOnly={readOnly}
                oppdaterPerioder={oppdaterPerioder}
                slettPeriode={() => slettPeriode(periode.fom)}
                avbrytEditering={() => velgPeriodeFomDato(periode.fom)}
              />
            )}
          >
            {kolonner}
          </ExpandableTableRow>
        );
      })}
    </Table>
  );
};

export default UttakFaktaTable;
