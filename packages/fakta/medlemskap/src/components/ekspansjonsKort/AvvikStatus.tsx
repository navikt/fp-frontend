import { CircleFillIcon } from '@navikt/aksel-icons';

export const AvvikStatus = ({ harAvvik }: { harAvvik: boolean }) => (
  <CircleFillIcon fontSize="24" color={harAvvik ? 'var(--ax-warning-500)' : 'var(--ax-neutral-300)'} />
);
