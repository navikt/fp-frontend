import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort,Label } from '@navikt/ds-react';

import { Behandlingsresultat } from '@navikt/fp-types';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  revurderingsÅrsakString?: string;
  språkKode: string;
  isReadOnly: boolean;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakOpphorRevurderingPanel: FunctionComponent<OwnProps> = ({
  revurderingsÅrsakString,
  språkKode,
  isReadOnly,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => (
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

export default VedtakOpphorRevurderingPanel;
