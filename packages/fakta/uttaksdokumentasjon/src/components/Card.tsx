import { type PropsWithChildren } from 'react';

import { Box, HStack, VStack } from '@navikt/ds-react';

const CardWrapper = ({ children }: PropsWithChildren) => <div>{children}</div>;

const CardHeader = ({ children }: PropsWithChildren) => (
  <Box.New background="neutral-moderate" paddingInline="4" paddingBlock="2">
    <HStack gap="space-24">{children}</HStack>
  </Box.New>
);

const CardContent = ({ children }: PropsWithChildren) => (
  <Box.New background="neutral-soft" paddingInline="4" paddingBlock="2">
    <VStack gap="space-24">{children}</VStack>
  </Box.New>
);

type CardProps = typeof CardWrapper & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
};

export const Card = CardWrapper as CardProps;
Card.Header = CardHeader;
Card.Content = CardContent;
