import React, {
  FunctionComponent, ReactNode,
} from 'react';
import { useIntl } from 'react-intl';

import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import { Image, TableColumn, TableRow } from '@fpsak-frontend/shared-components';

import styles from './expandableTableRow.less';

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleContent: (isOpen: boolean) => void;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
}

const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleContent,
  children,
  isApLeftBorder = false,
}) => {
  const intl = useIntl();
  return (
    <>
      <TableRow
        onMouseDown={() => toggleContent(!showContent)}
        onKeyDown={() => toggleContent(!showContent)}
        hasNoBottomBorder={showContent}
        isApLeftBorder={isApLeftBorder}
      >
        {children}
        <TableColumn>
          <Image alt={intl.formatMessage({ id: 'ExpandableTableRow.Apne' })} src={showContent ? pilOppIkonUrl : pilNedIkonUrl} />
        </TableColumn>
      </TableRow>
      <TableRow noHover isApLeftBorder={isApLeftBorder} className={!showContent ? styles.hidden : undefined}>
        <TableColumn />
        <TableColumn colspanAll>
          {content}
        </TableColumn>
      </TableRow>
    </>
  );
};

export default ExpandableTableRow;
