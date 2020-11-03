import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { Image } from '@fpsak-frontend/shared-components';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import FagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import { Behandling, Kodeverk } from '@fpsak-frontend/types';

import styles from './fatterVedtakApprovalModal.less';

const getInfoTextCode = (
  behandlingtypeKode: string,
  behandlingsresultat: Behandling['behandlingsresultat'],
  harSammeResultatSomOriginalBehandling: boolean,
  ytelseType: Kodeverk,
  erKlageWithKA: boolean,
  isOpphor: boolean,
) => {
  if (behandlingtypeKode === BehandlingType.TILBAKEKREVING) {
    return 'FatterVedtakApprovalModal.Tilbakekreving';
  }
  if (behandlingtypeKode === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return 'FatterVedtakApprovalModal.TilbakekrevingRevurdering';
  }
  if (behandlingtypeKode === BehandlingType.KLAGE) {
    if (erKlageWithKA) {
      return 'FatterVedtakApprovalModal.ModalDescriptionKlageKA';
    }
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingtypeKode === BehandlingType.ANKE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionAnke';
  }
  if (harSammeResultatSomOriginalBehandling) {
    return 'FatterVedtakApprovalModal.UendretUtfall';
  }
  if (behandlingsresultat && behandlingsresultat.type.kode === behandlingResultatType.AVSLATT) {
    if (ytelseType.kode === FagsakYtelseType.ENGANGSSTONAD) {
      return 'FatterVedtakApprovalModal.IkkeInnvilgetES';
    }
    if (ytelseType.kode === FagsakYtelseType.SVANGERSKAPSPENGER) {
      return 'FatterVedtakApprovalModal.IkkeInnvilgetSVP';
    }
    return 'FatterVedtakApprovalModal.IkkeInnvilgetFP';
  }
  if (isOpphor) {
    return 'FatterVedtakApprovalModal.OpphortForeldrepenger';
  }
  if (ytelseType.kode === FagsakYtelseType.ENGANGSSTONAD) {
    return 'FatterVedtakApprovalModal.InnvilgetEngangsstonad';
  }
  if (ytelseType.kode === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'FatterVedtakApprovalModal.InnvilgetSvangerskapspenger';
  }
  return 'FatterVedtakApprovalModal.InnvilgetForeldrepenger';
};

const getModalDescriptionTextCode = (
  isOpphor: boolean,
  ytelseType: Kodeverk,
  erKlageWithKA: boolean,
  behandlingTypeKode: string,
) => {
  if (behandlingTypeKode === BehandlingType.KLAGE) {
    if (erKlageWithKA) {
      return 'FatterVedtakApprovalModal.ModalDescriptionKlageKA';
    }
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingTypeKode === BehandlingType.ANKE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionAnke';
  }
  if (isOpphor) {
    return 'FatterVedtakApprovalModal.ModalDescriptionOpphort';
  }
  if (ytelseType.kode === FagsakYtelseType.ENGANGSSTONAD) {
    return 'FatterVedtakApprovalModal.ModalDescriptionESApproval';
  }
  if (ytelseType.kode === FagsakYtelseType.SVANGERSKAPSPENGER) {
    return 'FatterVedtakApprovalModal.ModalDescriptionSVPApproval';
  }
  return 'FatterVedtakApprovalModal.ModalDescriptionFPApproval';
};

const isStatusFatterVedtak = (behandlingStatusKode: string) => behandlingStatusKode === behandlingStatus.FATTER_VEDTAK;

const utledInfoTextCode = (
  allAksjonspunktApproved: boolean,
  behandlingStatusKode: string,
  behandlingTypeKode: string,
  behandlingsresultat: Behandling['behandlingsresultat'],
  harSammeResultatSomOriginalBehandling: boolean,
  fagsakYtelseType: Kodeverk,
  erKlageWithKA: boolean,
  isBehandlingsresultatOpphor: boolean,
) => {
  if (allAksjonspunktApproved) {
    return isStatusFatterVedtak(behandlingStatusKode)
      ? getInfoTextCode(behandlingTypeKode, behandlingsresultat, harSammeResultatSomOriginalBehandling, fagsakYtelseType,
        erKlageWithKA, isBehandlingsresultatOpphor)
      : '';
  }
  return 'FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler';
};

const getAltImgTextCode = (ytelseType: Kodeverk) => (ytelseType.kode === FagsakYtelseType.ENGANGSSTONAD
  ? 'FatterVedtakApprovalModal.InnvilgetES' : 'FatterVedtakApprovalModal.InnvilgetFP');

const utledAltImgTextCode = (
  behandlingStatusKode: string,
  fagsakYtelseType: Kodeverk,
) => (isStatusFatterVedtak(behandlingStatusKode) ? getAltImgTextCode(fagsakYtelseType) : '');

const utledModalDescriptionTextCode = (
  behandlingStatusKode: string,
  fagsakYtelseType: Kodeverk,
  erKlageWithKA: boolean,
  behandlingTypeKode: string,
  isBehandlingsresultatOpphor: boolean,
) => (isStatusFatterVedtak(behandlingStatusKode)
  ? getModalDescriptionTextCode(isBehandlingsresultatOpphor, fagsakYtelseType, erKlageWithKA, behandlingTypeKode)
  : 'FatterVedtakApprovalModal.ModalDescription');

interface OwnProps {
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  fagsakYtelseType: Kodeverk;
  erKlageWithKA?: boolean;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingId: number;
  behandlingStatusKode: string;
  behandlingTypeKode: string;
  harSammeResultatSomOriginalBehandling?: boolean;
}

/**
 * FatterVedtakApprovalModal
 *
 * Presentasjonskomponent. Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
 * med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.
 */
const FatterVedtakApprovalModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  closeEvent,
  allAksjonspunktApproved,
  behandlingStatusKode,
  behandlingTypeKode,
  behandlingsresultat,
  harSammeResultatSomOriginalBehandling,
  fagsakYtelseType,
  erKlageWithKA,
}) => {
  const isBehandlingsresultatOpphor = behandlingsresultat && behandlingsresultat.type.kode === behandlingResultatType.OPPHOR;
  const infoTextCode = utledInfoTextCode(allAksjonspunktApproved, behandlingStatusKode, behandlingTypeKode, behandlingsresultat,
    harSammeResultatSomOriginalBehandling, fagsakYtelseType, erKlageWithKA, isBehandlingsresultatOpphor);

  const altImgTextCode = utledAltImgTextCode(behandlingStatusKode, fagsakYtelseType);

  const modalDescriptionTextCode = utledModalDescriptionTextCode(behandlingStatusKode, fagsakYtelseType, erKlageWithKA,
    behandlingTypeKode, isBehandlingsresultatOpphor);

  return (
    <Modal
      className={styles.modal}
      isOpen
      closeButton={false}
      contentLabel={intl.formatMessage({ id: modalDescriptionTextCode })}
      onRequestClose={closeEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Row>
        <Column xs="1">
          <Image className={styles.image} alt={intl.formatMessage({ id: altImgTextCode })} src={innvilgetImageUrl} />
          <div className={styles.divider} />
        </Column>
        <Column xs="9">
          <Normaltekst>
            <FormattedMessage id={infoTextCode} />
          </Normaltekst>
          <Normaltekst><FormattedMessage id="FatterVedtakApprovalModal.GoToSearchPage" /></Normaltekst>
        </Column>
        <Column xs="2">
          <Hovedknapp
            mini
            className={styles.button}
            onClick={closeEvent}
            autoFocus
          >
            <FormattedMessage id="FatterVedtakApprovalModal.Ok" />
          </Hovedknapp>
        </Column>
      </Row>
    </Modal>
  );
};

export default injectIntl(FatterVedtakApprovalModal);
