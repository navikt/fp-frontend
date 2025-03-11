import { type PropsWithChildren } from 'react';

import { Box, HStack, VStack } from '@navikt/ds-react';

const CardWrapper = ({ children }: PropsWithChildren) => <div>{children}</div>;

const CardHeader = ({ children }: PropsWithChildren) => (
  <Box background="surface-neutral-moderate" paddingInline="4" paddingBlock="2">
    <HStack gap="6">{children}</HStack>
  </Box>
);

const CardContent = ({ children }: PropsWithChildren) => (
  <Box background="surface-neutral-subtle" paddingInline="4" paddingBlock="2">
    <VStack gap="6">{children}</VStack>
  </Box>
);

type CardProps = typeof CardWrapper & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
};

export const Card = CardWrapper as CardProps;
Card.Header = CardHeader;
Card.Content = CardContent;
