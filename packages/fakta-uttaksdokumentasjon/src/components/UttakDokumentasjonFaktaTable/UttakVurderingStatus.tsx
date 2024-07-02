import React, { FC } from 'react';
import { UttakVurdering } from '@navikt/fp-types';
import { FormattedMessage } from 'react-intl';
import { CheckmarkIcon, FileXMarkIcon, XMarkOctagonIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import assertUnreachable from '../../utils/switchCaseUtils';

interface Props {
  vurdering: UttakVurdering;
  morsStillingsprosent?: number;
}

const UttakVurderingStatus: FC<Props> = ({ vurdering, morsStillingsprosent }) => {
  switch (vurdering) {
    case UttakVurdering.GODKJENT:
      if (morsStillingsprosent) {
        return (
          <HStack gap="1">
            <CheckmarkIcon />
            <FormattedMessage id="UttakDokumentasjonFaktaTable.GodkjentMedProsent" values={{ morsStillingsprosent }} />
          </HStack>
        );
      }
      return (
        <HStack gap="1">
          <CheckmarkIcon />
          <FormattedMessage id="UttakDokumentasjonFaktaTable.Godkjent" />
        </HStack>
      );
    case UttakVurdering.IKKE_GODKJENT:
      return (
        <HStack gap="1">
          <XMarkOctagonIcon />
          <FormattedMessage id="UttakDokumentasjonFaktaTable.IkkeGodkjent" />
        </HStack>
      );
    case UttakVurdering.IKKE_DOKUMENTERT:
      return (
        <HStack gap="1">
          <FileXMarkIcon />
          <FormattedMessage id="UttakDokumentasjonFaktaTable.ManglerDok" />
        </HStack>
      );
    default:
      return assertUnreachable(vurdering);
  }
};
export default UttakVurderingStatus;
