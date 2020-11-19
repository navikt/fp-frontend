import React, { FunctionComponent } from 'react';
import { Table } from '@fpsak-frontend/shared-components';
import { Column, Row } from 'nav-frontend-grid';

import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import styles from './tidligereUtbetalinger.less';
import TidligereUtbetalingRad from './TidligereUtbetalingRad';

type OwnProps = {
    beregningsgrunnlag: Beregningsgrunnlag;
};

export const TidligereUtbetalinger: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
  const { andeler } = beregningsgrunnlag.refusjonTilVurdering;
  return (
    <>
      <Row>
        <Column xs="8">
          <Table
            headerTextCodes={['BeregningInfoPanel.RefusjonBG.Aktivitet', 'BeregningInfoPanel.RefusjonBG.TidligereUtb',
              'BeregningInfoPanel.RefusjonBG.GjeldendeFra']}
            noHover
            classNameTable={styles.tabell}
          >
            { andeler.map((andel) => (
              <TidligereUtbetalingRad
                refusjonAndel={andel}
                key={andel.arbeidsgiverNavn}
              />
            ))}
          </Table>
        </Column>
      </Row>
    </>
  );
};

export default TidligereUtbetalinger;
