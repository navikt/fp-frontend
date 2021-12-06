import React, {
  FunctionComponent, ReactNode, useState, useCallback,
} from 'react';
import { useIntl } from 'react-intl';

import pilNedIkonUrl from '@fpsak-frontend/assets/images/pil_ned.svg';
import { Image } from '@fpsak-frontend/shared-components';

import ETColumn from './ETColumn';

import 'nav-frontend-tabell-style';

interface OwnProps {
  showContent: boolean;
  content: ReactNode;
  toggleOpenHandler: (isOpen: boolean) => void;
  children: ReactNode | ReactNode[];
}

const ETRow: FunctionComponent<OwnProps> = ({
  showContent,
  content,
  toggleOpenHandler,
  children,
}) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(showContent);
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    toggleOpenHandler(!isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="tabell__tr" role="row" onClick={toggleIsOpen}>
        {children}
        <ETColumn>
          <Image alt={intl.formatMessage({ id: 'ArbeidOgInntektFaktaPanel.Aksjonspunkt' })} src={pilNedIkonUrl} />
        </ETColumn>
      </div>
      {isOpen && content}
    </>
  );
};

export default ETRow;
