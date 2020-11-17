import React, { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';
import { Undertekst, TypografiProps } from 'nav-frontend-typografi';

import LabelType from './LabelType';

import styles from './label.less';

const classNames = classnames.bind(styles);

const format = (intl: IntlShape, label?: any) => {
  if (label && label.id) {
    return intl.formatMessage({ id: label.id }, label.args);
  }
  return label;
};

interface LabelProps {
  input?: LabelType;
  typographyElement?: React.ComponentType<TypografiProps>;
  readOnly?: boolean;
}

export const Label: FunctionComponent<LabelProps & WrappedComponentProps> = ({
  intl,
  input,
  readOnly,
  typographyElement: TypoElem,
}) => {
  if (!input) {
    return null;
  }
  return (
    <span className={classNames('labelWrapper', { readOnly })}>
      <TypoElem tag="span" className={styles.label}>
        {format(intl, input)}
      </TypoElem>
    </span>
  );
};

Label.defaultProps = {
  typographyElement: Undertekst,
  readOnly: false,
};

export default injectIntl(Label);
