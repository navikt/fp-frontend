import React from 'react';
import type { UseFieldArrayRemove } from 'react-hook-form';

import { HStack } from '@navikt/ds-react';
import { RhfFieldArrayRemoveButton } from '@navikt/ft-form-hooks';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

import { useReadOnly } from '@navikt/fp-utils';

interface Props {
  children: React.ReactNode;
  remove: UseFieldArrayRemove;
  index: number;
}

export const FieldArrayRow = ({ children, remove, index }: Props) => {
  const readOnly = useReadOnly();
  return (
    <>
      {index > 0 && <AvsnittSkiller spaceUnder spaceAbove />}
      <HStack wrap={false} justify="space-between">
        <HStack wrap gap="space-8" align="start">
          {children}
        </HStack>

        <div>
          <RhfFieldArrayRemoveButton skjul={readOnly} remove={remove} index={index} />
        </div>
      </HStack>
    </>
  );
};
