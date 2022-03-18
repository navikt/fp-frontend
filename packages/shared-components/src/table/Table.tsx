import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';

import TableRow from './TableRow';
import TableColumn from './TableColumn';

import styles from './table.less';

const classNames = classnames.bind(styles);

const EMPTY_STRING = 'EMPTY';

interface OwnProps {
  headerTextCodes?: string[];
  headerColumnContent?: ReactElement[];
  children: ReactElement | ReactElement[];
  classNameTable?: string;
  noHover?: boolean;
  hasGrayHeader?: boolean;
}

/**
 * Table
 *
 * Presentasjonskomponent. Definerer en tabell med rader og kolonner.
 */
const Table = React.forwardRef<HTMLTableElement, OwnProps>(({
  headerTextCodes = [],
  headerColumnContent = [],
  classNameTable = '',
  noHover = false,
  hasGrayHeader = false,
  children,
}, ref) => (
  <table ref={ref} className={classNames('table', { [classNameTable]: classNameTable, rowHover: !noHover })}>
    <thead>
      <TableRow isHeader noHover={noHover} hasGrayHeader={hasGrayHeader}>
        {headerTextCodes.map((headerElement) => (typeof headerElement === 'string' && headerElement.startsWith(EMPTY_STRING)
          ? <TableColumn key={headerElement}>&nbsp;</TableColumn>
          : (
            <TableColumn key={headerElement}>
              <FormattedMessage id={headerElement} />
            </TableColumn>
          )))}
        {headerColumnContent.map((element) => (
          <TableColumn key={element.key}>
            {element}
          </TableColumn>
        ))}
      </TableRow>
    </thead>
    <tbody>
      {Array.isArray(children)
        ? React.Children.map(children, ((child) => React.cloneElement(child as any, { noHover }))) // NOSONAR
        : React.cloneElement(children, { noHover })}
    </tbody>
  </table>
));

export default Table;
