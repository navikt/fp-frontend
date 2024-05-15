import { Label, Table } from '@navikt/ds-react';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { XMarkIcon } from '@navikt/aksel-icons';
import SaksbehandlerAvdeling from '../../typer/saksbehandlerAvdelingTsType';
import SaksbehandlereOgSaksbehandlerGrupper from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';
import GruppeSaksbehandlere from './GruppeSaksbehandlere';

interface OwnProps {
  grupper: SaksbehandlereOgSaksbehandlerGrupper;
  avdelingensSaksbehandlere: SaksbehandlerAvdeling[];
  lagreValgtSaksbehandlar: (brukerIdent: string, gruppeId: number, isChecked: boolean) => void;
  endreGruppenavn: (gruppeId: number, gruppeNavn: string) => void;
  slettGruppe: (gruppeId: number) => void;
}

const GrupperTabell: FunctionComponent<OwnProps> = ({
  grupper,
  avdelingensSaksbehandlere,
  lagreValgtSaksbehandlar,
  endreGruppenavn,
  slettGruppe,
}) => (
  <>
    <Label size="small">
      <FormattedMessage id="GrupperTabell.Grupper" />
    </Label>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell scope="col">
            <FormattedMessage id="GrupperTabell.Id" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="GrupperTabell.Navn" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="GrupperTabell.AntallSaksbehandlere" />
          </Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {grupper.saksbehandlerGrupper.map(saksbehandlerGruppe => (
          <Table.ExpandableRow
            key={saksbehandlerGruppe.gruppeId}
            content={
              <GruppeSaksbehandlere
                saksbehandlerGruppe={saksbehandlerGruppe}
                avdelingensSaksbehandlere={avdelingensSaksbehandlere}
                lagreValgtSaksbehandlar={lagreValgtSaksbehandlar}
                endreGruppenavn={endreGruppenavn}
              />
            }
          >
            <Table.DataCell scope="row">{saksbehandlerGruppe.gruppeId}</Table.DataCell>
            <Table.DataCell>{saksbehandlerGruppe.gruppeNavn || '-'}</Table.DataCell>
            <Table.DataCell>{saksbehandlerGruppe.saksbehandlere.length}</Table.DataCell>
            <Table.DataCell>
              <XMarkIcon
                onMouseDown={() => slettGruppe(saksbehandlerGruppe.gruppeId)}
                onKeyDown={() => slettGruppe(saksbehandlerGruppe.gruppeId)}
              />
            </Table.DataCell>
          </Table.ExpandableRow>
        ))}
      </Table.Body>
    </Table>
  </>
);

export default GrupperTabell;
