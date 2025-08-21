import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { formatCurrencyWithKr } from '@navikt/ft-utils';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
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
    {ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD && beregningsresultat && 'antallBarn' in beregningsresultat && (
      <HStack gap="space-8">
        <VStack gap="space-4">
          <Detail>
            <FormattedMessage id="VedtakForm.beregnetTilkjentYtelse" />
          </Detail>
          <Label size="small">{formatCurrencyWithKr(beregningsresultat.beregnetTilkjentYtelse)}</Label>
        </VStack>
        <VStack gap="space-4">
          <Detail>
            <FormattedMessage id="VedtakForm.AntallBarn" />
          </Detail>
          <Label size="small">{beregningsresultat.antallBarn}</Label>
        </VStack>
      </HStack>
    )}
    {(ytelseTypeKode === FagsakYtelseType.FORELDREPENGER || ytelseTypeKode === FagsakYtelseType.SVANGERSKAPSPENGER) && (
      <>
        {revurderingsÅrsakString && (
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="VedtakForm.Revurdering.Aarsak" />
            </Label>
            <BodyShort size="small">{revurderingsÅrsakString}</BodyShort>
          </VStack>
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
