import React, { Component, MouseEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';

import Oppgave from '../../../typer/oppgaveTsType';
import MenuButton from './MenuButton';
import OpphevReservasjonModal from './OpphevReservasjonModal';
import OppgaveReservasjonForlengetModal from './forleng/OppgaveReservasjonForlengetModal';
import OppgaveReservasjonEndringDatoModal from './endre/OppgaveReservasjonEndringDatoModal';
import FlyttReservasjonModal from './flytt/FlyttReservasjonModal';

import styles from './oppgaveHandlingerMenu.less';

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
  imageNode: any;
  forlengOppgaveReservasjon: (oppgaveId: number) => Promise<string>;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}

interface OwnState {
  showOpphevReservasjonModal: boolean;
  showForlengetReservasjonModal: boolean;
  showReservasjonEndringDatoModal: boolean;
  showFlyttReservasjonModal: boolean;
}

// TODO Refaktorer til funksjonell komponent

/**
 * OppgaveHandlingerMenu
 */
export class OppgaveHandlingerMenu extends Component<OwnProps, OwnState> {
  node: any;

  menuButtonRef: any;

  constructor(props: OwnProps) {
    super(props);

    this.state = {
      showOpphevReservasjonModal: false,
      showForlengetReservasjonModal: false,
      showReservasjonEndringDatoModal: false,
      showFlyttReservasjonModal: false,
    };

    this.menuButtonRef = React.createRef();
    toggleEventListeners(true, this.handleOutsideClick);
  }

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  componentDidMount = () => {
    if (this.menuButtonRef && this.menuButtonRef.current) {
      this.menuButtonRef.current.focus();
    }
  };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  componentWillUnmount = () => {
    toggleEventListeners(false, this.handleOutsideClick);
  };

  handleOutsideClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { imageNode } = this.props;
    // ignore clicks on the component itself
    const harKlikketMeny = this.node && this.node.contains(event.target);
    const harKlikketIkon = imageNode && imageNode.contains(event.target);
    if (harKlikketMeny || harKlikketIkon) {
      return;
    }

    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
  };

  showBegrunnelseModal = () => {
    toggleEventListeners(false, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showOpphevReservasjonModal: true }));
  };

  closeBegrunnelseModal = () => {
    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
    toggleEventListeners(true, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showOpphevReservasjonModal: false }));
  };

  showFlytteModal = () => {
    toggleEventListeners(false, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showFlyttReservasjonModal: true }));
  };

  closeFlytteModal = () => {
    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
    toggleEventListeners(true, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showFlyttReservasjonModal: false }));
  };

  closeForlengReservasjonModal = (event: MouseEvent<HTMLButtonElement>) => {
    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
    this.handleOutsideClick(event);
  };

  forlengReserverasjon = () => {
    const { oppgave, forlengOppgaveReservasjon } = this.props;
    forlengOppgaveReservasjon(oppgave.id).then(() => {
      toggleEventListeners(false, this.handleOutsideClick);
      this.setState((prevState) => ({ ...prevState, showForlengetReservasjonModal: true }));
    });
  };

  closeReservasjonEndringDatoModal = (event: MouseEvent<HTMLButtonElement>) => {
    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
    this.handleOutsideClick(event);
  };

  showReservasjonEndringDato = () => {
    toggleEventListeners(false, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showReservasjonEndringDatoModal: true }));
  };

  endreReserverasjonState = () => {
    toggleEventListeners(false, this.handleOutsideClick);
    this.setState((prevState) => ({ ...prevState, showForlengetReservasjonModal: true }));
  };

  toggleMeny = () => {
    const { toggleMenu, oppgave } = this.props;
    toggleMenu(oppgave);
  };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  render = () => {
    const {
      oppgave, offset, hentReserverteOppgaver,
    } = this.props;
    const {
      showOpphevReservasjonModal, showForlengetReservasjonModal, showReservasjonEndringDatoModal, showFlyttReservasjonModal,
    } = this.state;

    return (
      <>
        <div className={styles.containerMenu} style={getOffsetPositionStyle(offset)} ref={(node) => { this.node = node; }}>
          {oppgave.status.reservertTilTidspunkt && (
            <FormattedMessage
              id="OppgaveHandlingerMenu.ReservertTil"
              values={{
                ...getDateAndTime(oppgave.status.reservertTilTidspunkt),
                b: (...chunks: any) => <b>{chunks}</b>,
              }}
            />
          )}
          <VerticalSpacer eightPx />
          <MenuButton onClick={this.showBegrunnelseModal} ref={this.menuButtonRef}>
            <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" values={{ br: <br /> }} />
          </MenuButton>
          <MenuButton onClick={this.forlengReserverasjon}>
            <FormattedMessage id="OppgaveHandlingerMenu.ForlengReservasjon" values={{ br: <br /> }} />
          </MenuButton>

          <MenuButton onClick={this.showReservasjonEndringDato}>
            <FormattedMessage id="OppgaveHandlingerMenu.EndreReservasjon" />
          </MenuButton>
          <MenuButton onClick={this.showFlytteModal}>
            <FormattedMessage id="OppgaveHandlingerMenu.FlyttReservasjon" values={{ br: <br /> }} />
          </MenuButton>
        </div>
        {showOpphevReservasjonModal && (
          <OpphevReservasjonModal
            oppgave={oppgave}
            showModal={showOpphevReservasjonModal}
            cancel={this.closeBegrunnelseModal}
            toggleMenu={this.toggleMeny}
            hentReserverteOppgaver={hentReserverteOppgaver}
          />
        )}
        {showReservasjonEndringDatoModal && (
          <OppgaveReservasjonEndringDatoModal
            showModal={showReservasjonEndringDatoModal}
            closeModal={this.closeReservasjonEndringDatoModal}
            reserverTilDefault={oppgave.status.reservertTilTidspunkt}
            oppgaveId={oppgave.id}
            hentReserverteOppgaver={hentReserverteOppgaver}
            endreReserverasjonState={this.endreReserverasjonState}
          />
        )}
        {showForlengetReservasjonModal && (
          <OppgaveReservasjonForlengetModal
            oppgave={oppgave}
            showModal={showForlengetReservasjonModal}
            closeModal={this.closeForlengReservasjonModal}
          />
        )}
        {showFlyttReservasjonModal && (
          <FlyttReservasjonModal
            oppgaveId={oppgave.id}
            showModal={showFlyttReservasjonModal}
            closeModal={this.closeFlytteModal}
            toggleMenu={this.toggleMeny}
            hentReserverteOppgaver={hentReserverteOppgaver}
          />
        )}
      </>
    );
  };
}

export default OppgaveHandlingerMenu;
