import React from 'react';
import { Button } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { ScissorsIcon } from '@navikt/aksel-icons';

const DelOppPeriodeButton = ({ onClick }: { onClick: () => void }) => (
  <Button size="xsmall" variant="secondary" type="button" onClick={onClick} icon={<ScissorsIcon />}>
    <FormattedMessage id="UttakDokumentasjonFaktaDetailForm.DelOppPeriode" />
  </Button>
);
export default DelOppPeriodeButton;
