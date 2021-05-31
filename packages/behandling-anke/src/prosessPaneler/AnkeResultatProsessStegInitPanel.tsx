import React, {
  FunctionComponent, useState,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AnkeResultatProsessDataIndex, ProsessDataAnkeResultat } from '@fpsak-frontend/prosess-anke-resultat';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, Fagsak,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import AnkeBehandlingModal from '../modaler/AnkeBehandlingModal';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.FORESLA_VEDTAK,
  aksjonspunktCodes.FATTER_VEDTAK,
  aksjonspunktCodes.FORESLA_VEDTAK_MANUELT,
  aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL,
];

const ENDEPUNKTER_INIT_DATA = [AnkeBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const getLagringSideeffekter = (
  toggleAnkeModal: (skalViseModal: boolean) => void,
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void,
) => () => {
  toggleOppdatereFagsakContext(false);

  // Returner funksjon som blir kjørt etter lagring av aksjonspunkt(er)
  return () => {
    toggleAnkeModal(true);
  };
};

interface OwnProps {
  behandlingData: {
    fagsak: Fagsak;
    behandling: Behandling;
    alleKodeverk: AlleKodeverk;
  };
  opneSokeside: () => void;
  toggleSkalOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  lagreAksjonspunkter: (params?: any, keepData?: boolean) => Promise<Behandling>;
}

const AnkeResultatProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  behandlingData,
  opneSokeside,
  toggleSkalOppdatereFagsakContext,
  oppdaterProsessStegOgFaktaPanelIUrl,
  lagreAksjonspunkter,
  ...props
}) => {
  const [visModalAnkeBehandling, toggleAnkeModal] = useState(false);
  const lagringSideeffekterCallback = getLagringSideeffekter(toggleAnkeModal, toggleSkalOppdatereFagsakContext);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_RESULTAT}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeResultat' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => {
        const prosessData = new ProsessDataAnkeResultat(requestAnkeApi, behandlingData)
          .medRestEndepunkter(AnkeBehandlingApiKeys.ANKE_VURDERING, AnkeBehandlingApiKeys.PREVIEW_MESSAGE)
          .medAksjonspunkter(data.aksjonspunkter, AKSJONSPUNKT_KODER)
          .medLagring(oppdaterProsessStegOgFaktaPanelIUrl, lagreAksjonspunkter)
          .medLagringSideeffekter(lagringSideeffekterCallback);
        return (
          <>
            <AnkeBehandlingModal
              visModal={visModalAnkeBehandling}
              lukkModal={() => { toggleAnkeModal(false); opneSokeside(); }}
              erFerdigbehandlet={!!data?.aksjonspunkter && data.aksjonspunkter
                .some((ap) => ap.definisjon.kode === aksjonspunktCodes.VEDTAK_UTEN_TOTRINNSKONTROLL
                  && ap.status.kode === aksjonspunktStatus.UTFORT)}
              venterTrygderett={false}
            />
            <AnkeResultatProsessDataIndex
              prosessData={prosessData}
              isReadOnly={data.isReadOnly}
              readOnlySubmitButton={data.readOnlySubmitButton}
              formData={data.formData}
              setFormData={data.setFormData}
            />
          </>
        );
      }}
    />
  );
};

export default AnkeResultatProsessStegInitPanel;
