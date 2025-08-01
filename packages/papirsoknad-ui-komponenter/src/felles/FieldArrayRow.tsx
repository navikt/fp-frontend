import React from 'react';

import { TrashIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';

interface Props {
  children: React.ReactNode;
  remove: (index: number) => void;
  index: number;
  readOnly: boolean;
}

export const FieldArrayRow = ({ children, remove, readOnly, index }: Props) => {
  return (
    <>
      {index > 0 && <AvsnittSkiller spaceUnder spaceAbove />}
      <HStack wrap={false} justify="space-between">
        <HStack wrap gap="space-16">
          {children}
        </HStack>
        {!readOnly && index > 0 && (
          <Button type="button" variant="tertiary-neutral" icon={<TrashIcon />} onClick={() => remove(index)} />
        )}
      </HStack>
    </>
  );
};
