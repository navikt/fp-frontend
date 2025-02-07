import { FormattedMessage } from 'react-intl';

import { ScissorsIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  onClick: () => void;
  display: boolean;
}

export const DelOppPeriodeButton = ({ onClick, display }: Props) =>
  display ? (
    <Button size="xsmall" variant="secondary" type="button" onClick={onClick} icon={<ScissorsIcon />}>
      <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
    </Button>
  ) : null;
