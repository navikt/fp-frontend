import {
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { Box, Popover } from '@navikt/ds-react';

import { CardSelectItem } from './CardSelectItem';
import { CardSelectTrigger } from './CardSelectTrigger';

import styles from './cardSelect.module.css';

export type CardSelectOption = {
  value: string;
  label: ReactNode;
  ariaLabel?: string;
};

interface Props {
  options: CardSelectOption[];
  value?: string;
  placeholder: ReactNode;
  emptyContent: ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: string) => void;
  openLabel: string;
  closeLabel: string;
}

export const CardSelect = ({
  options,
  value,
  placeholder,
  emptyContent,
  open,
  onOpenChange,
  onChange,
  openLabel,
  closeLabel,
}: Props) => {
  const listeId = useId();
  const [utløserElement, setUtløserElement] = useState<HTMLDivElement | null>(null);
  const listeRef = useRef<HTMLUListElement>(null);
  const fokusIndexRef = useRef<number | undefined>(undefined);
  const valgt = options.find(option => option.value === value);
  const erStatisk = options.length === 0 || (options.length === 1 && !!valgt);
  const erMenyÅpen = open && !erStatisk;

  useEffect(() => {
    listeRef.current
      ?.querySelectorAll<HTMLElement>('a:not([data-primary]), button:not([data-primary])')
      .forEach(handling => {
        handling.tabIndex = -1;
      });
    if (erMenyÅpen && fokusIndexRef.current !== undefined) {
      const index = Math.min(fokusIndexRef.current, options.length - 1);
      fokusIndexRef.current = undefined;
      listeRef.current?.children[index]?.querySelector<HTMLElement>('[data-primary]')?.focus();
    }
  }, [erMenyÅpen, options]);

  const toggleMeny: MouseEventHandler<HTMLButtonElement> = event => {
    fokusIndexRef.current = !erMenyÅpen && event.detail === 0 ? 0 : undefined;
    onOpenChange(!erMenyÅpen);
  };

  const lukkMeny = () => {
    onOpenChange(false);
    if (listeRef.current?.contains(document.activeElement)) {
      utløserElement?.querySelector<HTMLButtonElement>('button[data-primary]')?.focus();
    }
  };

  const velg = (nyVerdi: string) => {
    lukkMeny();
    if (nyVerdi !== value) {
      onChange(nyVerdi);
    }
  };

  const håndterTast: KeyboardEventHandler<HTMLDivElement> = event => {
    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      !['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key) ||
      erStatisk
    ) {
      return;
    }

    event.preventDefault();
    // Unngå at en overordnet container også flytter fokus.
    event.stopPropagation();

    if (!erMenyÅpen) {
      switch (event.key) {
        case 'ArrowDown':
          fokusIndexRef.current = 0;
          break;
        case 'End':
          fokusIndexRef.current = options.length - 1;
          break;
        case 'PageDown':
          fokusIndexRef.current = Math.min(5, options.length - 1);
          break;
        default:
          return;
      }
      onOpenChange(true);
      return;
    }

    const rader = Array.from(listeRef.current?.children ?? []);
    if (rader.length === 0) {
      return;
    }
    const aktivIndex = rader.findIndex(rad => rad.contains(document.activeElement));
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const handlinger = Array.from(
        rader[aktivIndex]?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)') ?? [],
      );
      const handlingIndex = handlinger.indexOf(document.activeElement as HTMLElement);
      const nesteIndex = event.key === 'ArrowRight' ? handlingIndex + 1 : handlingIndex - 1;
      handlinger[nesteIndex]?.focus();
      return;
    }

    let nesteIndex = 0;
    switch (event.key) {
      case 'ArrowDown':
        nesteIndex = Math.min(aktivIndex + 1, rader.length - 1);
        break;
      case 'ArrowUp':
        if (aktivIndex === 0) {
          lukkMeny();
          return;
        }
        if (aktivIndex < 0) {
          return;
        }
        nesteIndex = aktivIndex - 1;
        break;
      case 'Home':
        break;
      case 'End':
        nesteIndex = rader.length - 1;
        break;
      case 'PageUp':
        if (aktivIndex < 0) {
          return;
        }
        nesteIndex = Math.max(aktivIndex - 6, 0);
        break;
      case 'PageDown':
        nesteIndex = Math.min(aktivIndex + 6, rader.length - 1);
        break;
    }
    rader[nesteIndex]?.querySelector<HTMLElement>('[data-primary]')?.focus();
  };

  const liste = (
    <ul ref={listeRef} id={listeId} className={styles['list']} hidden={!erMenyÅpen}>
      {erMenyÅpen &&
        options.map(option => (
          <li key={option.value} data-testid={`card-select-option-${option.value}`}>
            <CardSelectItem option={option} selected={option.value === value} onSelect={() => velg(option.value)} />
          </li>
        ))}
    </ul>
  );

  return (
    <Box data-color="neutral" width="100%" className={styles['root']} onKeyDownCapture={håndterTast}>
      {options.length === 0 && (
        <Box background="raised" borderWidth="1" borderColor="neutral" borderRadius="8" padding="space-16">
          {emptyContent}
        </Box>
      )}
      {options.length > 0 && (
        <div
          ref={setUtløserElement}
          className={styles['selected']}
          data-testid="card-select-selected"
          aria-current={erStatisk && valgt ? true : undefined}
        >
          <CardSelectTrigger
            listeId={listeId}
            label={valgt?.label ?? placeholder}
            ariaLabel={valgt?.ariaLabel}
            isStatic={erStatisk}
            open={erMenyÅpen}
            onToggle={toggleMeny}
            toggleLabel={erMenyÅpen ? closeLabel : openLabel}
          />
        </div>
      )}
      {options.length > 0 && (
        <Popover
          anchorEl={utløserElement}
          open={erMenyÅpen}
          onClose={lukkMeny}
          placement="bottom-start"
          offset={4}
          className={styles['menu']}
        >
          {liste}
        </Popover>
      )}
    </Box>
  );
};
