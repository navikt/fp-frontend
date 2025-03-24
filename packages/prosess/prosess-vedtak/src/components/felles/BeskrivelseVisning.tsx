import { BodyShort, VStack } from '@navikt/ds-react';

interface Props {
  header?: string;
  kommentar: string;
}

export const BeskrivelseVisning = ({ header, kommentar }: Props) => {
  return (
    <VStack gap="1">
      {header && <BodyShort size="small">{header}</BodyShort>}
      <BodyShort size="small">{kommentar}</BodyShort>
    </VStack>
  );
};
