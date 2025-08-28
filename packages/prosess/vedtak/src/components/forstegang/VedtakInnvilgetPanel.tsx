import { useIntl } from 'react-intl';

import { Detail, HStack, Label, VStack } from '@navikt/ds-react';
import { formatCurrencyWithKr } from '@navikt/ft-utils';

import { FagsakYtelseType } from '@navikt/fp-kodeverk';
import type { Behandlingsresultat, BeregningsresultatDagytelse, BeregningsresultatEs } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  beregningsresultat?: BeregningsresultatDagytelse | BeregningsresultatEs;
  behandlingsresultat?: Behandlingsresultat;
  ytelseTypeKode: string;
  språkkode: string;
  isReadOnly: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
  beregningErManueltFastsatt: boolean;
}

export const VedtakInnvilgetPanel = ({
  behandlingsresultat,
  ytelseTypeKode,
  språkkode,
  isReadOnly,
  skalBrukeOverstyrendeFritekstBrev,
  beregningErManueltFastsatt,
  beregningsresultat = {},
}: Props) => {
  const intl = useIntl();
  return (
    <>
      {ytelseTypeKode === 'ES' && beregningsresultat && 'antallBarn' in beregningsresultat && (
        <HStack gap="space-8">
          <VStack gap="space-4">
            <Detail>{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Detail>
            <Label size="small">{formatCurrencyWithKr(beregningsresultat.beregnetTilkjentYtelse)}</Label>
          </VStack>
          <VStack gap="space-4">
            <Detail>{intl.formatMessage({ id: 'VedtakForm.AntallBarn' })}</Detail>
            <Label size="small">{beregningsresultat.antallBarn}</Label>
          </VStack>
        </HStack>
      )}
      {beregningErManueltFastsatt && !skalBrukeOverstyrendeFritekstBrev && (
        <VedtakFritekstPanel
          isReadOnly={isReadOnly}
          språkkode={språkkode}
          behandlingsresultat={behandlingsresultat}
          labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
        />
      )}
    </>
  );
};
