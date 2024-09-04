import React from 'react';
import { CircleFillIcon } from '@navikt/aksel-icons';

const Status = ({ harAvvik }: { harAvvik: boolean }) => (
  <CircleFillIcon fontSize="24" color={harAvvik ? 'var(--a-orange-400)' : 'var(--a-gray-200)'} />
);

export default Status;
