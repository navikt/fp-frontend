import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Panel, Heading } from '@navikt/ds-react';

import styles from './ikkeTilgangTilKode6AvdelingPanel.less';

/**
 * IkkeTilgangTilKode6AvdelingPanel
 */
const IkkeTilgangTilKode6AvdelingPanel = () => (
  <Panel className={styles.container}>
    <Heading size="small">
      <FormattedMessage id="IkkeTilgangTilKode6AvdelingPanel.HarIkkeTilgang" />
    </Heading>
  </Panel>
);

export default IkkeTilgangTilKode6AvdelingPanel;
