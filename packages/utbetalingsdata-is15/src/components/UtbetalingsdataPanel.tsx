import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, ExpansionCard, Heading, HStack, Search, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { isValidFodselsnummer } from '@navikt/ft-utils';

import type { InfotrygdVedtak } from '@navikt/fp-types';

import { SakerPanel } from './SakerPanel';
import { VedtakPanel } from './VedtakPanel';

const FORELDREPENGER_KODER = new Set(['AP', 'FØ']);

interface Props {
  søkInfotrygdVedtak: (params: { searchString: string }) => void;
  isPending: boolean;
  isSuccess: boolean;
  infotrygdVedtak?: InfotrygdVedtak;
}

export const UtbetalingsdataPanel = ({ søkInfotrygdVedtak, isPending, isSuccess, infotrygdVedtak }: Props) => {
  const intl = useIntl();

  const [error, setError] = useState<string>();

  const startSøk = (value: string) => {
    if (value && isValidFodselsnummer(value)) {
      setError(undefined);
      søkInfotrygdVedtak({ searchString: value });
    } else {
      setError(intl.formatMessage({ id: 'UtbetalingsdataPanel.UgyldigFnr' }));
    }
  };

  return (
    <VStack gap="space-20" padding="space-40">
      <Heading size="large" level="2">
        <FormattedMessage id="UtbetalingsdataPanel.Heading" />
      </Heading>

      <div>
        <Search
          label={<FormattedMessage id="UtbetalingsdataPanel.Sok" />}
          variant="primary"
          hideLabel={false}
          size="small"
          htmlSize="12"
          error={error}
          onSearchClick={startSøk}
          autoComplete="off"
        >
          <Search.Button type="button" loading={isPending} />
        </Search>
      </div>

      {isSuccess && infotrygdVedtak && !error && (
        <VStack gap="space-16">
          <Heading size="small" level="3">
            <FormattedMessage id="UtbetalingsdataPanel.Resultat" />
          </Heading>
          {infotrygdVedtak.saker.length === 0 && infotrygdVedtak.vedtakKjeder.length === 0 && (
            <BodyShort size="medium" textColor="subtle">
              <FormattedMessage id="UtbetalingsdataPanel.IngenSakerFunnet" />
            </BodyShort>
          )}
          {infotrygdVedtak.saker.length > 0 && (
            <>
              <Heading size="xsmall" level="4">
                <FormattedMessage id="UtbetalingsdataPanel.Saker" />
              </Heading>
              <SakerPanel saker={infotrygdVedtak.saker} />
            </>
          )}
          {infotrygdVedtak.vedtakKjeder.length > 0 && (
            <Heading size="xsmall" level="4">
              <FormattedMessage id="UtbetalingsdataPanel.Utbetalinger" />
            </Heading>
          )}
          {infotrygdVedtak.vedtakKjeder.map(vedtakKjede => (
            <ExpansionCard size="small" aria-label="default-demo" key={vedtakKjede.opprinneligIdentdato}>
              <ExpansionCard.Header>
                <ExpansionCard.Title size="small">
                  <HStack gap="space-20">
                    <DateLabel dateString={vedtakKjede.opprinneligIdentdato} />
                    <div>{vedtakKjede.behandlingstema.termnavn}</div>
                  </HStack>
                </ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <VedtakPanel
                  alleVedtak={vedtakKjede.vedtak}
                  erForeldrepenger={FORELDREPENGER_KODER.has(vedtakKjede.behandlingstema.kode)}
                />
              </ExpansionCard.Content>
            </ExpansionCard>
          ))}
        </VStack>
      )}
    </VStack>
  );
};
