import React, { FunctionComponent } from 'react';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { dateFormat } from '@fpsak-frontend/utils';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaTabell.Periode',
  'AktivitetskravFaktaTabell.MorsAktivitet',
  'AktivitetskravFaktaTabell.Avklaring',
];

interface PureOwnProps {
  aktivitetskrav: UttakKontrollerAktivitetskrav[];
  valgtAktivitetskravFom?: string;
  velgAktivitetskrav: (_event: React.MouseEvent | React.KeyboardEvent, _id: string, model: UttakKontrollerAktivitetskrav) => void;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
  morsAktiviteter: KodeverkMedNavn[];
}

const AktivitetskravFaktaTabell: FunctionComponent<PureOwnProps> = ({
  aktivitetskrav,
  valgtAktivitetskravFom,
  velgAktivitetskrav,
  aktivitetskravAvklaringer,
  morsAktiviteter,
}) => (
  <Table headerTextCodes={HEADER_TEXT_CODES}>
    {aktivitetskrav.map((krav) => (
      <TableRow
        key={krav.fom + krav.tom}
        model={krav}
        isSelected={valgtAktivitetskravFom === krav.fom}
        isApLeftBorder={!krav.avklaring}
        onMouseDown={velgAktivitetskrav}
        onKeyDown={velgAktivitetskrav}
      >
        <TableColumn>{`${dateFormat(krav.fom)} - ${dateFormat(krav.tom)}`}</TableColumn>
        <TableColumn>{krav.morsAktivitet ? morsAktiviteter.find((aktivtet) => aktivtet.kode === krav.morsAktivitet.kode)?.navn : ''}</TableColumn>
        <TableColumn>{krav.avklaring ? aktivitetskravAvklaringer.find((avklaring) => avklaring.kode === krav.avklaring.kode)?.navn : ''}</TableColumn>
      </TableRow>
    ))}
  </Table>
);

export default AktivitetskravFaktaTabell;
