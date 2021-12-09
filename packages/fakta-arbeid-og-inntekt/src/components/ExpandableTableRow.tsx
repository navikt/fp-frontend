import React, {
  FunctionComponent, ReactNode, useState, useCallback,
} from 'react';
import { useIntl } from 'react-intl';

import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import { Image, TableColumn, TableRow } from '@fpsak-frontend/shared-components';

import styles from './expandableTableRow.less';

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
}

const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  children,
  isApLeftBorder = false,
}) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(showContent);
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <TableRow onMouseDown={toggleIsOpen} hasNoBottomBorder={isOpen} isApLeftBorder={isApLeftBorder}>
        {children}
        <TableColumn>
          <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={pilNedIkonUrl} />
        </TableColumn>
      </TableRow>
      <TableRow noHover isApLeftBorder={isApLeftBorder} className={!isOpen ? styles.hidden : undefined}>
        <TableColumn />
        <TableColumn colspanAll>
          {content}
        </TableColumn>
      </TableRow>
    </>
  );
};

export default ExpandableTableRow;
