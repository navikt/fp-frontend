import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { AlleKodeverk, Vilkar, Behandlingsresultat } from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import { hasIkkeOppfyltSoknadsfristvilkar } from '../felles/VedtakHelper';
import VedtakFritekstPanel from '../felles/VedtakFritekstPanel';

export const getAvslagArsak = (
  vilkar: Vilkar[],
  behandlingsresultat: Behandlingsresultat,
  getKodeverknavn: (kodeverk: string, undertype?: string) => string,
): ReactElement | string => {
  const avslatteVilkar = vilkar.filter((v) => v.vilkarStatus === vilkarUtfallType.IKKE_OPPFYLT);
  if (avslatteVilkar.length === 0) {
    return <FormattedMessage id="VedtakForm.UttaksperioderIkkeGyldig" />;
  }

  return `${getKodeverknavn(avslatteVilkar[0].vilkarType)}: ${getKodeverknavn(behandlingsresultat.avslagsarsak, avslatteVilkar[0].vilkarType)}`;
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
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk, kodeverkTyper);
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
