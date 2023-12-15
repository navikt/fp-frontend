import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import styles from './collapseButton.module.css';

const buttonText = (showDetails: boolean): string =>
  showDetails ? 'Simulering.headerText.VisFærreDetaljer' : 'Simulering.headerText.VisFlereDetaljer';

interface OwnProps {
  toggleDetails: (id: number) => void;
  showDetails: boolean;
  mottakerIndex: number;
}

const CollapseButton: FunctionComponent<OwnProps> = ({ toggleDetails, showDetails, mottakerIndex }) => (
  <button type="button" className={styles.invisibleButton} onClick={() => toggleDetails(mottakerIndex)}>
    <FormattedMessage id={buttonText(showDetails)} />
    {showDetails ? <ChevronUpIcon /> : <ChevronDownIcon />}
  </button>
);

export default CollapseButton;
