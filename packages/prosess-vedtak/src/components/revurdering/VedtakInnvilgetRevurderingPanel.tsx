import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { formatCurrencyWithKr } from '@navikt/ft-utils';
import { fagsakYtelseType } from '@navikt/fp-kodeverk';
import { Behandlingsresultat, BeregningsresultatFp, BeregningsresultatEs } from '@navikt/fp-types';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  ytelseTypeKode: string;
  revurderingsÅrsakString?: string;
  isReadOnly: boolean;
  resultatstruktur?: BeregningsresultatFp | BeregningsresultatEs;
  språkKode: string;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakInnvilgetRevurderingPanel: FunctionComponent<OwnProps> = ({
  ytelseTypeKode,
  revurderingsÅrsakString,
  isReadOnly,
  resultatstruktur,
  språkKode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => (
  <>
    {ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD && resultatstruktur && 'antallBarn' in resultatstruktur && (
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Detail>
              <FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" />
            </Detail>
            <Label size="small">
              {formatCurrencyWithKr((resultatstruktur as BeregningsresultatEs).beregnetTilkjentYtelse)}
            </Label>
          </FlexColumn>
          <FlexColumn>
            <Detail>
              <FormattedMessage id="VedtakForm.AntallBarn" />
            </Detail>
            <Label size="small">{resultatstruktur.antallBarn}</Label>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    )}
    {(ytelseTypeKode === fagsakYtelseType.FORELDREPENGER || ytelseTypeKode === fagsakYtelseType.SVANGERSKAPSPENGER) && (
      <>
        {revurderingsÅrsakString && (
          <>
            <Label size="small">
              <FormattedMessage id="VedtakForm.RevurderingFP.Aarsak" />
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
