import { FormattedMessage } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import type { Behandlingsresultat } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  revurderingsÅrsakString?: string;
  språkKode: string;
  isReadOnly: boolean;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakOpphorRevurderingPanel = ({
  revurderingsÅrsakString,
  språkKode,
  isReadOnly,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <>
    <Label size="small">
      <FormattedMessage id="VedtakForm.Revurdering.Aarsak" />
    </Label>
    {revurderingsÅrsakString && <BodyShort size="small">{revurderingsÅrsakString}</BodyShort>}
    {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
      <VedtakFritekstPanel
        isReadOnly={isReadOnly}
        språkKode={språkKode}
        behandlingsresultat={behandlingsresultat}
        labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
      />
    )}
  </>
);
