import React, { ReactNode } from 'react';
import classnames from 'classnames/bind';

import styles from './tableRow.less';

const classNames = classnames.bind(styles);

const createMouseDownHandler = <ID, MODEL, >(
  onMouseDown?: (e: React.MouseEvent, id?: ID, model?: MODEL) => void,
  id?: ID,
  model?: MODEL,
) => (e: React.MouseEvent): void => {
    if (onMouseDown && e.button === 0) {
      onMouseDown(e, id, model);
    }
  };

// @ts-ignore Fiks
const findNearestRow = (element: EventTarget) => (element.tagName === 'TR' ? element : findNearestRow(element.parentElement));

const setFocus = (e: React.KeyboardEvent, isNext: boolean): void => {
  const row = findNearestRow(e.target);
  const otherRow = isNext ? row.nextSibling : row.previousSibling;
  const element = otherRow || row;

  if (element) {
    element.focus();
    e.preventDefault();
  }
};

const createKeyDownHandler = <ID, MODEL, >(
  useMultiselect: boolean,
  onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void,
  id?: ID,
  model?: MODEL,
) => (e: React.KeyboardEvent): void => {
    if (e.key === 'ArrowDown') {
      setFocus(e, true);
    } else if (e.key === 'ArrowUp') {
      setFocus(e, false);
      // @ts-ignore Fiks
    } else if (onKeyDown && e.target.tagName !== 'TD' && (e.key === 'Enter' || e.key === ' ')) {
      onKeyDown(e, id, model);
      e.preventDefault();
      // @ts-ignore Fiks
    } else if (useMultiselect && onKeyDown && e.target.tagName !== 'TD' && e.key === 'Shift') {
      onKeyDown(e);
      e.preventDefault();
    }
  };

const createKeyUpHandler = <ID, MODEL, >(
  onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void,
) => (e: React.KeyboardEvent): void => {
  // @ts-ignore Fiks
    if (onKeyDown && e.target.tagName !== 'TD' && e.key === 'Shift') {
      onKeyDown(e);
      e.preventDefault();
    }
  };

interface OwnProps<ID, MODEL = void> {
  id?: ID;
  model?: MODEL;
  isHeader?: boolean;
  onMouseDown?: (e: React.MouseEvent, id?: ID, model?: MODEL) => void;
  onKeyDown?: (e: React.KeyboardEvent, id?: ID, model?: MODEL) => void;
  children: ReactNode | ReactNode[];
  noHover?: boolean;
  isSelected?: boolean;
  isBold?: boolean;
  isDashedBottomBorder?: boolean;
  isSolidBottomBorder?: boolean;
  isApLeftBorder?: boolean;
  className?: string;
  useMultiselect?: boolean;
}

/**
 * TableRow
 *
 * Presentasjonskomponent. Tabellrad som brukes av komponenten Table.
 */
const TableRow = <ID, MODEL = void, >({
  id,
  model,
  isHeader = false,
  onMouseDown,
  onKeyDown,
  children,
  noHover = false,
  isSelected = false,
  isBold = false,
  isDashedBottomBorder = false,
  isSolidBottomBorder = false,
  isApLeftBorder = false,
  className,
  useMultiselect = false,
}: OwnProps<ID, MODEL>) => (
  <tr
    className={classNames(className, {
      rowHeader: isHeader,
      rowContent: (!isHeader && !noHover),
      selected: isSelected,
      bold: isBold,
      dashedBottomBorder: isDashedBottomBorder,
      solidBottomBorder: isSolidBottomBorder,
      apLeftBorder: isApLeftBorder,
    })}
    onMouseDown={createMouseDownHandler<ID, MODEL>(onMouseDown, id, model)}
    onKeyDown={createKeyDownHandler<ID, MODEL>(useMultiselect, onKeyDown, id, model)}
    onKeyUp={useMultiselect ? createKeyUpHandler<ID, MODEL>(onKeyDown) : undefined}
    tabIndex={0}
  >
    {children}
  </tr>
  );

export default TableRow;
