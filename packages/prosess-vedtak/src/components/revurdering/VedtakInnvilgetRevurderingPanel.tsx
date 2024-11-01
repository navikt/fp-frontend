import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';
import { Behandlingsresultat, BeregningsresultatDagytelse, BeregningsresultatEs } from '@navikt/fp-types';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  ytelseTypeKode: string;
  revurderingsÅrsakString?: string;
  isReadOnly: boolean;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  språkKode: string;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakInnvilgetRevurderingPanel: FunctionComponent<OwnProps> = ({
  ytelseTypeKode,
  revurderingsÅrsakString,
  isReadOnly,
  beregningsresultat,
  språkKode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => (
  <>
    {ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD && beregningsresultat && 'antallBarn' in beregningsresultat && (
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
    {(ytelseTypeKode === fagsakYtelseType.FORELDREPENGER || ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER) && (
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

export default VedtakInnvilgetRevurderingPanel;
