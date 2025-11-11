import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import type { AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

interface Props {
  vilkår: Vilkar[];
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
}: Props) => {
  const intl = useIntl();
  const textCode = beregningErManueltFastsatt ? 'VedtakForm.Fritekst.Beregningsgrunnlag' : 'VedtakForm.Fritekst';
  return (
    <>
      {getAvslagÅrsak(vilkår, alleKodeverk, behandlingsresultat) && (
        <div>
          <Label size="small">{intl.formatMessage({ id: 'VedtakForm.ArsakTilAvslag' })}</Label>
          <BodyShort size="small">{getAvslagÅrsak(vilkår, alleKodeverk, behandlingsresultat)}</BodyShort>
        </div>
      )}
      {!skalBrukeOverstyrendeFritekstBrev && (
        <VedtakFritekstPanel
          isReadOnly={isReadOnly}
          språkkode={språkkode}
          behandlingsresultat={behandlingsresultat}
          labelTextCode={textCode}
        />
      )}
    </>
  );
};

const getAvslagÅrsak = (
  vilkar: Vilkar[],
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
