import React from 'react';
import { useIntl } from 'react-intl';

import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { AksjonspunktKode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.TERMINBEKREFTELSE, AksjonspunktKode.SJEKK_MANGLENDE_FODSEL];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
];

type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
};

export const FodselvilkaretFaktaInitPanel = (props: FaktaPanelInitProps) => {
  const {
    behandling: { vilkår },
  } = props;
  return (
    <FaktaDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
      faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' })}
      skalPanelVisesIMeny={() => vilkår.some(v => fodselsvilkarene.some(fv => fv === v.vilkarType))}
      renderPanel={data => <FodselFaktaIndex {...data} />}
    />
  );
};
