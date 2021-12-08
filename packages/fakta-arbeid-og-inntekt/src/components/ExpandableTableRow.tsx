import React, {
  FunctionComponent, ReactNode, useState, useCallback,
} from 'react';
import { useIntl } from 'react-intl';

import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import { Image, TableColumn, TableRow } from '@fpsak-frontend/shared-components';

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleOpenHandler: (isOpen: boolean) => void;
  children: ReactNode | ReactNode[];
  isApLeftBorder?: boolean;
}

const ExpandableTableRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleOpenHandler,
  children,
  isApLeftBorder = false,
}) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(showContent);
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    toggleOpenHandler(!isOpen);
  }, [isOpen]);

  return (
    <>
      <TableRow onMouseDown={toggleIsOpen} hasNoBottomBorder={isOpen} isApLeftBorder={isApLeftBorder}>
        {children}
        <TableColumn>
          <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={pilNedIkonUrl} />
        </TableColumn>
      </TableRow>
      {isOpen && (
        <TableRow noHover isApLeftBorder={isApLeftBorder}>
          <TableColumn />
          <TableColumn colspanAll>
            {content}
          </TableColumn>
        </TableRow>
      )}
    </>
  );
};

export default ExpandableTableRow;
