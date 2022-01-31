import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { Behandlingsresultat } from '@fpsak-frontend/types';

import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

interface OwnProps {
  revurderingsÅrsakString?: string;
  språkKode?: string;
  isReadOnly: boolean;
  behandlingsresultat: Behandlingsresultat;
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
    <Undertekst>
      <FormattedMessage id="VedtakForm.RevurderingFP.Aarsak" />
    </Undertekst>
    {revurderingsÅrsakString && (
      <Normaltekst>
        {revurderingsÅrsakString}
      </Normaltekst>
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
);

export default VedtakOpphorRevurderingPanel;
