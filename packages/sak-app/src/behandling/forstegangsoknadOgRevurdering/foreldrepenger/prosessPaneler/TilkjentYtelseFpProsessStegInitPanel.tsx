import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilkjentYtelseProsessIndex from '@fpsak-frontend/prosess-tilkjent-ytelse';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  ArbeidsgiverOpplysningerPerId, BeregningsresultatFp, Fagsak, FamilieHendelseSamling, Feriepengegrunnlag, Personoversikt, Soknad, UttaksresultatPeriode,
} from '@fpsak-frontend/types';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

import ProsessDefaultInitPanel from '../../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import { FpBehandlingApiKeys } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_TILBAKETREKK];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.SOKNAD,
  BehandlingFellesApiKeys.FERIEPENGEGRUNNLAG,
  BehandlingFellesApiKeys.BEREGNINGRESULTAT_FORELDREPENGER,
  FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
  beregningresultatForeldrepenger: BeregningsresultatFp;
  uttaksresultatPerioder: UttaksresultatPeriode;
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
  <ProsessDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
    skalPanelVisesIMeny={() => true}
    hentOverstyrtStatus={() => (
      props.requestApi.hasPath(BehandlingFellesApiKeys.BEREGNINGRESULTAT_FORELDREPENGER.name) ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT
    )}
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
