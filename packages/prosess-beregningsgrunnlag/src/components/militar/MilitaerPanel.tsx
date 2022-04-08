import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { VerticalSpacer, AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

type OwnProps = {
    alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * MilitaerPanel
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for militær og sivilforsvarstjeneste.
 */
const MilitaerPanel: FunctionComponent<OwnProps> = ({ alleAndeler }) => {
  const relevanteAndeler = alleAndeler.filter((andel) => andel.aktivitetStatus === aktivitetStatus.MILITAER_ELLER_SIVIL);
  const beregnetAarsinntekt = relevanteAndeler && relevanteAndeler.length > 0 ? relevanteAndeler[0].beregnetPrAar : '';
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <Row>
        <Column xs="12">
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Militær" />
          </Element>
        </Column>
      </Row>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="12">
          <Element>{formatCurrencyNoKr(beregnetAarsinntekt)}</Element>
        </Column>
      </Row>
    </>
  );
};

export default MilitaerPanel;
