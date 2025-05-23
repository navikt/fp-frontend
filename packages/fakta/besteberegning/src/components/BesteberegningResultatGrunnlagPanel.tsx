import { FormattedMessage } from 'react-intl';

import { BodyShort, Table, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import type { BeregningsgrunnlagAndel, BeregningsgrunnlagPeriodeProp, Månedsgrunnlag } from '@navikt/fp-types';

interface Props {
  periode: BeregningsgrunnlagPeriodeProp;
  besteMåneder: Månedsgrunnlag[];
}

const erBeløpSatt = (beløp?: number): boolean => !!beløp || beløp === 0;

const hentBeløpEller0 = (beløp?: number): number => beløp ?? 0;

const finnGjeldendeBeløp = (andel: BeregningsgrunnlagAndel): number =>
  erBeløpSatt(andel.overstyrtPrAar) ? hentBeløpEller0(andel.overstyrtPrAar) : hentBeløpEller0(andel.beregnetPrAar);

const finnKap8Beregning = (periode: BeregningsgrunnlagPeriodeProp): number => {
  const andeler = periode.beregningsgrunnlagPrStatusOgAndel || [];
  return andeler.map(andel => finnGjeldendeBeløp(andel)).reduce((i1, i2) => i1 + i2, 0);
};
const finnBesteberegnet = (besteMåneder: Månedsgrunnlag[]): number =>
  besteMåneder
    .flatMap(måned => måned.inntekter)
    .map(({ inntekt }) => inntekt)
    .reduce((i1, i2) => i1 + i2, 0) * 2;

const girKap8Besteberegning = (kap8Beregning: number, kap1473Beregning: number): boolean =>
  kap8Beregning > kap1473Beregning;

/**
 * BesteberegningResultatGrunnlagPanel
 *
 * Presentasjonskomponent. Viser sammenligning av kap 8 beregning og §14-7, ledd 3 beregning.
 */
export const BesteberegningResultatGrunnlagPanel = ({ periode, besteMåneder }: Props) => (
  <VStack gap="4">
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" />
          <Table.HeaderCell scope="col">
            <FormattedMessage id="ResultatGrunnlag.BeregningEtterKap8" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="ResultatGrunnlag.BeregningEtterBesteberegning" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell textSize="small">
            <FormattedMessage id="ResultatGrunnlag.BruttoBeregningsgrunnlag" />
          </Table.DataCell>
          <Table.DataCell textSize="small">
            <BeløpLabel beløp={finnKap8Beregning(periode)} />
          </Table.DataCell>
          <Table.DataCell textSize="small">
            <BeløpLabel beløp={finnBesteberegnet(besteMåneder)} />
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
    <BodyShort size="small">
      {girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder)) && (
        <FormattedMessage id="ResultatGrunnlag.Kap8GirBesteBeregning" />
      )}
      {!girKap8Besteberegning(finnKap8Beregning(periode), finnBesteberegnet(besteMåneder)) && (
        <FormattedMessage id="ResultatGrunnlag.Kap1473GirBesteBeregning" />
      )}
    </BodyShort>
  </VStack>
);
