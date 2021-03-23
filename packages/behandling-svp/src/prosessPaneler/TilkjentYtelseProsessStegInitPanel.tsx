import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, BeregningsresultatFp,
  Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const getStatusFromResultatstruktur = (resultatstruktur: BeregningsresultatFp): string => {
  if (resultatstruktur && resultatstruktur.perioder.length > 0) {
    if (!resultatstruktur.perioder.some((p) => p.dagsats > 0)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    return vilkarUtfallType.OPPFYLT;
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_TILBAKETREKK];

const ENDEPUNKTER_INIT_DATA = [
  SvpBehandlingApiKeys.AKSJONSPUNKTER,
  SvpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningresultatForeldrepenger: BeregningsresultatFp;
}

const ENDEPUNKTER_PANEL_DATA = [
  SvpBehandlingApiKeys.FAMILIEHENDELSE,
  SvpBehandlingApiKeys.SOKNAD,
  SvpBehandlingApiKeys.FERIEPENGEGRUNNLAG,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fagsak: Fagsak;
  personoversikt: Personoversikt;
}

const TilkjentYtelseProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  fagsak,
  personoversikt,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={prosessStegCodes.TILKJENT_YTELSE}
    prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
    skalPanelVisesIMeny={(_data, initState) => initState === RestApiState.SUCCESS}
    hentOverstyrtStatus={(data) => getStatusFromResultatstruktur(data?.beregningresultatForeldrepenger)}
    renderPanel={(data) => (
      <TilkjentYtelseProsessIndex
        fagsak={fagsak}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        beregningresultat={data?.beregningresultatForeldrepenger}
        {...data}
      />
    )}
  />
);

export default TilkjentYtelseProsessStegInitPanel;
