import React, { FunctionComponent } from 'react';

import { Table, TableColumn, TableRow } from '@fpsak-frontend/shared-components';
import { KodeverkMedNavn, UttakKontrollerAktivitetskrav } from '@fpsak-frontend/types';
import { dateFormat } from '@fpsak-frontend/utils';

const HEADER_TEXT_CODES = [
  'AktivitetskravFaktaForm.Periode',
  'AktivitetskravFaktaForm.Avklaring',
  'AktivitetskravFaktaForm.Begrunnelse',
];

interface PureOwnProps {
  aktivitetskrav: UttakKontrollerAktivitetskrav[];
  valgtAktivitetskravFom?: string;
  velgAktivitetskrav: (_event: React.MouseEvent | React.KeyboardEvent, _id: string, model: UttakKontrollerAktivitetskrav) => void;
  aktivitetskravAvklaringer: KodeverkMedNavn[];
}

const AktivitetskravFaktaTabell: FunctionComponent<PureOwnProps> = ({
  aktivitetskrav,
  valgtAktivitetskravFom,
  velgAktivitetskrav,
  aktivitetskravAvklaringer,
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
        <TableColumn>{krav.avklaring ? aktivitetskravAvklaringer.find((avklaring) => avklaring.kode === krav.avklaring.kode)?.navn : ''}</TableColumn>
        <TableColumn>{krav.begrunnelse || ''}</TableColumn>
      </TableRow>
    ))}
  </Table>
);

export default AktivitetskravFaktaTabell;
