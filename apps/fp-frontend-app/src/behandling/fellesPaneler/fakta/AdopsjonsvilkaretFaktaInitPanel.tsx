import React from 'react';
import { useIntl } from 'react-intl';

import { AdopsjonFaktaIndex } from '@navikt/fp-fakta-adopsjon';
import { adopsjonsvilkarene, AksjonspunktKode, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Fagsak, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [
  AksjonspunktKode.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  AksjonspunktKode.ADOPSJONSDOKUMENTAJON,
  AksjonspunktKode.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.FAMILIEHENDELSE, BehandlingApiKeys.SOKNAD];

type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
};

interface Props {
  fagsak: Fagsak;
}

export const AdopsjonsvilkaretFaktaInitPanel = ({ fagsak, ...props }: Props & FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FaktaInitPanel.Title.Adopsjon' })}
    skalPanelVisesIMeny={() => props.behandling.vilkår.some(v => adopsjonsvilkarene.some(av => av === v.vilkarType))}
    renderPanel={data => (
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
        {...data}
      />
    )}
  />
);
