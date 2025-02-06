import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack } from '@navikt/ds-react';

interface IconLabelProps {
  icon: React.ReactElement;
  formattedMessageId: string;
}

export const IconLabel = ({ icon, formattedMessageId }: IconLabelProps) => (
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
