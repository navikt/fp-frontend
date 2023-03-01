import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, Panel } from '@navikt/ds-react';

import styles from './ikkeTilgangTilAvdelingslederPanel.module.css';

/**
 * IkkeTilgangTilAvdelingslederPanel
 */
const IkkeTilgangTilAvdelingslederPanel = () => (
  <Panel className={styles.container}>
    <Heading size="small">
      <FormattedMessage id="IkkeTilgangTilAvdelingslederPanel.HarIkkeTilgang" />
    </Heading>
  </Panel>
);

export default IkkeTilgangTilAvdelingslederPanel;
