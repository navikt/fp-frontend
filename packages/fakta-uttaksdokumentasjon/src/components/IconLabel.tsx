import { BodyShort, HStack } from '@navikt/ds-react';
import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

interface IconLabelProps {
  icon: React.ReactElement;
  formattedMessageId: string;
}

const IconLabel: FC<IconLabelProps> = ({ icon, formattedMessageId }) => (
  <HStack gap="1">
    <div style={{ marginTop: 2 }}>{icon}</div>
    <BodyShort
      style={{
        flex: 1,
        display: 'inline',
        wordBreak: 'break-word',
      }}
    >
      <FormattedMessage id={formattedMessageId} />
    </BodyShort>
  </HStack>
);

export default IconLabel;
