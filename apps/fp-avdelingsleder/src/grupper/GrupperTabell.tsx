import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Label, Table } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { type SaksbehandlereOgSaksbehandlerGrupper, type SaksbehandlerDto } from '@navikt/fp-types';

import { LosUrl, slettGruppe } from '../data/fplosAvdelingslederApi';
import { GruppeSaksbehandlere } from './GruppeSaksbehandlere';

interface Props {
  valgAvdeldingEnhet: string;
  grupper: SaksbehandlereOgSaksbehandlerGrupper;
  avdelingensSaksbehandlere: SaksbehandlerDto[];
}

export const GrupperTabell = ({ valgAvdeldingEnhet, grupper, avdelingensSaksbehandlere }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();

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
              <Table.HeaderCell scope="col" align="right">
                <FormattedMessage id="Label.AntallSaksbehandlere" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" align="right">
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
                <Table.DataCell>{saksbehandlerGruppe.gruppeNavn}</Table.DataCell>
                <Table.DataCell align="right">{saksbehandlerGruppe.saksbehandlere.length}</Table.DataCell>
                <Table.DataCell align="right">
                  <Button
                    variant="tertiary"
                    data-color="danger"
                    size="small"
                    title={intl.formatMessage(
                      { id: 'GrupperTabell.SlettGruppe' },
                      { navn: saksbehandlerGruppe.gruppeNavn },
                    )}
                    icon={<XMarkIcon aria-hidden />}
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
