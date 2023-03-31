import React, {
  useEffect, FunctionComponent, MouseEvent, useState, useRef, useCallback,
} from 'react';
import { FormattedMessage } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';
import {
  Oppgave, OppgaveReservasjonEndringDatoModal, FlyttReservasjonModal,
} from '@navikt/fp-los-felles';

import { restApiHooks, RestApiPathsKeys } from '../../../data/fplosSaksbehandlerRestApi';
import MenuButton from './MenuButton';
import OpphevReservasjonModal from './OpphevReservasjonModal';
import OppgaveReservasjonForlengetModal from './forleng/OppgaveReservasjonForlengetModal';

import styles from './oppgaveHandlingerMenu.module.css';

type Offset = {
  top: number;
  left: number;
};

const getOffsetPositionStyle = (offset: Offset) => (window.innerWidth > (offset.left + 250)
  ? { left: `${42 + offset.left}px`, top: `${offset.top - 20}px` }
  : { left: `${offset.left - 200}px`, top: `${offset.top + 38}px` });

const toggleEventListeners = (turnOnEventListeners: boolean, handleOutsideClick: (event: any) => void) => {
  if (turnOnEventListeners) {
    document.addEventListener('click', handleOutsideClick, false);
    document.addEventListener('mousedown', handleOutsideClick, false);
    document.addEventListener('keydown', handleOutsideClick, false);
  } else {
    document.removeEventListener('click', handleOutsideClick, false);
    document.removeEventListener('mousedown', handleOutsideClick, false);
    document.removeEventListener('keydown', handleOutsideClick, false);
  }
};

interface OwnProps {
  toggleMenu: (valgtOppgave: Oppgave) => void;
  offset: Offset;
  oppgave: Oppgave;
  imageNode: HTMLDivElement | null;
  forlengOppgaveReservasjon: (oppgaveId: number) => Promise<string>;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}

const OppgaveHandlingerMenu: FunctionComponent<OwnProps> = ({
  toggleMenu,
  offset,
  oppgave,
  imageNode,
  forlengOppgaveReservasjon,
  hentReserverteOppgaver,
}) => {
  const [showOpphevReservasjonModal, setOpphevReservasjonModal] = useState(false);
  const [showForlengetReservasjonModal, setForlengetReservasjonModal] = useState(false);
  const [showReservasjonEndringDatoModal, setReservasjonEndringDatoModal] = useState(false);
  const [showFlyttReservasjonModal, setFlyttReservasjonModal] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>();
  const divRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent<HTMLButtonElement>) => {
    // ignore clicks on the component itself
    const harKlikketMeny = divRef.current && divRef.current.contains(event.target as Node);
    const harKlikketIkon = imageNode && imageNode.contains(event.target as Node);
    if (harKlikketMeny || harKlikketIkon) {
      return;
    }

    toggleMenu(oppgave);
  };

  useEffect(() => {
    toggleEventListeners(true, handleOutsideClick);
    if (menuButtonRef && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
    return () => {
      toggleEventListeners(false, handleOutsideClick);
    };
  }, []);

  const showBegrunnelseModal = useCallback(() => {
    toggleEventListeners(false, handleOutsideClick);
    setOpphevReservasjonModal(true);
  }, [handleOutsideClick]);

  const closeBegrunnelseModal = useCallback(() => {
    toggleMenu(oppgave);
    toggleEventListeners(false, handleOutsideClick);
    setOpphevReservasjonModal(false);
  }, [toggleMenu, oppgave, handleOutsideClick]);

  const showFlytteModal = useCallback(() => {
    toggleEventListeners(false, handleOutsideClick);
    setFlyttReservasjonModal(true);
  }, [handleOutsideClick]);

  const closeFlytteModal = useCallback(() => {
    toggleMenu(oppgave);
    toggleEventListeners(false, handleOutsideClick);
    setFlyttReservasjonModal(false);
  }, [toggleMenu, oppgave, handleOutsideClick]);

  const closeForlengReservasjonModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    toggleMenu(oppgave);
    handleOutsideClick(event);
  }, [toggleMenu, oppgave, handleOutsideClick]);

  const forlengReserverasjon = useCallback(() => {
    forlengOppgaveReservasjon(oppgave.id).then(() => {
      toggleEventListeners(false, handleOutsideClick);
      setForlengetReservasjonModal(true);
    });
  }, [forlengOppgaveReservasjon, oppgave, handleOutsideClick]);

  const closeReservasjonEndringDatoModal = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    toggleMenu(oppgave);
    handleOutsideClick(event);
  }, [toggleMenu, oppgave, handleOutsideClick]);

  const showReservasjonEndringDato = useCallback(() => {
    toggleEventListeners(false, handleOutsideClick);
    setReservasjonEndringDatoModal(true);
  }, [handleOutsideClick]);

  const endreReserverasjonState = useCallback(() => {
    toggleEventListeners(false, handleOutsideClick);
    setForlengetReservasjonModal(true);
  }, [handleOutsideClick]);

  const toggleMeny = useCallback(() => {
    toggleMenu(oppgave);
  }, [toggleMenu, oppgave]);

  const { startRequest: endreOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON);

  const { startRequest: flyttOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON);

  const {
    startRequest: hentSaksbehandler, state: hentSaksbehandlerState, data: saksbehandler, resetRequestData: resetHentSaksbehandler,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <>
      <div className={styles.containerMenu} style={getOffsetPositionStyle(offset)} ref={divRef}>
        {oppgave.status.reservertTilTidspunkt && (
          <FormattedMessage
            id="OppgaveHandlingerMenu.ReservertTil"
            values={{
              ...getDateAndTime(oppgave.status.reservertTilTidspunkt),
              b: bTag,
            }}
          />
        )}
        <VerticalSpacer eightPx />
        <MenuButton onClick={showBegrunnelseModal} ref={menuButtonRef}>
          <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" values={{ br: <br /> }} />
        </MenuButton>
        <MenuButton onClick={forlengReserverasjon}>
          <FormattedMessage id="OppgaveHandlingerMenu.ForlengReservasjon" values={{ br: <br /> }} />
        </MenuButton>

        <MenuButton onClick={showReservasjonEndringDato}>
          <FormattedMessage id="OppgaveHandlingerMenu.EndreReservasjon" />
        </MenuButton>
        <MenuButton onClick={showFlytteModal}>
          <FormattedMessage id="OppgaveHandlingerMenu.FlyttReservasjon" values={{ br: <br /> }} />
        </MenuButton>
      </div>
      {showOpphevReservasjonModal && (
        <OpphevReservasjonModal
          oppgave={oppgave}
          showModal={showOpphevReservasjonModal}
          cancel={closeBegrunnelseModal}
          toggleMenu={toggleMeny}
          hentReserverteOppgaver={hentReserverteOppgaver}
        />
      )}
      {showReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          showModal={showReservasjonEndringDatoModal}
          closeModal={closeReservasjonEndringDatoModal}
          reserverTilDefault={oppgave.status.reservertTilTidspunkt}
          oppgaveId={oppgave.id}
          hentReserverteOppgaver={hentReserverteOppgaver}
          endreReserverasjonState={endreReserverasjonState}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {showForlengetReservasjonModal && (
        <OppgaveReservasjonForlengetModal
          oppgave={oppgave}
          showModal={showForlengetReservasjonModal}
          closeModal={closeForlengReservasjonModal}
        />
      )}
      {showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          oppgaveId={oppgave.id}
          showModal={showFlyttReservasjonModal}
          closeModal={closeFlytteModal}
          toggleMenu={toggleMeny}
          hentReserverteOppgaver={hentReserverteOppgaver}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={hentSaksbehandler}
          hentSaksbehandlerState={hentSaksbehandlerState}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </>
  );
};

export default OppgaveHandlingerMenu;
