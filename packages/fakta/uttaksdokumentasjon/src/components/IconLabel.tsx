import React from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack } from '@navikt/ds-react';

import type messages from '../../i18n/nb_NO.json';

interface IconLabelProps {
  icon: React.ReactElement;
  formattedMessageId: keyof typeof messages;
}

export const IconLabel = ({ icon, formattedMessageId }: IconLabelProps) => (
  <HStack gap="space-4">
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
