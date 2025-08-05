import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon, CircleFillIcon, FileXMarkFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { assertUnreachable } from '@navikt/ft-utils';

import { UttakVurdering } from '@navikt/fp-types';

import { IconLabel } from '../IconLabel';

interface Props {
  vurdering?: UttakVurdering | null;
  morsStillingsprosent?: number;
}

export const UttakVurderingStatus = ({ vurdering, morsStillingsprosent }: Props) => {
  if (!vurdering) {
    return (
      <IconLabel
        icon={<CircleFillIcon color="var(--ax-warning-500)" />}
        formattedMessageId="UttakDokumentasjonFaktaTable.TilVurdering"
      />
    );
  }
  switch (vurdering) {
    case UttakVurdering.GODKJENT:
      return (
        <HStack gap="space-4">
          <CheckmarkCircleFillIcon color="var(--ax-text-success-decoration)" />
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
          icon={<XMarkOctagonFillIcon color="var(--ax-text-danger-decoration)" />}
          formattedMessageId="UttakDokumentasjonFaktaTable.IkkeGodkjent"
        />
      );
    case UttakVurdering.IKKE_DOKUMENTERT:
      return (
        <IconLabel
          icon={<FileXMarkFillIcon color="var(--ax-text-neutral-subtle)" />}
          formattedMessageId="UttakDokumentasjonFaktaTable.ManglerDok"
        />
      );
    case UttakVurdering.GODKJENT_AUTOMATISK:
      return (
        <IconLabel
          icon={<CheckmarkCircleFillIcon color="var(--ax-text-success-decoration)" />}
          formattedMessageId="UttakDokumentasjonFaktaTable.GodkjentAutomatisk"
        />
      );
    default:
      return assertUnreachable(vurdering);
  }
};
