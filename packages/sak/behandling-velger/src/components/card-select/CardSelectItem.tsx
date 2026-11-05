import { useId } from 'react';

import { CheckmarkIcon } from '@navikt/aksel-icons';
import { Box } from '@navikt/ds-react';

import type { CardSelectOption } from './CardSelect';

import styles from './card.module.css';

interface Props {
  option: CardSelectOption;
  selected: boolean;
  onSelect: () => void;
}

export const CardSelectItem = ({ option, selected, onSelect }: Props) => {
  const labelId = useId();
  return (
    <Box
      data-color={selected ? 'accent' : 'neutral'}
      background="raised"
      paddingBlock="space-8"
      paddingInline="space-16"
      data-interactive
      data-pressed={selected || undefined}
      className={styles['kort']}
    >
      <button
        type="button"
        data-primary
        className={styles['hovedHandling']}
        onClick={onSelect}
        aria-label={option.ariaLabel}
        aria-labelledby={option.ariaLabel ? undefined : labelId}
        aria-current={selected || undefined}
        tabIndex={-1}
      />
      <div id={labelId} className={styles['innhold']}>
        {option.label}
      </div>
      <span className={styles['valgtIkon']}>{selected && <CheckmarkIcon aria-hidden fontSize="1.5rem" />}</span>
    </Box>
  );
};
