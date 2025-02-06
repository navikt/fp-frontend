import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Label } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import { Behandlingsresultat, BeregningsresultatDagytelse, BeregningsresultatEs } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  ytelseTypeKode: string;
  revurderingsÅrsakString?: string;
  isReadOnly: boolean;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  språkKode: string;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakInnvilgetRevurderingPanel = ({
  ytelseTypeKode,
  revurderingsÅrsakString,
  isReadOnly,
  beregningsresultat,
  språkKode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <>
    {ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD && beregningsresultat && 'antallBarn' in beregningsresultat && (
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Detail>
              <FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" />
            </Detail>
            <Label size="small">
              {formatCurrencyWithKr((beregningsresultat as BeregningsresultatEs).beregnetTilkjentYtelse)}
            </Label>
          </FlexColumn>
          <FlexColumn>
            <Detail>
              <FormattedMessage id="VedtakForm.AntallBarn" />
            </Detail>
            <Label size="small">{beregningsresultat.antallBarn}</Label>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    )}
    {(ytelseTypeKode === FagsakYtelseType.FORELDREPENGER || ytelseTypeKode === FagsakYtelseType.SVANGERSKAPSPENGER) && (
      <>
        {revurderingsÅrsakString && (
          <>
            <Label size="small">
              <FormattedMessage id="VedtakForm.Revurdering.Aarsak" />
            </Label>
            <BodyShort size="small">{revurderingsÅrsakString}</BodyShort>
            <VerticalSpacer eightPx />
          </>
        )}
        {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
          <VedtakFritekstPanel
            isReadOnly={isReadOnly}
            språkKode={språkKode}
            behandlingsresultat={behandlingsresultat}
            labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
          />
        )}
      </>
    )}
  </>
);
