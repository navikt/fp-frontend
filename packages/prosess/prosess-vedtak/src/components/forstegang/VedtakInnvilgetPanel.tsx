import { useIntl } from 'react-intl';

import { Detail, Label } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Detail>{intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}</Detail>
                <Label size="small">
                  {formatCurrencyWithKr((beregningsresultat as BeregningsresultatEs).beregnetTilkjentYtelse)}
                </Label>
              </FlexColumn>
              <FlexColumn>
                <Detail>{intl.formatMessage({ id: 'VedtakForm.AntallBarn' })}</Detail>
                <Label size="small">{beregningsresultat.antallBarn}</Label>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer sixteenPx />
          </FlexContainer>
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
