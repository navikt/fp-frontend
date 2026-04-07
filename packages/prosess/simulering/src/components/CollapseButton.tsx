import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  toggleDetails: (id: number) => void;
  showDetails: boolean;
  mottakerIndex: number;
}

export const CollapseButton = ({ toggleDetails, showDetails, mottakerIndex }: Props) => (
  <Button
    type="button"
    size="small"
    variant="tertiary"
    icon={showDetails ? <ChevronUpIcon /> : <ChevronDownIcon />}
    iconPosition="right"
    className="focus:bg-ax-bg-warning-moderate-pressed"
    onClick={() => toggleDetails(mottakerIndex)}
  >
    {showDetails ? (
      <FormattedMessage id="Simulering.headerText.VisFærreDetaljer" />
    ) : (
      <FormattedMessage id="Simulering.headerText.VisFlereDetaljer" />
    )}
  </Button>
);
