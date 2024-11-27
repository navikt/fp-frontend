import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon, CircleFillIcon, FileXMarkFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';

import { UttakVurdering } from '@navikt/fp-types';

import assertUnreachable from '../../utils/switchCaseUtils';
import IconLabel from '../IconLabel';

interface Props {
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
}

const UttakVurderingStatus: FC<Props> = ({ vurdering, morsStillingsprosent }) => {
  if (!vurdering) {
    return (
      <IconLabel
        icon={<CircleFillIcon color="var(--a-orange-400)" />}
        formattedMessageId="UttakDokumentasjonFaktaTable.TilVurdering"
      />
    );
  }
  switch (vurdering) {
    case UttakVurdering.GODKJENT:
      return (
        <HStack gap="1">
          <CheckmarkCircleFillIcon color="var(--a-icon-success)" />
          {morsStillingsprosent ? (
            <FormattedMessage id="UttakDokumentasjonFaktaTable.GodkjentMedProsent" values={{ morsStillingsprosent }} />
          ) : (
            <FormattedMessage id="UttakDokumentasjonFaktaTable.Godkjent" />
          )}
        </HStack>
      );
    case UttakVurdering.IKKE_GODKJENT:
      return (
        <IconLabel
          icon={<XMarkOctagonFillIcon color="var(--a-icon-danger)" />}
          formattedMessageId="UttakDokumentasjonFaktaTable.IkkeGodkjent"
        />
      );
    case UttakVurdering.IKKE_DOKUMENTERT:
      return (
        <IconLabel
          icon={<FileXMarkFillIcon color="var(--a-icon-subtle)" />}
          formattedMessageId="UttakDokumentasjonFaktaTable.ManglerDok"
        />
      );
    default:
      return assertUnreachable(vurdering);
  }
};
export default UttakVurderingStatus;
