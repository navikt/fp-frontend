import { Box, HStack } from '@navikt/ds-react';
import React, { ComponentType, PropsWithChildren, SVGProps } from 'react';

type InfoBoxSizeProp = 'small' | 'medium';

const InfoBox = ({
  Icon,
  size = 'small',
  children,
}: PropsWithChildren<{
  size?: InfoBoxSizeProp;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}>) => {
  return (
    <Box
      background="surface-subtle"
      borderWidth="2"
      borderRadius="large"
      borderColor="border-divider"
      paddingInline="4"
      paddingBlock={size === 'small' ? '2' : '4'}
    >
      <HStack gap="2">
        {Icon && <Icon style={{ height: '25px', width: '25px' }} />}
        {children}
      </HStack>
    </Box>
  );
};

export default InfoBox;
