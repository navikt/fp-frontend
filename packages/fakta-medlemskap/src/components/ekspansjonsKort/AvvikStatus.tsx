import { CircleFillIcon } from '@navikt/aksel-icons';

export const AvvikStatus = ({ harAvvik }: { harAvvik: boolean }) => (
  <CircleFillIcon fontSize="24" color={harAvvik ? 'var(--a-orange-400)' : 'var(--a-gray-200)'} />
);
