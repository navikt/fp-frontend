import React, { FunctionComponent } from 'react';

import classnames from 'classnames/bind';
import { Column, Row } from 'nav-frontend-grid';
import VerticalSpacer from './VerticalSpacer';
import styles from './avsnittSkiller.less';

const classNames = classnames.bind(styles);

type OwnProps = {
  spaceUnder?: boolean;
  spaceAbove?: boolean;
  leftPanel?: boolean;
  rightPanel?: boolean;
  dividerParagraf?: boolean;
};

const AvsnittSkiller:FunctionComponent<OwnProps> = ({
  spaceUnder, spaceAbove, leftPanel, rightPanel, dividerParagraf,
}) => (
  <>
    {spaceAbove && (
    <VerticalSpacer thirtyTwoPx />
    )}
    <Row>
      <Column xs="12">
        <div className={classNames(
          {
            leftPanel,
            rightPanel,
          },
        )}
        >
          <div className={dividerParagraf ? styles.dividerParagraf : styles.divider} />
        </div>
      </Column>
    </Row>
    {spaceUnder && (
    <VerticalSpacer thirtyTwoPx />
    )}
  </>
);
AvsnittSkiller.defaultProps = {
  spaceUnder: false,
  spaceAbove: false,
  leftPanel: false,
  rightPanel: false,
  dividerParagraf: false,
};
export default AvsnittSkiller;
