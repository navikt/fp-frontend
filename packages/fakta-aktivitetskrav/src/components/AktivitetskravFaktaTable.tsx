import React, {
  FunctionComponent, useCallback, useEffect, useState, useRef,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { dateFormat } from '@navikt/ft-utils';
import { SuccessStroke, Error, FileError } from '@navikt/ds-icons';
import { ExpandableTableRow, Table, TableColumn } from '@navikt/ft-ui-komponenter';

import { KodeverkMedNavn, Aktivitetskrav } from '@fpsak-frontend/types';

import AktivitetskravFaktaDetailForm from './AktivitetskravFaktaDetailForm';

import styles from './aktivitetskravFaktaForm.less';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaTabell.Periode',
  'AktivitetskravFaktaTabell.AvklaringBehov',
  'AktivitetskravFaktaTabell.Arsak',
  'AktivitetskravFaktaTabell.Vurdering',
  'EMPTY1',
];

interface PureOwnProps {
  aktivitetskrav: Aktivitetskrav[];
  oppdaterAktivitetskrav: (aktivitetskrav: Aktivitetskrav[]) => void;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
}

const AktivitetskravFaktaTable: FunctionComponent<PureOwnProps> = ({
  aktivitetskrav,
  oppdaterAktivitetskrav,
  aktivitetskravAvklaringer,
  readOnly,
  setDirty,
}) => {
  const tableRef = useRef<HTMLTableElement>(null);

  const [valgtAktivitetskravFomDatoer, setAktivitetskravFomDatoer] = useState<string[]>([]);

  const velgAktivitetskravFomDato = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgtAktivitetskravFomDatoer.includes(fom)) {
      setAktivitetskravFomDatoer((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setAktivitetskravFomDatoer((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
    tableRef?.current?.scrollIntoView();
  }, [valgtAktivitetskravFomDatoer, setAktivitetskravFomDatoer]);

  useEffect(() => velgAktivitetskravFomDato(aktivitetskrav?.find((oa) => !oa.vurdering)?.fom), []);

  const oppdaterPeriode = useCallback((oppdatertKrav: { perioder: Aktivitetskrav[] }) => {
    const { perioder } = oppdatertKrav;
    const oppdaterteAktivitetskrav = aktivitetskrav
      .filter((aKrav) => aKrav.fom !== perioder[0].fom)
      .concat(perioder)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    oppdaterAktivitetskrav(oppdaterteAktivitetskrav);
    velgAktivitetskravFomDato(oppdaterteAktivitetskrav.find((oa) => !oa.vurdering)?.fom, true);
    setDirty(true);
  }, [aktivitetskrav]);

  return (
    <Table ref={tableRef} headerTextCodes={HEADER_TEXT_CODES} noHover hasGrayHeader>
      {aktivitetskrav.map((krav, index) => (
        <ExpandableTableRow
          key={krav.fom + krav.tom}
          isApLeftBorder={!krav.vurdering}
          showContent={valgtAktivitetskravFomDatoer.includes(krav.fom)}
          toggleContent={() => velgAktivitetskravFomDato(krav.fom)}
          content={((valgtAktivitetskravFomDatoer.includes(krav.fom)
            && (
              <AktivitetskravFaktaDetailForm
                key={krav.fom}
                valgtAktivitetskrav={krav}
                readOnly={readOnly}
                aktivitetskravAvklaringer={aktivitetskravAvklaringer}
                oppdaterAktivitetskrav={oppdaterPeriode}
                avbrytEditeringAvAktivitetskrav={() => velgAktivitetskravFomDato(krav.fom)}
              />
            )
          ))}
        >
          <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
          <TableColumn>{krav.behov}</TableColumn>
          <TableColumn>{krav.behovÅrsak}</TableColumn>
          <TableColumn>
            {index === 0 && (
              <>
                <SuccessStroke />
                <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.Godkjent" /></div>
              </>
            )}
            {index === 50 && (
              <>
                <Error />
                <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.IkkeGodkjent" /></div>
              </>
            )}
            {index === 51 && (
              <>
                <FileError />
                <div className={styles.ikon}><FormattedMessage id="AktivitetskravFaktaTabell.ManglerDok" /></div>
              </>
            )}
          </TableColumn>
        </ExpandableTableRow>
      ))}
    </Table>
  );
};

export default AktivitetskravFaktaTable;
