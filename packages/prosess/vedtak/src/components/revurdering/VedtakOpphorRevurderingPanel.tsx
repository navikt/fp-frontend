import { FormattedMessage } from 'react-intl';

import { LabeledValue } from '@navikt/ft-ui-komponenter';

import type { Behandlingsresultat } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  revurderingsÅrsakString?: string;
  språkkode: string;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakOpphorRevurderingPanel = ({
  revurderingsÅrsakString,
  språkkode,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <>
    <LabeledValue
      size="small"
      label={<FormattedMessage id="VedtakForm.Revurdering.Aarsak" />}
      value={revurderingsÅrsakString ?? '-'}
    />

    {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
      <VedtakFritekstPanel
        språkkode={språkkode}
        behandlingsresultat={behandlingsresultat}
        labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
      />
    )}
  </>
);
