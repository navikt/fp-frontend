import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import periodeResultatType from '@fpsak-frontend/kodeverk/src/periodeResultatType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, BeregningsresultatFp,
  Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personoversikt, Soknad, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const getStatusFromResultatstruktur = (resultatstruktur?: BeregningsresultatFp, uttaksresultat?: UttaksresultatPeriode): string => {
  if (resultatstruktur && resultatstruktur.perioder && resultatstruktur.perioder.length > 0) {
    if (!resultatstruktur.perioder.some((p) => p.dagsats > 0)) {
      return vilkarUtfallType.IKKE_VURDERT;
    }
    if (uttaksresultat && uttaksresultat.perioderSøker.length > 0) {
      const oppfylt = uttaksresultat.perioderSøker.some((p) => (
        p.periodeResultatType !== periodeResultatType.AVSLATT
      ));
      if (oppfylt) {
        return vilkarUtfallType.OPPFYLT;
      }
    }
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_TILBAKETREKK];

const ENDEPUNKTER_INIT_DATA = [
  BehandlingFellesApiKeys.AKSJONSPUNKTER,
  BehandlingFellesApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
}

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.SOKNAD,
  BehandlingFellesApiKeys.FERIEPENGEGRUNNLAG,
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

const TilkjentYtelseFpProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  fagsak,
  personoversikt,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
    skalPanelVisesIMeny={(_data, initState) => initState === RestApiState.SUCCESS}
    hentOverstyrtStatus={(initData) => getStatusFromResultatstruktur(initData.beregningresultatForeldrepenger, initData.uttaksresultatPerioder)}
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

export default TilkjentYtelseFpProsessStegInitPanel;
