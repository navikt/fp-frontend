import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode, vilkarUtfallType } from '@navikt/fp-kodeverk';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
  UttaksresultatPeriode,
} from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_TILBAKETREKK];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.FERIEPENGEGRUNNLAG,
  BehandlingApiKeys.BEREGNINGRESULTAT_DAGYTELSE,
  BehandlingApiKeys.UTTAKSRESULTAT_PERIODER,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
  beregningresultatDagytelse: BeregningsresultatDagytelse;
  uttaksresultatPerioder: UttaksresultatPeriode;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const TilkjentYtelseFpProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}) => (
  <ProsessDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.TILKJENT_YTELSE}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.TilkjentYtelse' })}
    skalPanelVisesIMeny={() => true}
    hentOverstyrtStatus={() =>
      requestBehandlingApi.hasPath(BehandlingApiKeys.BEREGNINGRESULTAT_DAGYTELSE.name)
        ? vilkarUtfallType.OPPFYLT
        : vilkarUtfallType.IKKE_VURDERT
    }
    renderPanel={data => (
      <TilkjentYtelseProsessIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        personoversikt={personoversikt}
        beregningresultat={data?.beregningresultatDagytelse}
        {...data}
      />
    )}
  />
);

export default TilkjentYtelseFpProsessStegInitPanel;
