import { type MouseEventHandler, type ReactNode, useId } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { Box, Button } from '@navikt/ds-react';

import styles from './card.module.css';

interface Props {
  listeId: string;
  label: ReactNode;
  ariaLabel?: string;
  isStatic: boolean;
  open: boolean;
  onToggle: MouseEventHandler<HTMLButtonElement>;
  toggleLabel: string;
}

export const CardSelectTrigger = ({ listeId, label, ariaLabel, isStatic, open, onToggle, toggleLabel }: Props) => {
  const labelId = useId();

  return (
    <Box
      data-color="neutral"
      background="raised"
      paddingBlock="space-8"
      paddingInline="space-16"
      data-interactive={!isStatic}
      data-trigger
      className={styles['card']}
      role={isStatic ? 'group' : undefined}
      tabIndex={isStatic ? -1 : undefined}
      aria-label={isStatic ? ariaLabel : undefined}
      aria-labelledby={isStatic && !ariaLabel ? labelId : undefined}
      aria-describedby={isStatic && ariaLabel ? labelId : undefined}
    >
      {!isStatic && (
        <button
          type="button"
          data-primary
          className={styles['primaryAction']}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={listeId}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabel ? undefined : labelId}
          aria-describedby={ariaLabel ? labelId : undefined}
        />
      )}
      <div id={labelId} className={styles['content']}>
        {label}
      </div>
      {!isStatic && (
        <Button
          type="button"
          variant="tertiary"
          size="small"
          className={styles['iconAction']}
          onClick={onToggle}
          onKeyDown={event => {
            if (event.key === ' ') {
              // Aksel håndterer mellomrom selv; unngå et ekstra klikk fra nettleseren.
              event.preventDefault();
            }
          }}
          aria-expanded={open}
          aria-controls={listeId}
          icon={
            open ? (
              <ChevronUpIcon title={toggleLabel} fontSize="2rem" />
            ) : (
              <ChevronDownIcon title={toggleLabel} fontSize="2rem" />
            )
          }
        />
      )}
    </Box>
  );
};
