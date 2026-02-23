import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Table, VStack } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerDto } from '@navikt/fp-types';

import { LosUrl, slettSaksbehandler } from '../data/fplosAvdelingslederApi';
import { SletteSaksbehandlerModal } from './SletteSaksbehandlerModal';

interface Props {
  saksbehandlere: SaksbehandlerDto[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlereTabell = ({ saksbehandlere, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();
  const intl = useIntl();
  const [valgtSaksbehandler, setValgtSaksbehandler] = useState<SaksbehandlerDto>();

  const { mutate: fjernSaksbehandler } = useMutation({
    mutationFn: (valuesToStore: SaksbehandlerDto) => slettSaksbehandler(valuesToStore.brukerIdent, valgtAvdelingEnhet),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING],
      });
      setValgtSaksbehandler(undefined);
    },
  });

  const sorterteSaksbehandlere = saksbehandlere.toSorted((saksbehandler1, saksbehandler2) => {
    const compareWithUndefinedLast = (a: string | undefined, b: string | undefined) => {
      if (a != undefined && b != undefined) return a.localeCompare(b);
      if (a == undefined && b == undefined) return 0;
      return a == undefined ? 1 : -1;
    };

    const enhetComparison = compareWithUndefinedLast(saksbehandler1.ansattAvdeling, saksbehandler2.ansattAvdeling);
    if (enhetComparison !== 0) {
      return enhetComparison;
    }
    return compareWithUndefinedLast(saksbehandler1.navn, saksbehandler2.navn);
  });

  return (
    <VStack gap="space-8">
      {sorterteSaksbehandlere.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="SaksbehandlereTabell.IngenSaksbehandlere" />
        </BodyShort>
      )}
      {sorterteSaksbehandlere.length > 0 && (
        <Table zebraStripes size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Label.Navn" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="Label.Brukerident" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.AnsattVed" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" align="right">
                <FormattedMessage id="Label.Slett" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorterteSaksbehandlere.map(saksbehandler => (
              <Table.Row key={saksbehandler.brukerIdent}>
                <Table.DataCell scope="row">{saksbehandler.navn}</Table.DataCell>
                <Table.DataCell>{saksbehandler.brukerIdent}</Table.DataCell>
                <Table.DataCell>{saksbehandler.ansattAvdeling}</Table.DataCell>
                <Table.DataCell align="right">
                  <Button
                    variant="tertiary"
                    data-color="danger"
                    size="small"
                    title={intl.formatMessage(
                      { id: 'SaksbehandlereTabell.SlettSaksbehandler' },
                      { navn: saksbehandler.navn },
                    )}
                    icon={<XMarkIcon aria-hidden />}
                    onClick={() => setValgtSaksbehandler(saksbehandler)}
                  />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {valgtSaksbehandler && (
        <SletteSaksbehandlerModal
          valgtSaksbehandler={valgtSaksbehandler}
          closeSletteModal={() => setValgtSaksbehandler(undefined)}
          fjernSaksbehandler={fjernSaksbehandler}
        />
      )}
    </VStack>
  );
};
