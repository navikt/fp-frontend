import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Expand, Collapse } from '@navikt/ds-icons';

import styles from './collapseButton.less';

const buttonText = (showDetails: boolean): string => (showDetails ? 'Avregning.headerText.VisFærreDetaljer' : 'Avregning.headerText.VisFlereDetaljer');

interface OwnProps {
  toggleDetails: (id: number) => void;
  showDetails: boolean;
  mottakerIndex: number;
}

const CollapseButton: FunctionComponent<OwnProps> = ({
  toggleDetails,
  showDetails,
  mottakerIndex,
}) => (
  <button type="button" className={styles.invisibleButton} onClick={() => toggleDetails(mottakerIndex)}>
    <FormattedMessage id={buttonText(showDetails)} />
    {showDetails ? <Collapse /> : <Expand />}
  </button>
);

export default CollapseButton;
