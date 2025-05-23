import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';

import { VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  alleKodeverk: AlleKodeverk,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Behandlingsresultat eller avslagsårsak finnes ikke');
  }

  const vilkarType = alleKodeverk['VilkårType'].find(kode => kode.kode === avslatteVilkar[0].vilkarType)?.navn ?? '';

  const årsak =
    alleKodeverk['Avslagsårsak'][avslatteVilkar[0].vilkarType as VilkarType].find(
      kode => kode.kode === behandlingsresultat.avslagsarsak,
    )?.navn ?? '';

  return `${vilkarType}: ${årsak}`;
};

interface Props {
  vilkar?: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkkode: string;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const EMPTY_ARRAY = [] as Vilkar[];

export const VedtakAvslagPanel = ({
  vilkar = EMPTY_ARRAY,
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
      {getAvslagArsak(vilkar, alleKodeverk, behandlingsresultat) && (
        <div>
          <Label size="small">{intl.formatMessage({ id: 'VedtakForm.ArsakTilAvslag' })}</Label>
          <BodyShort size="small">{getAvslagArsak(vilkar, alleKodeverk, behandlingsresultat)}</BodyShort>
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
