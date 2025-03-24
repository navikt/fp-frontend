import { BodyShort } from '@navikt/ds-react';

interface Props {
  header?: string;
  kommentar: string;
}

export const BeskrivelseVisning = ({ header, kommentar }: Props) => {
  return (
    <div>
      {header && <BodyShort size="small">{header}</BodyShort>}
      <BodyShort size="small">{kommentar}</BodyShort>
    </div>
  );
};
