import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './tableColumn.less';

const classNames = classnames.bind(styles);

interface OwnProps {
  children?: number | string | ReactNode;
  className?: string;
  hidden?: boolean;
  colspanAll?: boolean;
}

/**
 * TableColumn
 *
 * Presentasjonskomponent. Tabellkolonne som brukes av komponenten Table.
 */
const TableColumn: FunctionComponent<OwnProps> = ({
  children = '',
  className,
  hidden = false,
  colspanAll = false,
}) => {
  if (hidden) {
    return null;
  }
  return (
    <td className={classNames(styles.columnStyle, className)} colSpan={colspanAll ? 100 : undefined}>
      {children}
    </td>
  );
};

export default TableColumn;
