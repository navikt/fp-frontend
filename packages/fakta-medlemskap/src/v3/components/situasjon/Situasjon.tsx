import { BodyShort, Box, Detail, Label, VStack } from '@navikt/ds-react';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  labelFormatId: `SituasjonLabel.${string}`;
  value: string;
  sourceFormatId: `SituasjonSource.${string}`;
}

const Situasjon: FC<Props> = ({ labelFormatId, value, sourceFormatId }) => {
  return (
    <Box background="bg-subtle" minWidth="200px" paddingBlock="2" paddingInline="4" borderRadius="medium">
      <VStack gap="6">
        <div>
          <Label size="small">
            <FormattedMessage id={labelFormatId} />
          </Label>
          <BodyShort size="large">{value}</BodyShort>
        </div>
        <Detail uppercase>
          <FormattedMessage id={sourceFormatId} />
        </Detail>
      </VStack>
    </Box>
  );
};

export default Situasjon;
