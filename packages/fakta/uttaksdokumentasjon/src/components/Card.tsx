import { type PropsWithChildren } from 'react';

import { Box, HStack, VStack } from '@navikt/ds-react';

const CardWrapper = ({ children }: PropsWithChildren) => <div>{children}</div>;

const CardHeader = ({ children }: PropsWithChildren) => (
  <Box background="neutral-moderate" paddingInline="space-16" paddingBlock="space-8">
    <HStack gap="space-24">{children}</HStack>
  </Box>
);

const CardContent = ({ children }: PropsWithChildren) => (
  <Box background="neutral-soft" paddingInline="space-16" paddingBlock="space-8">
    <VStack gap="space-24">{children}</VStack>
  </Box>
);

type CardProps = typeof CardWrapper & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
};

export const Card = CardWrapper as CardProps;
Card.Header = CardHeader;
Card.Content = CardContent;
