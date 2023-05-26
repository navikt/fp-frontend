import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FamilieHendelse, FamilieHendelseSamling } from '@navikt/ft-types';

import { AksjonspunktCode, fodselsvilkarene } from '@navikt/fp-kodeverk';
import { FodselFaktaIndex } from '@navikt/fp-fakta-fodsel';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.TERMINBEKREFTELSE, AksjonspunktCode.SJEKK_MANGLENDE_FODSEL];

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

/**
 * FodselvilkaretFaktaInitPanel
 */
const FodselvilkaretFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = props => {
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
      skalPanelVisesIMeny={() => !!vilkår && vilkår.some(v => fodselsvilkarene.some(fv => fv === v.vilkarType))}
      renderPanel={data => <FodselFaktaIndex {...data} />}
    />
  );
};

export default FodselvilkaretFaktaInitPanel;
