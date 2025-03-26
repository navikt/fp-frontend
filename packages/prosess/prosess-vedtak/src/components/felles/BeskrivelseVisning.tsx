import { BodyShort, VStack } from '@navikt/ds-react';

interface Props {
  header?: string;
  kommentarer: string[];
}

export const BeskrivelseVisning = ({ header, kommentarer }: Props) => {
  return (
    <VStack gap="1">
      {header && <BodyShort size="small">{header}</BodyShort>}
      {kommentarer.map(kommentar => (
        <BodyShort key={kommentar} size="small">
          {kommentar}
        </BodyShort>
      ))}
    </VStack>
  );
};
