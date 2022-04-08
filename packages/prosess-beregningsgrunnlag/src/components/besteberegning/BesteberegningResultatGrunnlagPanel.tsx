import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  Månedsgrunnlag,
} from '@fpsak-frontend/types';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import {
  VerticalSpacer,
  Table, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';

interface OwnProps {
  periode: BeregningsgrunnlagPeriodeProp;
  besteMåneder: Månedsgrunnlag[];
}

const erBeløpSatt = (beløp: number): boolean => !!beløp || beløp === 0;

const finnGjeldendeBeløp = (andel: BeregningsgrunnlagAndel): number => (erBeløpSatt(andel.overstyrtPrAar) ? andel.overstyrtPrAar : andel.beregnetPrAar);

const finnKap8Beregning = (periode: BeregningsgrunnlagPeriodeProp): number => periode.beregningsgrunnlagPrStatusOgAndel
  .map((andel) => finnGjeldendeBeløp(andel)).reduce((i1, i2) => i1 + i2, 0);

const finnBesteberegnet = (besteMåneder : Månedsgrunnlag[]): number => (
  besteMåneder.flatMap((måned) => måned.inntekter).map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0) * 2
);

const girKap8Besteberegning = (kap8Beregning: number, kap1473Beregning: number): boolean => (kap8Beregning > kap1473Beregning);

const headerColumnContent = [
  // For å lage tom kolonne først
  <div key="TomKolNøkkel" />,
  <Element key="Kap8Nøkkel">
    {' '}
    <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterKap8" />
    {' '}
  </Element>,
  <Element key="BBNøkkel">
    {' '}
    <FormattedMessage id="Besteberegning.ResultatGrunnlag.BeregningEtterBesteberegning" />
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
}) => {
  if (!besteMåneder || besteMåneder.length < 1) {
    return null;
  }
  const kap8Beregning = finnKap8Beregning(periode);
  const besteberegnet = finnBesteberegnet(besteMåneder);
  return (
    <div>
      <Row>
        <Column>
          <FormattedMessage id="Besteberegning.ResultatGrunnlag.BrukerOmfattesAvBesteberegning" />
        </Column>
      </Row>
      <VerticalSpacer twentyPx />
      <Row>
        <Column xs="12">
          <Table headerColumnContent={headerColumnContent} noHover>
            <TableRow>
              <TableColumn>
                <Normaltekst>
                  <FormattedMessage id="Besteberegning.ResultatGrunnlag.BruttoBeregningsgrunnlag" />
                </Normaltekst>
              </TableColumn>
              <TableColumn>
                <Normaltekst>
                  {formatCurrencyNoKr(kap8Beregning)}
                </Normaltekst>
              </TableColumn>
              <TableColumn>
                <Normaltekst>
                  {formatCurrencyNoKr(besteberegnet)}
                </Normaltekst>
              </TableColumn>
            </TableRow>
          </Table>
        </Column>
      </Row>
      <Row>
        <Column>
          <Normaltekst>
            {girKap8Besteberegning(kap8Beregning, besteberegnet) && (
              <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1471GirBesteBeregning" />
            )}
            {!girKap8Besteberegning(kap8Beregning, besteberegnet) && (
              <FormattedMessage id="Besteberegning.ResultatGrunnlag.Kap1473GirBesteBeregning" />
            )}
          </Normaltekst>
        </Column>
      </Row>
    </div>
  );
};

export default BesteberegningResultatGrunnlagPanel;
