import { useCallback, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon } from '@navikt/aksel-icons';
import { Button, Dropdown } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { getEndreEnhetMenytekst, getTaAvVentMenytekst, getVergeMenytekst } from '@navikt/fp-sak-meny';
import { getMenytekst as getApneForEndringerMenytekst } from '@navikt/fp-sak-meny-apne-for-endringer';
import { getMenytekst as getEndreUtlandMenytekst } from '@navikt/fp-sak-meny-endre-utland';
import { getMenytekst as getHenleggMenytekst } from '@navikt/fp-sak-meny-henlegg';
import { getMenytekst as getMerkSomHasterMenytekst } from '@navikt/fp-sak-meny-merk-som-haster';
import { getMenytekst as getNyBehandlingMenytekst } from '@navikt/fp-sak-meny-ny-behandling';
import { getMenytekst as getSettPaVentMenytekst } from '@navikt/fp-sak-meny-sett-pa-vent';
import type { Behandling, Fagsak, FagsakBehandlingDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchOptions } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BEHANDLING_SNARVEG_IDER } from '../snarveger/snarvegDefinisjoner';
import { useRegistrerSnarveg } from '../snarveger/SnarvegerContext';
import { nesteFokusIndex } from '../snarveger/tastaturnavigasjon';
import { ApneForEndringerMenyModal } from './modaler/ApneForEndringerMenyModal';
import { EndreBehandlendeEnhetMenyModal } from './modaler/EndreBehandlendeEnhetMenyModal';
import { EndreFagsakMarkeringMenyModal } from './modaler/EndreFagsakMarkeringMenyModal';
import { HenleggMenyModal } from './modaler/HenleggMenyModal';
import { MerkSomHasterMenyModal } from './modaler/MerkSomHasterMenyModal';
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
  MERK_SOM_HASTER = 'MERK_SOM_HASTER',
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

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menyRef = useRef<HTMLDivElement>(null);
  const [menyÅpen, setMenyÅpen] = useState(false);
  const fokuserFørsteVedÅpningRef = useRef(false);

  const hentMenyKnappar = useCallback(
    (): HTMLButtonElement[] =>
      Array.from(menyRef.current?.querySelectorAll<HTMLButtonElement>('button.aksel-dropdown__item') ?? []),
    [],
  );

  const fokuserMenyKnapp = useCallback(
    (index: number) => {
      hentMenyKnappar()[index]?.focus();
    },
    [hentMenyKnappar],
  );

  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.ÅPNE_BEHANDLINGSMENY, () => {
    fokuserFørsteVedÅpningRef.current = true;
    setMenyÅpen(true);
  });

  useEffect(() => {
    if (menyÅpen && fokuserFørsteVedÅpningRef.current) {
      fokuserFørsteVedÅpningRef.current = false;
      fokuserMenyKnapp(0);
    }
  }, [fokuserMenyKnapp, menyÅpen]);

  const håndterMenyTaster = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMenyÅpen(false);
      toggleRef.current?.focus();
      return;
    }
    const knappar = hentMenyKnappar();
    const aktivIndex = knappar.findIndex(knapp => knapp === document.activeElement);
    const nyIndex = nesteFokusIndex(event.key, aktivIndex, knappar.length);
    if (nyIndex !== undefined) {
      event.preventDefault();
      fokuserMenyKnapp(nyIndex);
    }
  };

  const fagsak = fagsakData.getFagsak();
  const behandlingAppContext = fagsakData.getBehandling(behandlingUuid);

  const menyData = hentMenyData(behandlingAppContext, fagsak, navAnsatt.kanVeilede);

  return (
    <>
      <Dropdown open={menyÅpen} onOpenChange={setMenyÅpen}>
        <Button
          ref={toggleRef}
          size="small"
          as={Dropdown.Toggle}
          iconPosition="right"
          variant="secondary"
          icon={<ChevronDownIcon aria-hidden />}
        >
          <FormattedMessage id="BehandlingMenuIndex.Behandlingsmeny" />
        </Button>
        <Dropdown.Menu ref={menyRef} onKeyDown={håndterMenyTaster}>
          <Dropdown.Menu.List>
            {Object.keys(menyData)
              .filter(key => !menyData[key]!.disabled)
              .map(key => (
                <Dropdown.Menu.List.Item
                  key={key}
                  onClick={() => {
                    setValgtModal(key);
                  }}
                >
                  {menyData[key]!.text}
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
          behandlingAppKontekst={behandlingAppContext}
          behandling={behandling}
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
      {valgtModal === ModalType.MERK_SOM_HASTER && behandling && (
        <MerkSomHasterMenyModal
          behandling={behandling}
          hentOgSettBehandling={hentOgSettBehandling}
          lukkModal={lukkModal}
        />
      )}
    </>
  );
};

const hentMenyData = (behandling: FagsakBehandlingDto | undefined, fagsak: Fagsak, kanVeilede: boolean) => {
  const erPaVent = behandling ? behandling.behandlingPåVent : false;
  const behandlingTillatteOperasjoner = behandling?.behandlingTillatteOperasjoner;

  const vergeMenyvalg = behandlingTillatteOperasjoner?.vergeBehandlingsmeny;
  const skalViseFjernVerge = vergeMenyvalg === 'FJERN' && !!behandling?.uuid && !!behandling.versjon;
  const skalViseOpprettVerge = vergeMenyvalg === 'OPPRETT' && !!behandling?.uuid && !!behandling.versjon;

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
      disabled: kanVeilede || fagsak.sakSkalTilInfotrygd,
      text: getNyBehandlingMenytekst(),
    },
    [ModalType.ENDRE_FAGSAK_MARKERING]: {
      disabled: kanVeilede || fagsak.sakSkalTilInfotrygd,
      text: getEndreUtlandMenytekst(),
    },
    [ModalType.VERGE]: {
      disabled: kanVeilede || erPaVent || (!skalViseOpprettVerge && !skalViseFjernVerge),
      text: getVergeMenytekst(skalViseOpprettVerge),
    },
    [ModalType.MERK_SOM_HASTER]: {
      disabled: !behandlingTillatteOperasjoner?.behandlingKanMerkesHaster,
      text: getMerkSomHasterMenytekst(),
    },
  } as Record<string, { disabled: boolean; text: string }>;
};
