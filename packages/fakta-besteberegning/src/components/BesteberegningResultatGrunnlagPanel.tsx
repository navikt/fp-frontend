import React, { FunctionComponent } from 'react';
import { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp } from '@fpsak-frontend/types';
import { BodyShort, Label } from '@navikt/ds-react';
import { Column, Row } from 'nav-frontend-grid';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import {
  VerticalSpacer,
  Table, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';

import { FormattedMessage } from 'react-intl';
import { Månedsgrunnlag } from '@fpsak-frontend/types/src/besteberegningTsTypes';

interface OwnProps {
  periode: BeregningsgrunnlagPeriodeProp;
  besteMåneder: Månedsgrunnlag[];
}

const erBeløpSatt = (beløp: number): boolean => !!beløp || beløp === 0;

const finnGjeldendeBeløp = (andel: BeregningsgrunnlagAndel): number => (erBeløpSatt(andel.overstyrtPrAar) ? andel.overstyrtPrAar : andel.beregnetPrAar);

const finnKap8Beregning = (periode: BeregningsgrunnlagPeriodeProp): number => periode.beregningsgrunnlagPrStatusOgAndel
  .map((andel) => finnGjeldendeBeløp(andel))
  .reduce((i1, i2) => i1 + i2, 0);

const finnBesteberegnet = (besteMåneder : Månedsgrunnlag[]): number => (
  besteMåneder.flatMap((måned) => måned.inntekter).map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0) * 2
);

const girKap8Besteberegning = (kap8Beregning: number, kap1473Beregning: number): boolean => (kap8Beregning > kap1473Beregning);

const headerColumnContent = [
  // For å lage tom kolonne først
  <div key="TomKolNøkkel" />,
  <Label size="small" key="Kap8Nøkkel">
    {' '}
    <FormattedMessage id="ResultatGrunnlag.BeregningEtterKap8" />
    {' '}
  </Label>,
  <Label size="small" key="BBNøkkel">
    {' '}
    <FormattedMessage id="ResultatGrunnlag.BeregningEtterBesteberegning" />
    {' '}
  </Label>,
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
      <Column xs="12">
        <Table headerColumnContent={headerColumnContent} noHover>
          <TableRow>
            <TableColumn>
              <BodyShort size="small">
                <FormattedMessage id="ResultatGrunnlag.BruttoBeregningsgrunnlag" />
              </BodyShort>
            </TableColumn>
            <TableColumn>
              <BodyShort size="small">
                {formatCurrencyNoKr(finnKap8Beregning(periode))}
              </BodyShort>
            </TableColumn>
            <TableColumn>
              <BodyShort size="small">
                {formatCurrencyNoKr(finnBesteberegnet(besteMåneder))}
              </BodyShort>
            </TableColumn>
          </TableRow>
        </Table>
      </Column>
    </Row>

    <VerticalSpacer twentyPx />

    <Row>
      <Column>
        <BodyShort size="small">
          {girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder))
            && <FormattedMessage id="ResultatGrunnlag.Kap8GirBesteBeregning" />}
          {!girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder))
            && <FormattedMessage id="ResultatGrunnlag.Kap1473GirBesteBeregning" />}
        </BodyShort>
      </Column>
    </Row>
    <VerticalSpacer twentyPx />

  </div>
);

export default BesteberegningResultatGrunnlagPanel;
