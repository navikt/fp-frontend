import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { LabeledValue } from '@navikt/ft-ui-komponenter';

import type { AlleKodeverk, Behandlingsresultat, Vilkår } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  vilkår: Vilkår[];
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

export const VedtakAvslagPanel = ({
  vilkår,
  behandlingsresultat,
  språkkode,
  isReadOnly,
  alleKodeverk,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => (
  <>
    <LabeledValue
      size="small"
      label={<FormattedMessage id="VedtakForm.ArsakTilAvslag" />}
      value={getAvslagÅrsak(vilkår, alleKodeverk, behandlingsresultat)}
    />
    {!skalBrukeOverstyrendeFritekstBrev && (
      <VedtakFritekstPanel
        isReadOnly={isReadOnly}
        språkkode={språkkode}
        behandlingsresultat={behandlingsresultat}
        labelTextCode={beregningErManueltFastsatt ? 'VedtakForm.Fritekst.Beregningsgrunnlag' : 'VedtakForm.Fritekst'}
      />
    )}
  </>
);

const getAvslagÅrsak = (
  vilkar: Vilkår[],
  alleKodeverk: AlleKodeverk,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === 'IKKE_OPPFYLT');
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Behandlingsresultat eller avslagsårsak finnes ikke');
  }

  const vilkarType = alleKodeverk['VilkårType'].find(({ kode }) => kode === avslatteVilkar[0]?.vilkarType)?.navn ?? '';

  const årsak = alleKodeverk['Avslagsårsak'].find(({ kode }) => kode === behandlingsresultat.avslagsarsak)?.navn ?? '';

  return `${vilkarType}: ${årsak}`;
};
