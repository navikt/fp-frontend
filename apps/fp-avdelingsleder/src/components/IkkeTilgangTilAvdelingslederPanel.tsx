import { FormattedMessage } from 'react-intl';

import { Box, Heading } from '@navikt/ds-react';

import styles from './ikkeTilgangTilAvdelingslederPanel.module.css';

export const IkkeTilgangTilAvdelingslederPanel = () => (
  <Box className={styles['container']}>
    <Heading size="small" level="2">
      <FormattedMessage id="IkkeTilgangTilAvdelingslederPanel.HarIkkeTilgang" />
    </Heading>
  </Box>
);
