import { FormattedMessage } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';

import type { Behandlingsresultat, BeregningsresultatDagytelse, BeregningsresultatEs } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  ytelseTypeKode: string;
  revurderingsÅrsakString?: string;
  isReadOnly: boolean;
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  språkkode: string;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakInnvilgetRevurderingPanel = ({
  ytelseTypeKode,
  revurderingsÅrsakString,
  isReadOnly,
  beregningsresultat,
  språkkode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <VStack gap="space-16">
    {ytelseTypeKode === 'ES' && beregningsresultat && 'antallBarn' in beregningsresultat && (
      <HStack gap="space-8">
        <LabeledValue
          size="small"
          label={<FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" />}
          value={<BeløpLabel beløp={beregningsresultat.beregnetTilkjentYtelse} kr />}
        />

        <LabeledValue
          size="small"
          label={<FormattedMessage id="VedtakForm.AntallBarn" />}
          value={beregningsresultat.antallBarn}
        />
      </HStack>
    )}

    {(ytelseTypeKode === 'FP' || ytelseTypeKode === 'SVP') && (
      <>
        {revurderingsÅrsakString && (
          <LabeledValue
            size="small"
            label={<FormattedMessage id="VedtakForm.Revurdering.Aarsak" />}
            value={revurderingsÅrsakString}
          />
        )}
        {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
          <VedtakFritekstPanel
            isReadOnly={isReadOnly}
            språkkode={språkkode}
            behandlingsresultat={behandlingsresultat}
            labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
          />
        )}
      </>
    )}
  </VStack>
);
