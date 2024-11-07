import React from 'react';
import { ChevronRightCircleFillIcon } from '@navikt/aksel-icons';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Heading, VStack, HStack, Table } from '@navikt/ds-react';
import { ClockDashedIcon } from '@navikt/aksel-icons';
import { Oppgave } from '@navikt/fp-los-felles';

import { RestApiPathsKeys, restApiHooks } from '../../data/fplosSaksbehandlerRestApi';

import styles from './sistBehandledeSaker.module.css';

const EMPTY_ARRAY: Oppgave[] = [];

interface Props {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

/**
 * SistBehandledeSaker
 *
 * Denne komponenten viser de siste fagsakene en nav-ansatt har behandlet.
 */
export const SistBehandledeSaker = ({ åpneFagsak }: Props) => {
  const { data: sistBehandledeSaker = EMPTY_ARRAY } = restApiHooks.useRestApi(RestApiPathsKeys.BEHANDLEDE_OPPGAVER);

  return (
    <VStack gap="2">
      <HStack gap="2" align="center">
        <div className={styles.iconBackground}>
          <ClockDashedIcon aria-hidden className={styles.clockIcon} />
        </div>
        <Heading size="xsmall">
          <FormattedMessage id="SistBehandledeSaker.SistBehandledeSaker" />
        </Heading>
      </HStack>
      {sistBehandledeSaker.length === 0 && (
        <div className={styles.ingenBehandlinger}>
          <BodyShort size="medium">
            <FormattedMessage
              id="SistBehandledeSaker.IngenBehandlinger"
              values={{ i: (chunks: any) => <i>{chunks}</i> }}
            />
          </BodyShort>
        </div>
      )}
      {sistBehandledeSaker.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Soker" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Saksnr" />
              </Table.HeaderCell>
              {/* TODO (TOR) Få inn status etter at Steffen har fiksa backend <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Status" />
              </Table.HeaderCell> */}
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sistBehandledeSaker.map(sbs => (
              <Table.Row key={sbs.id} onClick={() => åpneFagsak(sbs.saksnummer.toString(), sbs.behandlingId)}>
                <Table.DataCell scope="row">{sbs.navn}</Table.DataCell>
                <Table.DataCell scope="row">{sbs.saksnummer}</Table.DataCell>
                {/* <Table.DataCell scope="row">
                  {sbs.behandlingStatus
                    ? getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_STATUS, sbs.behandlingStatus)
                    : ''}
                </Table.DataCell> */}
                <Table.DataCell scope="row">
                  <ChevronRightCircleFillIcon aria-hidden className={styles.pointerIcon} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </VStack>
  );
};
