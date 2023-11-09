import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { VStack, ExpansionCard, HStack, Search, Heading } from '@navikt/ds-react';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { isValidFodselsnummer } from '@navikt/ft-utils';
import { InfotrygdVedtak } from '@navikt/fp-types';
import { DateLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakPanel from './VedtakPanel';

import styles from './utbetalingsdataPanel.module.css';

interface OwnProps {
  søkInfotrygdVedtak: (params: { searchString: string }) => Promise<InfotrygdVedtak | undefined>;
  infotrygdVedtakState: RestApiState;
  infotrygdVedtak?: InfotrygdVedtak;
}

const UtbetalingsdataPanel: FunctionComponent<OwnProps> = ({
  søkInfotrygdVedtak,
  infotrygdVedtakState,
  infotrygdVedtak,
}) => {
  const intl = useIntl();

  const [error, setError] = useState<string>();

  const startSøk = useCallback((value: string) => {
    if (value && isValidFodselsnummer(value)) {
      setError(undefined);
      søkInfotrygdVedtak({ searchString: value });
    } else {
      setError(intl.formatMessage({ id: 'UtbetalingsdataPanel.UgyldigFnr' }));
    }
  }, []);

  return (
    <VStack gap="5" className={styles.container}>
      <Heading size="large">
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
        >
          <Search.Button type="button" loading={infotrygdVedtakState === RestApiState.LOADING} />
        </Search>
      </div>
      {infotrygdVedtak && !error && (
        <>
          <VerticalSpacer sixteenPx />
          <Heading size="small">
            <FormattedMessage id="UtbetalingsdataPanel.Resultat" />
          </Heading>
          {Object.values(infotrygdVedtak.vedtakKjedeForIdentdato).map(v => (
            <ExpansionCard size="small" aria-label="default-demo" key={v.opprinneligIdentdato} className={styles.card}>
              <ExpansionCard.Header>
                <ExpansionCard.Title size="small">
                  <HStack gap="5">
                    <DateLabel dateString={v.opprinneligIdentdato} />
                    <div>{v.vedtak[0].behandlingstema.termnavn}</div>
                  </HStack>
                </ExpansionCard.Title>
              </ExpansionCard.Header>
              <ExpansionCard.Content>
                <VedtakPanel alleVedtak={v.vedtak} />
              </ExpansionCard.Content>
            </ExpansionCard>
          ))}
        </>
      )}
    </VStack>
  );
};

export default UtbetalingsdataPanel;
