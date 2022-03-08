import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import { Stonadskonto } from '@fpsak-frontend/types';

import styles from './timeLineTab.less';

const classNames = classnames.bind(styles);

const findKorrektLabelForKvote = (stonadtype: string): string => {
  switch (stonadtype) {
    case stonadskontoType.FEDREKVOTE:
      return 'TimeLineTab.Stonadinfo.Fedrekvote';
    case stonadskontoType.MODREKVOTE:
      return 'TimeLineTab.Stonadinfo.Modrekvote';
    case stonadskontoType.FELLESPERIODE:
      return 'TimeLineTab.Stonadinfo.Fellesperiode';
    case stonadskontoType.FORELDREPENGER_FOR_FODSEL:
      return 'TimeLineTab.Stonadinfo.ForeldrepengerFF';
    case stonadskontoType.FLERBARNSDAGER:
      return 'TimeLineTab.Stonadinfo.Flerbarnsdager';
    case stonadskontoType.FORELDREPENGER:
      return 'TimeLineTab.Stonadinfo.ForeldrePenger';
    case stonadskontoType.UTEN_AKTIVITETSKRAV:
      return 'TimeLineTab.Stonadinfo.UtenAktivitetskrav';
    default:
      return 'TimeLineTab.Stonadinfo.Empty';
  }
};

const findAntallUkerOgDager = (kontoinfo: Stonadskonto): { uker: number; dager: number } => {
  const modifier = kontoinfo.saldo < 0 ? -1 : 1;
  const justertSaldo = kontoinfo.saldo * modifier;
  return {
    uker: (Math.floor(justertSaldo / 5)) * modifier,
    dager: (justertSaldo % 5) * modifier,
  };
};

export type CustomStonadskonto = {
  kontonavn: string;
  kontoinfo: Stonadskonto;
}

interface OwnProps {
  stonadskonto: CustomStonadskonto;
  onClickCallback: (evernt: React.MouseEvent) => any;
  aktiv?: boolean;
}

const TimeLineTab: FunctionComponent<OwnProps> = ({
  stonadskonto,
  onClickCallback,
  aktiv = false,
}) => {
  const fordelteDager = findAntallUkerOgDager(stonadskonto.kontoinfo);
  return (
    <div className={styles.tabs}>
      <li role="presentation" className={classNames('tab', { aktiv, error: stonadskonto.kontoinfo && !stonadskonto.kontoinfo.gyldigForbruk })}>
        <button
          role="tab"
          className={classNames('tabInner', { error: stonadskonto.kontoinfo && !stonadskonto.kontoinfo.gyldigForbruk })}
          type="button"
          onClick={onClickCallback}
          aria-selected={aktiv}
        >
          <Column>
            <Row>
              <Undertekst>
                <FormattedMessage
                  id={findKorrektLabelForKvote(stonadskonto.kontonavn)}
                />
              </Undertekst>
            </Row>
            <Row>
              <Normaltekst>
                <FormattedMessage
                  id="TimeLineTab.Stonadinfo.UkerDager"
                  values={{
                    ukerVerdi: fordelteDager.uker,
                    dagerVerdi: fordelteDager.dager,
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />
              </Normaltekst>
            </Row>
          </Column>
        </button>
      </li>
    </div>
  );
};

export default TimeLineTab;
