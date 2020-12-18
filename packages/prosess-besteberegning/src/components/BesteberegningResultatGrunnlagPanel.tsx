import React, { FunctionComponent } from 'react';
import { BeregningsgrunnlagPeriodeProp } from '@fpsak-frontend/types';
import { Normaltekst, Element, Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { formatCurrencyNoKr } from '@fpsak-frontend/utils';
import {
  VerticalSpacer,
  Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';

import { FormattedMessage } from 'react-intl';
import { Månedsgrunnlag } from '@fpsak-frontend/types/src/besteberegningTsTypes';

interface OwnProps {
  periode: BeregningsgrunnlagPeriodeProp;
  besteMåneder: Månedsgrunnlag[];
}

const erBeløpSatt = (beløp) => beløp || beløp === 0;

const finnKap8Beregning = (periode: BeregningsgrunnlagPeriodeProp) => (erBeløpSatt(periode.overstyrtPrAar)
  ? periode.overstyrtPrAar : periode.beregnetPrAar);

const finnBesteberegnet = (besteMåneder : Månedsgrunnlag[]) => (
  besteMåneder.flatMap((måned) => måned.inntekter).map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0) * 2
);

const girKap8Besteberegning = (kap8Beregning: number, kap1473Beregning: number) => (kap8Beregning > kap1473Beregning);

const headerColumnContent = [
  <></>,
  <Element>
    {' '}
    <FormattedMessage id="ResultatGrunnlag.BeregningEtterKap8" />
    {' '}
  </Element>,
  <Element>
    {' '}
    <FormattedMessage id="ResultatGrunnlag.BeregningEtterBesteberegning" />
    {' '}
  </Element>,
];

/**
 * BesteberegningResultatGrunnlagPanel
 *
 * Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.
 */
const BesteberegningResultatGrunnlagPanel: FunctionComponent<OwnProps> = ({
  periode,
  besteMåneder,
}) => (
  <div>
    <Row>
      <Column>
        <Undertittel>
          {' '}
          <FormattedMessage id="ResultatGrunnlag.Overskrift" />
          {' '}
        </Undertittel>
      </Column>
    </Row>
    <VerticalSpacer twentyPx />
    <Row>
      <Column xs="12">
        <Table headerColumnContent={headerColumnContent} noHover>
          <TableRow>
            <TableColumn>
              <Normaltekst>
                <FormattedMessage id="ResultatGrunnlag.BruttoBeregningsgrunnlag" />
              </Normaltekst>
            </TableColumn>
            <TableColumn>
              <Normaltekst>
                {formatCurrencyNoKr(finnKap8Beregning(periode))}
              </Normaltekst>
            </TableColumn>
            <TableColumn>
              <Normaltekst>
                {formatCurrencyNoKr(finnBesteberegnet(besteMåneder))}
              </Normaltekst>
            </TableColumn>
          </TableRow>
        </Table>
      </Column>
    </Row>

    <VerticalSpacer twentyPx />

    <Row>
      <Column>
        <Normaltekst>
          {girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder))
            && <FormattedMessage id="ResultatGrunnlag.Kap8GirBesteBeregning" />}
          {!girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder))
            && <FormattedMessage id="ResultatGrunnlag.Kap1473GirBesteBeregning" />}
        </Normaltekst>
      </Column>
    </Row>
    <VerticalSpacer twentyPx />

  </div>
);

export default BesteberegningResultatGrunnlagPanel;
