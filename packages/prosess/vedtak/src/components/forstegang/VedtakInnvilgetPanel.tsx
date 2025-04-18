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
      {ytelseTypeKode === FagsakYtelseType.ENGANGSSTONAD &&
        beregningsresultat &&
        'antallBarn' in beregningsresultat && (
          <HStack gap="2">
            <VStack gap="1">
              <Detail>{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Detail>
              <Label size="small">
                {formatCurrencyWithKr((beregningsresultat as BeregningsresultatEs).beregnetTilkjentYtelse)}
              </Label>
            </VStack>
            <VStack gap="1">
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
