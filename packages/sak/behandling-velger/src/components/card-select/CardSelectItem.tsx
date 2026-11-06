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
      className={styles['card']}
    >
      <button
        type="button"
        data-primary
        className={styles['primaryAction']}
        onClick={onSelect}
        aria-label={option.ariaLabel}
        aria-labelledby={option.ariaLabel ? undefined : labelId}
        aria-describedby={option.ariaLabel ? labelId : undefined}
        aria-current={selected || undefined}
        tabIndex={-1}
      />
      <div id={labelId} className={styles['content']}>
        {option.label}
      </div>
      <span className={styles['selectedIcon']}>{selected && <CheckmarkIcon aria-hidden fontSize="1.5rem" />}</span>
    </Box>
  );
};
