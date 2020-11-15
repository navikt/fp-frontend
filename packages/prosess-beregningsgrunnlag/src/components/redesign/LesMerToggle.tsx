import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import Chevron from 'nav-frontend-chevron';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './lesMerPanel.less' or its cor... Remove this comment to see the full error message
import styles from './lesMerPanel.less';

type OwnProps = {
    erApen?: boolean;
    onClick: (...args: any[]) => any;
    lukkTekst?: React.ReactNode;
    apneTekst?: React.ReactNode;
    other?: any;
};

const LesMerToggle: FunctionComponent<OwnProps> = ({
  erApen, onClick, lukkTekst, apneTekst, other,
}) => {
  const btnClassName = cn(styles.lesMerPanel__togglelink,
    erApen ? styles['lesMerPanel__togglelink--erApen'] : '');

  return (
    <div className={styles.lesMerPanel__toggle}>
      <button
        type="button"
        aria-expanded={erApen}
        onClick={onClick}
        className={btnClassName}
        {...other}
      >

        <div className={styles.lesMerPanel__toggleTekst}>
          {erApen ? lukkTekst : apneTekst}
          <Chevron type={erApen ? 'opp' : 'ned'} className={styles.lesMerPanel__toggleChevron} />
        </div>
      </button>
    </div>
  );
};

export default LesMerToggle;
