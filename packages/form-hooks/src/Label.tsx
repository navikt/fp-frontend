import React, {
  ReactElement, ElementType, FunctionComponent,
} from 'react';
import classnames from 'classnames/bind';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';

import styles from './label.less';

const classNames = classnames.bind(styles);

export type LabelType = string | ReactElement;

interface OwnProps {
  input?: LabelType;
  typographyElement?: ElementType;
  readOnly?: boolean;
}

const Label: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  input,
  readOnly = false,
  typographyElement: TypoElem = Undertekst,
}) => {
  if (!input) {
    return null;
  }

  return (
    <span className={classNames('labelWrapper', { readOnly })}>
      <TypoElem tag="span" className={styles.label}>{input}</TypoElem>
    </span>
  );
};

export default injectIntl(Label);
