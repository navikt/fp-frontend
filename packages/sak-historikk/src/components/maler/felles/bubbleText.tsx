import React, { FunctionComponent, MouseEvent, useState, KeyboardEvent } from 'react';
import { useIntl } from 'react-intl';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import { HStack, Link } from '@navikt/ds-react';
import styles from './bubbleText.module.css';

const truncateText = (tekst: string, cutOffLength: number): string =>
  tekst.length > cutOffLength ? `${tekst.substring(0, cutOffLength - 3)}...` : tekst;

interface OwnProps {
  bodyText?: string;
  cutOffLength?: number;
}

/**
 * Ekspanderbar tekst med chevron i nedre høyre hørnet - den skall vare expanderbar om den innehåller for mye tekst
 * för gjenbruk kan man återanvända. Man sender in teksten og var cut-off pointen skall vare.
 *
 * Eksempel:
 * ```html
 * <BubbleText bodyText={tekst} cutOffLength={70} />
 * ```
 */
const BubbleText: FunctionComponent<OwnProps> = ({ cutOffLength = 83, bodyText = '' }) => {
  const intl = useIntl();
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = (event: MouseEvent) => {
    setExpanded(prevState => !prevState);
    event.preventDefault();
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event && event.keyCode === 32) {
      setExpanded(prevState => !prevState);
    }
    event.preventDefault();
  };

  if (bodyText.length < cutOffLength + 1) {
    return <div>{bodyText}</div>;
  }

  return (
    <HStack gap="2" justify="end">
      {expanded && <div>{bodyText}</div>}
      {!expanded && <div className={styles.breakWord}>{truncateText(bodyText, cutOffLength)}</div>}
      <Link
        href="#"
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
        aria-label={intl.formatMessage({ id: expanded ? 'BubbleText.LukkeTekstfelt' : 'BubbleText.ApneTekstfelt' })}
      >
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Link>
    </HStack>
  );
};

export default BubbleText;
