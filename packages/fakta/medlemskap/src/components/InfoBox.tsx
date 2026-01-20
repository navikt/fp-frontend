import type { ComponentType, PropsWithChildren, SVGProps } from 'react';

import { Box, HStack } from '@navikt/ds-react';

type InfoBoxSizeProp = 'small' | 'medium';

export const InfoBox = ({
  Icon,
  size = 'small',
  children,
}: PropsWithChildren<{
  size?: InfoBoxSizeProp;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}>) => {
  return (
    <Box
      background="neutral-soft"
      borderWidth="2"
      borderRadius="large"
      borderColor="neutral"
      paddingInline="space-16"
      paddingBlock={size === 'small' ? '2' : '4'}
    >
      <HStack gap="space-8">
        {Icon && <Icon style={{ height: '25px', width: '25px' }} />}
        {children}
      </HStack>
    </Box>
  );
};
