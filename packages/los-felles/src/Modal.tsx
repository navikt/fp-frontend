import React, { FunctionComponent, ReactElement } from 'react';
import { Modal as NavModal } from '@navikt/ds-react';

interface OwnProps {
  className?: string;
  closeButton: boolean;
  open: boolean;
  'aria-label': string;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  children: ReactElement | ReactElement[];
}

/**
 * Modal
 *
 * Wrapper Modal-komponenten fra ds-react biblioteket.
 */
const Modal: FunctionComponent<OwnProps> = ({ children, ...otherProps }) => {
  if (NavModal.setAppElement) {
    NavModal.setAppElement(process.env.NODE_ENV !== 'test' ? 'div#app' : 'div');
  }

  return (
    <NavModal {...otherProps}>
      <NavModal.Content>
        {children}
      </NavModal.Content>
    </NavModal>
  );
};

Modal.defaultProps = {
  shouldCloseOnOverlayClick: false,
};

export default Modal;
