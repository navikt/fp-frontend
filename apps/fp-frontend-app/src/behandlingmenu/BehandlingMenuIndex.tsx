import React, { FunctionComponent, useCallback, useState } from 'react';
import { Button } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from '@navikt/ds-react-internal';
import { getMenytekst as getNyBehandlingMenytekst } from '@navikt/fp-sak-meny-ny-behandling';
import { getEndreEnhetMenytekst, getVergeMenytekst, getTaAvVentMenytekst } from '@navikt/ft-sak-meny';
import { getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import { getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import { getMenytekst as getApneForEndringerMenytekst } from '@navikt/fp-sak-meny-apne-for-endringer';
import {
  MenyEndreUtlandIndex,
  getMenytekst as getEndreUtlandMenytekst,
  FormValues as EndreUtlandFormValues,
} from '@navikt/fp-sak-meny-endre-utland';
import { Behandling, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import FagsakData from '../fagsak/FagsakData';
import NyBehandlingMenyModal from './NyBehandlingMenyModal';
import ApneForEndringerMenyModal from './ApneForEndringerMenyModal';
import HenleggMenyModal from './HenleggMenyModal';
import EndreBehandlendeEnhetMenyModal from './EndreBehandlendeEnhetMenyModal';
import SettPaVentMenyModal from './SettPaVentMenyModal';
import TaAvVentMenyModal from './TaAvVentMenyModal';

import '@navikt/ft-sak-meny/dist/style.css';

interface OwnProps {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling) => void;
  hentOgSettBehandling: () => void;
}

const BehandlingMenuIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  behandlingUuid,
  setBehandling,
  hentOgSettBehandling,
}) => {
  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt } = initFetchData;

  const erPaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const [valgtModal, setValgtModal] = useState<number | undefined>();
  const lukkModal = useCallback(() => setValgtModal(undefined), []);

  if (navAnsatt.kanVeilede) {
    return null;
  }

  const vergeMenyvalg = behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const skalViseFjernVerge =
    vergeMenyvalg === VergeBehandlingmenyValg.FJERN && !!behandling?.uuid && !!behandling?.versjon;
  const skalViseOpprettVerge =
    vergeMenyvalg === VergeBehandlingmenyValg.OPPRETT && !!behandling?.uuid && !!behandling?.versjon;

  const { startRequest: endreSaksmerking } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.ENDRE_SAK_MARKERING);
  const endreFagsakMarkering = useCallback(
    (params: EndreUtlandFormValues) => endreSaksmerking(params).then(() => hentOgSettBehandling()),
    [hentOgSettBehandling],
  );

  const modalData = [
    {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanGjenopptas,
      text: getTaAvVentMenytekst(),
      component: () => (
        <TaAvVentMenyModal behandling={behandling} setBehandling={setBehandling} setValgtModal={setValgtModal} />
      ),
    },
    {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanSettesPaVent,
      text: getSettPaVentMenytekst(),
      component: () => (
        <SettPaVentMenyModal
          behandling={behandling}
          hentOgSettBehandling={hentOgSettBehandling}
          setValgtModal={setValgtModal}
        />
      ),
    },
    {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanHenlegges,
      text: getHenleggMenytekst(),
      component: () => (
        <HenleggMenyModal
          behandling={behandling}
          fagsakYtelseType={fagsak.fagsakYtelseType}
          setValgtModal={setValgtModal}
        />
      ),
    },
    {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanBytteEnhet,
      text: getEndreEnhetMenytekst(),
      component: () => (
        <EndreBehandlendeEnhetMenyModal
          behandling={behandling}
          hentOgSettBehandling={hentOgSettBehandling}
          setValgtModal={setValgtModal}
        />
      ),
    },
    {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanOpnesForEndringer,
      text: getApneForEndringerMenytekst(),
      component: () => {
        if (behandling) {
          return (
            <ApneForEndringerMenyModal
              behandling={behandling}
              setBehandling={setBehandling}
              setValgtModal={setValgtModal}
            />
          );
        }
        return null;
      },
    },
    {
      disabled: fagsak.sakSkalTilInfotrygd,
      text: getNyBehandlingMenytekst(),
      component: () => (
        <NyBehandlingMenyModal
          fagsakData={fagsakData}
          behandlingUuid={behandlingUuid}
          setBehandling={setBehandling}
          setValgtModal={setValgtModal}
        />
      ),
    },
    {
      disabled: fagsak.sakSkalTilInfotrygd,
      text: getEndreUtlandMenytekst(),
      component: () => (
        <MenyEndreUtlandIndex
          saksnummer={fagsak.saksnummer}
          fagsakMarkering={fagsak.fagsakMarkering}
          endreFagsakMarkering={endreFagsakMarkering}
          lukkModal={lukkModal}
        />
      ),
    },
    {
      disabled: !(!erPaVent && (skalViseOpprettVerge || skalViseFjernVerge)),
      text: getVergeMenytekst(skalViseOpprettVerge),
    },
  ];

  return (
    <>
      <Dropdown>
        <Button size="small" as={Dropdown.Toggle} iconPosition="right">
          <FormattedMessage id="BehandlingMenuIndex.Behandlingsmeny" />
        </Button>
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            {modalData.map((data, index) => (
              <Dropdown.Menu.List.Item
                disabled={data.disabled}
                onClick={() => {
                  setValgtModal(index);
                }}
              >
                {data.text}
              </Dropdown.Menu.List.Item>
            ))}
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
      {valgtModal !== undefined && modalData[valgtModal].component()}
    </>
  );
};

export default BehandlingMenuIndex;
