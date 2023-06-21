import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  behandlingStatus,
  fagsakYtelseType,
  getKodeverknavnFn,
  vilkarUtfallType,
  KodeverkType,
} from '@navikt/fp-kodeverk';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';
import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
  behandlingsresultat?: Behandlingsresultat,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter(v => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
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

interface OwnProps {
  behandlingStatusKode: string;
  vilkar?: Vilkar[];
  behandlingsresultat?: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  ytelseTypeKode: string;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const EMPTY_ARRAY = [] as Vilkar[];

const VedtakAvslagPanel: FunctionComponent<OwnProps> = ({
  behandlingStatusKode,
  vilkar = EMPTY_ARRAY,
  behandlingsresultat,
  språkKode,
  isReadOnly,
  ytelseTypeKode,
  alleKodeverk,
  beregningErManueltFastsatt,
  skalBrukeOverstyrendeFritekstBrev,
}) => {
  const intl = useIntl();
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const fritekstfeltForSoknadsfrist =
    behandlingStatusKode === behandlingStatus.BEHANDLING_UTREDES &&
    hasIkkeOppfyltSoknadsfristvilkar(vilkar) &&
    ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD;
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
      {!skalBrukeOverstyrendeFritekstBrev &&
        (fritekstfeltForSoknadsfrist || behandlingsresultat?.avslagsarsakFritekst || beregningErManueltFastsatt) && (
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

export default VedtakAvslagPanel;
