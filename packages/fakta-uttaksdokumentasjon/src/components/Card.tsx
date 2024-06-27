import React, { FC, PropsWithChildren } from 'react';
import { Box, HStack, VStack } from '@navikt/ds-react';

const Card: FC<PropsWithChildren> & {
  Header: FC<CardHeaderProps>;
  Content: FC<CardContentProps>;
} = ({ children }) => <div>{children}</div>;

Card.Header = ({ children }: PropsWithChildren) => (
  <Box background="surface-neutral-moderate" paddingInline="4" paddingBlock="2">
    <HStack gap="6">{children}</HStack>
  </Box>
);

Card.Content = ({ children }: PropsWithChildren) => (
  <Box background="surface-neutral-subtle" paddingInline="4" paddingBlock="2">
    <VStack gap="6">{children}</VStack>
  </Box>
);

export default Card;
