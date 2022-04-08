import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@fpsak-frontend/types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';
import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  behandlingsresultat: Behandlingsresultat,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType, undertype?: string) => string,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  const vilkarType = getKodeverkNavn(avslatteVilkar[0].vilkarType, KodeverkType.VILKAR_TYPE);
  return `${vilkarType}: ${getKodeverkNavn(behandlingsresultat.avslagsarsak, KodeverkType.AVSLAGSARSAK, avslatteVilkar[0].vilkarType)}`;
};

interface OwnProps {
  behandlingStatusKode: string;
  vilkar: Vilkar[];
  behandlingsresultat: Behandlingsresultat;
  språkKode: string;
  isReadOnly: boolean;
  ytelseTypeKode: string;
  alleKodeverk: AlleKodeverk;
  beregningErManueltFastsatt: boolean;
  skalBrukeOverstyrendeFritekstBrev: boolean;
}

const VedtakAvslagPanel: FunctionComponent<OwnProps> = ({
  behandlingStatusKode,
  vilkar,
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
  const fritekstfeltForSoknadsfrist = behandlingStatusKode === behandlingStatus.BEHANDLING_UTREDES
    && hasIkkeOppfyltSoknadsfristvilkar(vilkar) && ytelseTypeKode === fagsakYtelseType.ENGANGSSTONAD;
  const textCode = beregningErManueltFastsatt ? 'VedtakForm.Fritekst.Beregningsgrunnlag' : 'VedtakForm.Fritekst';
  return (
    <>
      {getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn) && (
        <div>
          <Undertekst>{intl.formatMessage({ id: 'VedtakForm.ArsakTilAvslag' })}</Undertekst>
          <Normaltekst>
            {getAvslagArsak(vilkar, behandlingsresultat, getKodeverknavn)}
          </Normaltekst>
          <VerticalSpacer sixteenPx />
        </div>
      )}
      {(!skalBrukeOverstyrendeFritekstBrev
        && (fritekstfeltForSoknadsfrist || behandlingsresultat.avslagsarsakFritekst || beregningErManueltFastsatt)) && (
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
