import { FormattedMessage } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Label, Table } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { LosUrl, slettGruppe } from '../data/fplosAvdelingslederApi';
import type { SaksbehandlereOgSaksbehandlerGrupper } from '../typer/saksbehandlereOgSaksbehandlerGrupper';
import { GruppeSaksbehandlere } from './GruppeSaksbehandlere';

interface Props {
  valgAvdeldingEnhet: string;
  grupper: SaksbehandlereOgSaksbehandlerGrupper;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

export const GrupperTabell = ({ valgAvdeldingEnhet, grupper, avdelingensSaksbehandlere }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: fjernGruppe } = useMutation({
    mutationFn: (valuesToStore: { gruppeId: number }) => slettGruppe(valuesToStore.gruppeId, valgAvdeldingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.HENT_GRUPPER],
      });
    },
  });

  return (
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
                <FormattedMessage id="Label.Navn" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Label.AntallSaksbehandlere" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Label.Slett" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {grupper.saksbehandlerGrupper.map(saksbehandlerGruppe => (
              <Table.ExpandableRow
                key={saksbehandlerGruppe.gruppeId}
                expandOnRowClick
                content={
                  <GruppeSaksbehandlere
                    valgAvdeldingEnhet={valgAvdeldingEnhet}
                    saksbehandlerGruppe={saksbehandlerGruppe}
                    avdelingensSaksbehandlere={avdelingensSaksbehandlere}
                  />
                }
              >
                <Table.DataCell scope="row">{saksbehandlerGruppe.gruppeId}</Table.DataCell>
                <Table.DataCell>{saksbehandlerGruppe.gruppeNavn ?? '-'}</Table.DataCell>
                <Table.DataCell>{saksbehandlerGruppe.saksbehandlere.length}</Table.DataCell>
                <Table.DataCell>
                  <Button
                    variant="tertiary"
                    data-color="danger"
                    size="small"
                    icon={<XMarkIcon title={`Slett ${saksbehandlerGruppe.gruppeNavn}`} />}
                    onClick={() => fjernGruppe({ gruppeId: saksbehandlerGruppe.gruppeId })}
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
};
