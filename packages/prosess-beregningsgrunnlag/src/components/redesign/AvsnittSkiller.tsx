import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';
import classnames from 'classnames/bind';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './avsnittSkiller.less' or its ... Remove this comment to see the full error message
import styles from './avsnittSkiller.less';

const classNames = classnames.bind(styles);

type OwnProps = {
    luftUnder?: boolean;
    luftOver?: boolean;
    leftPanel?: boolean;
    rightPanel?: boolean;
    dividerParagraf?: boolean;
};

const AvsnittSkiller:FunctionComponent<OwnProps> = ({
  luftUnder, luftOver, leftPanel, rightPanel, dividerParagraf,
}) => (
  <>
    {luftOver && (
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
    {luftUnder && (
    <VerticalSpacer thirtyTwoPx />
    )}
  </>
);
AvsnittSkiller.defaultProps = {
  luftUnder: false,
  luftOver: false,
  leftPanel: false,
  rightPanel: false,
  dividerParagraf: false,
};
export default AvsnittSkiller;
