import React, {
  FunctionComponent, ReactNode,
} from 'react';

import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import pilOppIkonUrl from '@fpsak-frontend/assets/images/pil_opp.svg';
import { createIntl } from '@fpsak-frontend/utils';

import Image from '../Image';
import TableColumn from './TableColumn';
import TableRow from './TableRow';

import messages from '../../i18n/nb_NO.json';

import styles from './expandableTableRow.less';

const intl = createIntl(messages);

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleContent: () => void;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
}

const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleContent,
  children,
  isApLeftBorder = false,
}) => (
  <>
    <TableRow
      onMouseDown={toggleContent}
      onKeyDown={toggleContent}
      hasNoBottomBorder={showContent}
      isApLeftBorder={isApLeftBorder}
    >
      {children}
      <TableColumn>
        <Image
          alt={intl.formatMessage({ id: showContent ? 'ExpandableTableRow.Lukke' : 'ExpandableTableRow.Apne' })}
          src={showContent ? pilOppIkonUrl : pilNedIkonUrl}
        />
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

export default ExpandableTableRow;
