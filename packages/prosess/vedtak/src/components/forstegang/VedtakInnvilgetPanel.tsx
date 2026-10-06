import { FormattedMessage, useIntl } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { BeløpLabel, LabeledValue } from '@navikt/ft-ui-komponenter';

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
      {ytelseTypeKode === 'ES' && 'antallBarn' in beregningsresultat && (
        <HStack gap="space-16">
          <LabeledValue
            size="small"
            label={intl.formatMessage({ id: 'VedtakForm.beregnetTilkjentYtelse' })}
            value={<BeløpLabel beløp={beregningsresultat.beregnetTilkjentYtelse} kr />}
          />

          <LabeledValue
            size="small"
            label={<FormattedMessage id="VedtakForm.AntallBarn" />}
            value={beregningsresultat.antallBarn}
          />
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
