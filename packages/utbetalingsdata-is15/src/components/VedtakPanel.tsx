import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Table, VStack } from '@navikt/ds-react';
import { DateLabel, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import type { Vedtak } from '@navikt/fp-types';

import { VedtakDetaljerPanel } from './detaljer/VedtakDetaljerPanel';

interface Props {
  alleVedtak: Vedtak[];
  erForeldrepenger: boolean;
}

export const VedtakPanel = ({ alleVedtak, erForeldrepenger }: Props) => {
  const [valgtVedtak, setValgtVedtak] = useState<Vedtak>();

  return (
    <VStack gap="10">
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Identdato" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Dekningsgrad" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Periode" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.Arbeidskategori" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">
              <FormattedMessage id="VedtakPanel.OpphorFom" />
            </Table.HeaderCell>
            {erForeldrepenger && (
              <>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="VedtakPanel.FødselsdatoBarn" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="VedtakPanel.Gradering" />
                </Table.HeaderCell>
              </>
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {alleVedtak.map(vedtak => (
            <Table.Row
              key={vedtak.identdato}
              onClick={() => setValgtVedtak(vedtak)}
              selected={vedtak.identdato === valgtVedtak?.identdato}
              style={{ cursor: 'pointer' }}
            >
              <Table.DataCell>
                <DateLabel dateString={vedtak.identdato} />
              </Table.DataCell>
              <Table.DataCell>{vedtak.dekningsgrad}</Table.DataCell>
              <Table.DataCell>
                <PeriodLabel dateStringFom={vedtak.periode.fom} dateStringTom={vedtak.periode.tom} />
              </Table.DataCell>
              <Table.DataCell>{vedtak.arbeidskategori?.termnavn}</Table.DataCell>
              <Table.DataCell>{vedtak.opphørFom && <DateLabel dateString={vedtak.opphørFom} />}</Table.DataCell>
              {erForeldrepenger && (
                <>
                  <Table.DataCell>
                    {vedtak.fødselsdatoBarn && <DateLabel dateString={vedtak.fødselsdatoBarn} />}
                  </Table.DataCell>
                  <Table.DataCell>{vedtak.gradering}</Table.DataCell>
                </>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {valgtVedtak && <VedtakDetaljerPanel key={valgtVedtak.identdato} vedtak={valgtVedtak} />}
      <VerticalSpacer thirtyTwoPx />
    </VStack>
  );
};
