import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';

import type { Behandlingsresultat } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  revurderingsÅrsakString?: string;
  språkkode: string;
  isReadOnly: boolean;
  behandlingsresultat?: Behandlingsresultat;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakOpphorRevurderingPanel = ({
  revurderingsÅrsakString,
  språkkode,
  isReadOnly,
  behandlingsresultat,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <>
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="VedtakForm.Revurdering.Aarsak" />
      </Label>
      {revurderingsÅrsakString && <BodyShort size="small">{revurderingsÅrsakString}</BodyShort>}
    </VStack>
    {!skalBrukeOverstyrendeFritekstBrev && beregningErManueltFastsatt && (
      <VedtakFritekstPanel
        isReadOnly={isReadOnly}
        språkkode={språkkode}
        behandlingsresultat={behandlingsresultat}
        labelTextCode="VedtakForm.Fritekst.Beregningsgrunnlag"
      />
    )}
  </>
);
