import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { Button } from '@navikt/ds-react';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from '@navikt/ds-react-internal';
import { getMenytekst as getNyBehandlingMenytekst } from '@navikt/fp-sak-meny-ny-behandling';
import { getEndreEnhetMenytekst, getVergeMenytekst, getTaAvVentMenytekst } from '@navikt/ft-sak-meny';
import { getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import { getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import { getMenytekst as getApneForEndringerMenytekst } from '@navikt/fp-sak-meny-apne-for-endringer';
import { getMenytekst as getEndreUtlandMenytekst } from '@navikt/fp-sak-meny-endre-utland';
import { Behandling, BehandlingAppKontekst, Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import FagsakData from '../fagsak/FagsakData';
import NyBehandlingMenyModal from './modaler/NyBehandlingMenyModal';
import ApneForEndringerMenyModal from './modaler/ApneForEndringerMenyModal';
import HenleggMenyModal from './modaler/HenleggMenyModal';
import EndreBehandlendeEnhetMenyModal from './modaler/EndreBehandlendeEnhetMenyModal';
import SettPaVentMenyModal from './modaler/SettPaVentMenyModal';
import TaAvVentMenyModal from './modaler/TaAvVentMenyModal';
import EndreFagsakMarkeringMenyModal from './modaler/EndreFagsakMarkeringMenyModal';
import VergeMenyModal from './modaler/VergeMenyModal';

import '@navikt/ft-sak-meny/dist/style.css';

enum ModalType {
  NY_BEHANDLING = 'NY_BEHANDLING',
  VERGE = 'VERGE',
  ENDRE_FAGSAK_MARKERING = 'ENDRE_FAGSAK_MARKERING',
  ÅPNE_FOR_ENDRINGER = 'ÅPNE_FOR_ENDRINGER',
  ENDRE_BEHANDLENDE_ENHET = 'ENDRE_BEHANDLENDE_ENHET',
  HENLEGG = 'HENLEGG',
  SETT_PÅ_VENT = 'SETT_PÅ_VENT',
  TA_AV_VENT = 'TA_AV_VENT',
}

const hentMenyData = (behandling: BehandlingAppKontekst | undefined, fagsak: Fagsak) => {
  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const vergeMenyvalg = behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const skalViseFjernVerge =
    vergeMenyvalg === VergeBehandlingmenyValg.FJERN && !!behandling?.uuid && !!behandling?.versjon;
  const skalViseOpprettVerge =
    vergeMenyvalg === VergeBehandlingmenyValg.OPPRETT && !!behandling?.uuid && !!behandling?.versjon;

  return {
    [ModalType.TA_AV_VENT]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanGjenopptas,
      text: getTaAvVentMenytekst(),
    },
    [ModalType.SETT_PÅ_VENT]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanSettesPaVent,
      text: getSettPaVentMenytekst(),
    },
    [ModalType.HENLEGG]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanHenlegges,
      text: getHenleggMenytekst(),
    },
    [ModalType.ENDRE_BEHANDLENDE_ENHET]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanBytteEnhet,
      text: getEndreEnhetMenytekst(),
    },
    [ModalType.ÅPNE_FOR_ENDRINGER]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanOpnesForEndringer,
      text: getApneForEndringerMenytekst(),
    },
    [ModalType.NY_BEHANDLING]: {
      disabled: fagsak.sakSkalTilInfotrygd,
      text: getNyBehandlingMenytekst(),
    },
    [ModalType.ENDRE_FAGSAK_MARKERING]: {
      disabled: fagsak.sakSkalTilInfotrygd,
      text: getEndreUtlandMenytekst(),
    },
    [ModalType.VERGE]: {
      disabled: !(!erPaVent && (skalViseOpprettVerge || skalViseFjernVerge)),
      text: getVergeMenytekst(skalViseOpprettVerge),
    },
  } as Record<string, { disabled: boolean; text: string }>;
};

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  setBehandling: (behandling: Behandling | undefined) => void;
  hentOgSettBehandling: () => void;
  oppdaterFagsak: () => void;
}

const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  setBehandling,
  hentOgSettBehandling,
  oppdaterFagsak,
}) => {
  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt } = initFetchData;

  const [valgtModal, setValgtModal] = useState<string | undefined>();
  const lukkModal = useCallback(() => setValgtModal(undefined), []);

  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const menyData = useMemo(() => hentMenyData(behandling, fagsak), [behandling, fagsak]);

  if (navAnsatt.kanVeilede) {
    return null;
  }

  return (
    <>
      <Dropdown>
        <Button
          size="small"
          as={Dropdown.Toggle}
          iconPosition="right"
          variant="secondary"
          icon={<ChevronDownIcon aria-hidden />}
        >
          <FormattedMessage id="BehandlingMenuIndex.Behandlingsmeny" />
        </Button>
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            {Object.keys(menyData)
              .filter(key => !menyData[key].disabled)
              .map(key => (
                <Dropdown.Menu.List.Item
                  key={key}
                  onClick={() => {
                    setValgtModal(key);
                  }}
                >
                  {menyData[key].text}
                </Dropdown.Menu.List.Item>
              ))}
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
      {valgtModal === ModalType.NY_BEHANDLING && (
        <NyBehandlingMenyModal fagsakData={fagsakData} behandlingUuid={behandlingUuid} lukkModal={lukkModal} />
      )}
      {valgtModal === ModalType.ENDRE_FAGSAK_MARKERING && (
        <EndreFagsakMarkeringMenyModal
          saksnummer={fagsak.saksnummer}
          fagsakMarkering={fagsak.fagsakMarkering}
          oppdaterFagsak={oppdaterFagsak}
          hentOgSettBehandling={hentOgSettBehandling}
          lukkModal={lukkModal}
        />
      )}
      {valgtModal === ModalType.VERGE && behandling && (
        <VergeMenyModal fagsak={fagsak} behandling={behandling} setBehandling={setBehandling} lukkModal={lukkModal} />
      )}
      {valgtModal === ModalType.ÅPNE_FOR_ENDRINGER && behandling && (
        <ApneForEndringerMenyModal behandling={behandling} setBehandling={setBehandling} lukkModal={lukkModal} />
      )}
      {valgtModal === ModalType.ENDRE_BEHANDLENDE_ENHET && behandling && (
        <EndreBehandlendeEnhetMenyModal
          behandling={behandling}
          hentOgSettBehandling={hentOgSettBehandling}
          lukkModal={lukkModal}
        />
      )}
      {valgtModal === ModalType.HENLEGG && behandling && (
        <HenleggMenyModal behandling={behandling} fagsakYtelseType={fagsak.fagsakYtelseType} lukkModal={lukkModal} />
      )}
      {valgtModal === ModalType.SETT_PÅ_VENT && behandling && (
        <SettPaVentMenyModal
          behandling={behandling}
          hentOgSettBehandling={hentOgSettBehandling}
          lukkModal={lukkModal}
        />
      )}
      {valgtModal === ModalType.TA_AV_VENT && behandling && (
        <TaAvVentMenyModal behandling={behandling} setBehandling={setBehandling} lukkModal={lukkModal} />
      )}
    </>
  );
};

export default BehandlingMenuIndex;
