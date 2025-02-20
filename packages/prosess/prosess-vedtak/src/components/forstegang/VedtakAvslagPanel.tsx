import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Label } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { getKodeverknavnFn, KodeverkType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, Behandlingsresultat, Vilkar } from '@navikt/fp-types';

import { VedtakFritekstPanel } from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  if (!behandlingsresultat?.avslagsarsak) {
    throw new Error('Behandlingsresultat eller avslagsårsak finnes ikke');
  }

  const vilkarType = getKodeverkNavn(avslatteVilkar[0].vilkarType, KodeverkType.VILKAR_TYPE);
  return `${vilkarType}: ${getKodeverkNavn(
    behandlingsresultat.avslagsarsak,
    KodeverkType.AVSLAGSARSAK,
    avslatteVilkar[0].vilkarType,
  )}`;
};

interface Props {
  vilkar?: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const EMPTY_ARRAY = [] as Vilkar[];

export const VedtakAvslagPanel = ({
  vilkar = EMPTY_ARRAY,
  behandlingsresultat,
  språkKode,
  isReadOnly,
  alleKodeverk,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}: Props) => {
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const textCode = beregningErManueltFastsatt ? 'VedtakForm.Fritekst.Beregningsgrunnlag' : 'VedtakForm.Fritekst';
  return (
    <>
      {getAvslagArsak(vilkar, getKodeverknavn, behandlingsresultat) && (
        <div>
          <Label size="small">{intl.formatMessage({ id: 'VedtakForm.ArsakTilAvslag' })}</Label>
          <BodyShort size="small">{getAvslagArsak(vilkar, getKodeverknavn, behandlingsresultat)}</BodyShort>
          <VerticalSpacer sixteenPx />
        </div>
      )}
      {!skalBrukeOverstyrendeFritekstBrev && (
        <VedtakFritekstPanel
          isReadOnly={isReadOnly}
          språkKode={språkKode}
          behandlingsresultat={behandlingsresultat}
          labelTextCode={textCode}
        />
      )}
    </>
  );
};
