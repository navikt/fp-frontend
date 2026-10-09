import { PencilFillIcon, PencilIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  label: string;
  onClick: () => void;
  erAktiv?: boolean;
}

export const RedigerKnapp = ({ label, onClick, erAktiv = false }: Props) => (
  <Button
    variant={erAktiv ? 'tertiary-neutral' : 'tertiary'}
    size="small"
    type="button"
    title={label}
    aria-label={label}
    disabled={erAktiv}
    onClick={onClick}
    icon={erAktiv ? <PencilFillIcon aria-hidden fontSize="1.25rem" /> : <PencilIcon aria-hidden fontSize="1.25rem" />}
  />
);
