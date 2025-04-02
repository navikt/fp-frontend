import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Dropdown } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { getEndreEnhetMenytekst, getTaAvVentMenytekst, getVergeMenytekst } from '@navikt/fp-sak-meny';
import { getMenytekst as getApneForEndringerMenytekst } from '@navikt/fp-sak-meny-apne-for-endringer';
import { getMenytekst as getEndreUtlandMenytekst } from '@navikt/fp-sak-meny-endre-utland';
import { getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import { getMenytekst as getNyBehandlingMenytekst } from '@navikt/fp-sak-meny-ny-behandling';
import { getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import type { Behandling, BehandlingAppKontekst, Fagsak } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchOptions } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { ApneForEndringerMenyModal } from './modaler/ApneForEndringerMenyModal';
import { EndreBehandlendeEnhetMenyModal } from './modaler/EndreBehandlendeEnhetMenyModal';
import { EndreFagsakMarkeringMenyModal } from './modaler/EndreFagsakMarkeringMenyModal';
import { HenleggMenyModal } from './modaler/HenleggMenyModal';
import { NyBehandlingMenyModal } from './modaler/NyBehandlingMenyModal';
import { SettPaVentMenyModal } from './modaler/SettPaVentMenyModal';
import { TaAvVentMenyModal } from './modaler/TaAvVentMenyModal';
import { VergeMenyModal } from './modaler/VergeMenyModal';

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

interface Props {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandling?: Behandling;
  setBehandling: (behandling: Behandling | undefined) => void;
  hentOgSettBehandling: () => void;
}

export const BehandlingMenuIndex = ({
  fagsakData,
  behandlingUuid,
  behandling,
  setBehandling,
  hentOgSettBehandling,
}: Props) => {
  const initFetchQuery = useQuery(initFetchOptions());
  const { innloggetBruker: navAnsatt } = notEmpty(initFetchQuery.data);

  const [valgtModal, setValgtModal] = useState<string | undefined>();
  const lukkModal = () => setValgtModal(undefined);

  const fagsak = fagsakData.getFagsak();
  const behandlingAppContext = fagsakData.getBehandling(behandlingUuid);

  const menyData = hentMenyData(behandlingAppContext, fagsak);

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
          fagsakMarkeringer={fagsak.fagsakMarkeringer}
          hentOgSettBehandling={hentOgSettBehandling}
          lukkModal={lukkModal}
        />
      )}
      {valgtModal === ModalType.VERGE && behandlingAppContext && behandling && (
        <VergeMenyModal
          fagsak={fagsak}
          behandlingAppKontekst={behandlingAppContext}
          behandling={behandling}
          setBehandling={setBehandling}
          lukkModal={lukkModal}
          hentOgSettBehandling={hentOgSettBehandling}
        />
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
      {valgtModal === ModalType.HENLEGG && behandlingAppContext && behandling && (
        <HenleggMenyModal
          behandlingAppKontekst={behandlingAppContext}
          behandling={behandling}
          fagsakYtelseType={fagsak.fagsakYtelseType}
          lukkModal={lukkModal}
        />
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

const hentMenyData = (behandling: BehandlingAppKontekst | undefined, fagsak: Fagsak) => {
  const erPaVent = behandling ? behandling.behandlingPåVent : false;
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
