import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label, Table } from '@navikt/ds-react';
import { XMarkIcon } from '@navikt/aksel-icons';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';
import SaksbehandlereOgSaksbehandlerGrupper from '../../typer/saksbehandlereOgSaksbehandlerGrupper ';
import GruppeSaksbehandlere from './GruppeSaksbehandlere';

import styles from './grupperTabell.module.css';

interface OwnProps {
  grupper: SaksbehandlereOgSaksbehandlerGrupper;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  lagreValgtSaksbehandlar: (brukerIdent: string, gruppeId: number, leggTil: boolean) => void;
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
    {grupper.saksbehandlerGrupper.length > 0 && (
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
          {grupper.saksbehandlerGrupper?.map(saksbehandlerGruppe => (
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
                  className={styles.removeIcon}
                  onMouseDown={() => slettGruppe(saksbehandlerGruppe.gruppeId)}
                  onKeyDown={() => slettGruppe(saksbehandlerGruppe.gruppeId)}
                />
              </Table.DataCell>
            </Table.ExpandableRow>
          ))}
        </Table.Body>
      </Table>
    )}
    {grupper.saksbehandlerGrupper.length === 0 && (
      <BodyShort>
        <FormattedMessage id="GrupperTabell.IngenGrupper" />
      </BodyShort>
    )}
  </>
);

export default GrupperTabell;
