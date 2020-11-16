import React, { Component } from 'react';
import 'nav-frontend-lesmerpanel-style';
import { UnmountClosed } from 'react-collapse';
import { guid, omit } from 'nav-frontend-js-utils';
import classNames from 'classnames';
import LesMerToggle from './LesMerToggle';
import styles from './lesMerPanel.less';

const lesMerPanelCls = (props) => classNames(styles.lesMerPanel, props.className, props.border ? styles['lesMerPanel--border'] : '');

type OwnProps = {
    defaultApen?: boolean;
    onOpen?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    intro?: React.ReactNode;
    id?: string;
    lukkTekst: string;
    apneTekst: string;
    className?: string;
    border?: boolean;
};

type StateProps = {
  erApen: boolean;
};

/**
 * Lesmerpanel
 */

class Lesmerpanel extends Component<OwnProps, StateProps> {
static defaultProps = {
  defaultApen: false,
  onClose: () => { },
  onOpen: () => { },
};

constructor(props) {
  super(props);
  this.state = { erApen: props.defaultApen };
  this.toggle = this.toggle.bind(this);
}

toggle(e) {
  e.preventDefault();
  const { erApen } = this.state;
  const { onClose, onOpen } = this.props;
  this.setState({ erApen: !erApen });
  if (erApen) {
    onClose(e);
  } else {
    onOpen(e);
  }
}

render() {
  const {
    intro,
    children,
    apneTekst,
    lukkTekst,
    id = guid(),
    ...other
  } = this.props;
  const domProps = omit(other, 'border', 'onOpen', 'onClose', 'defaultApen');
  const { erApen } = this.state;
  return (
    <div
      id={id}
      className={lesMerPanelCls(this.props)}
      {...domProps}
    >
      <div className={styles.lesMerPanel__introWrapper}>
        {intro && (
        <div className={styles.lesMerPanel__intro}>
          { intro }
        </div>
        )}
        {children && (
          <LesMerToggle
            aria-controls={id}
            apneTekst={apneTekst}
            lukkTekst={lukkTekst}
            erApen={erApen}
            onClick={(e) => { this.toggle(e); }}
          />
        )}
      </div>
      {children && (
        <div className={styles.lesMerPanel__merContainer}>
          <UnmountClosed isOpened={erApen}>
            <div className={styles.lesMerPanel__mer}>
              <div>
                {children}
              </div>
            </div>
          </UnmountClosed>
        </div>
      )}
    </div>
  );
}
}
export default Lesmerpanel;
