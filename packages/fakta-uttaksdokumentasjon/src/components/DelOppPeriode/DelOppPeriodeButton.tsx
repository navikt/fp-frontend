import React, { FC } from 'react';
import { Button } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { ScissorsIcon } from '@navikt/aksel-icons';

interface Props {
  onClick: () => void;
  display: boolean;
}

const DelOppPeriodeButton: FC<Props> = ({ onClick, display }: Props) =>
  display ? (
    <Button size="xsmall" variant="secondary" type="button" onClick={onClick} icon={<ScissorsIcon />}>
      <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
    </Button>
  ) : null;

export default DelOppPeriodeButton;
