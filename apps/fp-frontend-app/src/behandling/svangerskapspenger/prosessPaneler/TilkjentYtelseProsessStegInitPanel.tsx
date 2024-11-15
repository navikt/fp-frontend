import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_TILBAKETREKK];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.BEREGNINGRESULTAT_DAGYTELSE,
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.FERIEPENGEGRUNNLAG,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  feriepengegrunnlag: Feriepengegrunnlag;
  beregningresultatDagytelse: BeregningsresultatDagytelse;
};

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

const TilkjentYtelseProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
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
        ? VilkarUtfallType.OPPFYLT
        : VilkarUtfallType.IKKE_VURDERT
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

export default TilkjentYtelseProsessStegInitPanel;
