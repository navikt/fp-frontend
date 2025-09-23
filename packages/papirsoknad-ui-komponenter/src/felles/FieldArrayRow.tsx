import React from 'react';
import type { UseFieldArrayRemove } from 'react-hook-form';

import { HStack } from '@navikt/ds-react';
import { RhfFieldArrayRemoveButton } from '@navikt/ft-form-hooks';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

interface Props {
  children: React.ReactNode;
  remove: UseFieldArrayRemove;
  index: number;
  readOnly: boolean;
}

export const FieldArrayRow = ({ children, remove, readOnly, index }: Props) => {
  return (
    <>
      {index > 0 && <AvsnittSkiller spaceUnder spaceAbove />}
      <HStack wrap={false} justify="space-between">
        <HStack wrap gap="space-8">
          {children}
        </HStack>

        <div>
          <RhfFieldArrayRemoveButton skjul={readOnly} remove={remove} index={index} />
        </div>
      </HStack>
    </>
  );
};
