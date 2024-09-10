import { BodyShort, Box, Detail, Label, VStack } from '@navikt/ds-react';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { FaktaKilde, getFormateringsIdForKilde } from '../../faktaKilde';

interface Props {
  labelFormatId: `SituasjonLabel.${string}`;
  value: string;
  kilde: FaktaKilde;
}

const Situasjon: FC<Props> = ({ labelFormatId, value, kilde }) => {
  return (
    <Box background="bg-subtle" flexGrow="1" paddingBlock="2" paddingInline="4" borderRadius="medium">
      <VStack gap="6">
        <div>
          <Label size="small">
            <FormattedMessage id={labelFormatId} />
          </Label>
          <BodyShort size="large">{value}</BodyShort>
        </div>
        <Detail uppercase>
          <FormattedMessage id={getFormateringsIdForKilde(kilde)} />
        </Detail>
      </VStack>
    </Box>
  );
};

export default Situasjon;
