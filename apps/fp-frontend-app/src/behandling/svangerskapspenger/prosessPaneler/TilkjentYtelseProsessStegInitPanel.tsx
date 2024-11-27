import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { TilkjentYtelseProsessIndex } from '@navikt/fp-prosess-tilkjent-ytelse';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelseSamling,
  Feriepengegrunnlag,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

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

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  personoversikt: Personoversikt;
}

export const TilkjentYtelseProsessStegInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  personoversikt,
  ...props
}: Props & ProsessPanelInitProps) => (
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
