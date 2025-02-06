import { FormattedMessage } from 'react-intl';

import { ArrowUpIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  onClick: () => void;
  display: boolean;
  disabled: boolean;
}

export const SlåSammenPeriodeButton = ({ onClick, display, disabled }: Props) =>
  display ? (
    <Button
      size="xsmall"
      variant="secondary"
      type="button"
      icon={<ArrowUpIcon aria-hidden />}
      onClick={onClick}
      disabled={disabled}
    >
      <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.SlåSammenPeriode" />
    </Button>
  ) : null;
