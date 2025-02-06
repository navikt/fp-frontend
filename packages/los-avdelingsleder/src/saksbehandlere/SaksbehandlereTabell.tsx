import { useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import { LosUrl, slettSaksbehandler } from '../data/fplosAvdelingslederApi';
import { SletteSaksbehandlerModal } from './SletteSaksbehandlerModal';

import styles from './saksbehandlereTabell.module.css';

interface Props {
  saksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
}

export const SaksbehandlereTabell = ({ saksbehandlere, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();
  const [valgtSaksbehandler, setValgtSaksbehandler] = useState<SaksbehandlerProfil>();

  const { mutate: fjernSaksbehandler } = useMutation({
    mutationFn: (valuesToStore: SaksbehandlerProfil) =>
      slettSaksbehandler(valuesToStore.brukerIdent, valgtAvdelingEnhet),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING],
      });
      setValgtSaksbehandler(undefined);
    },
  });

  const sorterteSaksbehandlere = useMemo(
    () =>
      saksbehandlere.toSorted((saksbehandler1, saksbehandler2) => {
        const compareWithNullsLast = (a: string | null, b: string | null) => {
          if (a != null && b != null) return a.localeCompare(b);
          if (a == null && b == null) return 0;
          return a == null ? 1 : -1;
        };

        const enhetComparison = compareWithNullsLast(saksbehandler1.ansattAvdeling, saksbehandler2.ansattAvdeling);
        if (enhetComparison !== 0) {
          return enhetComparison;
        }
        return compareWithNullsLast(saksbehandler1.navn, saksbehandler2.navn);
      }),
    [saksbehandlere],
  );

  return (
    <VStack gap="2">
      {sorterteSaksbehandlere.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="SaksbehandlereTabell.IngenSaksbehandlere" />
        </BodyShort>
      )}
      {sorterteSaksbehandlere.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.Navn" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.Brukerident" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SaksbehandlereTabell.AnsattVed" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorterteSaksbehandlere.map(saksbehandler => (
              <Table.Row key={saksbehandler.brukerIdent}>
                <Table.DataCell scope="row">{saksbehandler.navn}</Table.DataCell>
                <Table.DataCell>{saksbehandler.brukerIdent}</Table.DataCell>
                <Table.DataCell>{saksbehandler.ansattAvdeling}</Table.DataCell>
                <Table.DataCell>
                  <XMarkIcon
                    className={styles.removeIcon}
                    onMouseDown={() => setValgtSaksbehandler(saksbehandler)}
                    onKeyDown={() => setValgtSaksbehandler(saksbehandler)}
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
