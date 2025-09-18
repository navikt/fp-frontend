import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import styles from './collapseButton.module.css';

const buttonText = (showDetails: boolean): string =>
  showDetails ? 'Simulering.headerText.VisFærreDetaljer' : 'Simulering.headerText.VisFlereDetaljer';

interface Props {
  toggleDetails: (id: number) => void;
  showDetails: boolean;
  mottakerIndex: number;
}

export const CollapseButton = ({ toggleDetails, showDetails, mottakerIndex }: Props) => (
  <button type="button" className={styles['invisibleButton']} onClick={() => toggleDetails(mottakerIndex)}>
    <FormattedMessage id={buttonText(showDetails)} />
    {showDetails ? <ChevronUpIcon /> : <ChevronDownIcon />}
  </button>
);
