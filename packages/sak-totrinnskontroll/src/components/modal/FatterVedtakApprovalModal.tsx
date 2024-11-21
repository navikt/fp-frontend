import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Modal, Button, Label } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { BehandlingType, BehandlingResultatType, BehandlingStatus } from '@navikt/fp-kodeverk';
import { Behandling } from '@navikt/fp-types';

import styles from './fatterVedtakApprovalModal.module.css';

const getInfoTextCode = (
  behandlingtypeKode: string,
  behandlingsresultat: Behandling['behandlingsresultat'],
  isOpphor: boolean,
  harSammeResultatSomOriginalBehandling?: boolean,
) => {
  if (behandlingtypeKode === BehandlingType.TILBAKEKREVING) {
    return 'FatterVedtakApprovalModal.Tilbakekreving';
  }
  if (behandlingtypeKode === BehandlingType.TILBAKEKREVING_REVURDERING) {
    return 'FatterVedtakApprovalModal.TilbakekrevingRevurdering';
  }
  if (behandlingtypeKode === BehandlingType.KLAGE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingtypeKode === BehandlingType.ANKE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionAnke';
  }
  if (harSammeResultatSomOriginalBehandling) {
    return 'FatterVedtakApprovalModal.UendretUtfall';
  }
  if (behandlingsresultat && behandlingsresultat.type === BehandlingResultatType.AVSLATT) {
    return 'FatterVedtakApprovalModal.IkkeInnvilget';
  }
  if (isOpphor) {
    return 'FatterVedtakApprovalModal.OpphortVedtak';
  }
  return 'FatterVedtakApprovalModal.InnvilgetVedtak';
};

const getModalDescriptionTextCode = (isOpphor: boolean, behandlingTypeKode: string) => {
  if (behandlingTypeKode === BehandlingType.KLAGE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingTypeKode === BehandlingType.ANKE) {
    return 'FatterVedtakApprovalModal.ModalDescriptionAnke';
  }
  if (isOpphor) {
    return 'FatterVedtakApprovalModal.ModalDescriptionOpphort';
  }
  return 'FatterVedtakApprovalModal.ModalDescriptionApproval';
};

const isStatusFatterVedtak = (behandlingStatusKode: string) => behandlingStatusKode === BehandlingStatus.FATTER_VEDTAK;

const utledInfoTextCode = (
  allAksjonspunktApproved: boolean,
  behandlingStatusKode: string,
  behandlingTypeKode: string,
  behandlingsresultat: Behandling['behandlingsresultat'],
  isBehandlingsresultatOpphor: boolean,
  harSammeResultatSomOriginalBehandling?: boolean,
): string => {
  if (allAksjonspunktApproved) {
    return isStatusFatterVedtak(behandlingStatusKode)
      ? getInfoTextCode(
          behandlingTypeKode,
          behandlingsresultat,
          isBehandlingsresultatOpphor,
          harSammeResultatSomOriginalBehandling,
        )
      : '';
  }
  return 'FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler';
};

const utledAltImgTextCode = (behandlingStatusKode: string) =>
  isStatusFatterVedtak(behandlingStatusKode) ? 'FatterVedtakApprovalModal.Innvilget' : '';

const utledModalDescriptionTextCode = (
  behandlingStatusKode: string,
  behandlingTypeKode: string,
  isBehandlingsresultatOpphor: boolean,
) =>
  isStatusFatterVedtak(behandlingStatusKode)
    ? getModalDescriptionTextCode(isBehandlingsresultatOpphor, behandlingTypeKode)
    : 'FatterVedtakApprovalModal.ModalDescription';

interface OwnProps {
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingStatusKode: string;
  behandlingTypeKode: string;
  harSammeResultatSomOriginalBehandling?: boolean;
}

/**
 * FatterVedtakApprovalModal
 *
 * Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
 * med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.
 */
const FatterVedtakApprovalModal: FunctionComponent<OwnProps> = ({
  closeEvent,
  allAksjonspunktApproved,
  behandlingStatusKode,
  behandlingTypeKode,
  behandlingsresultat,
  harSammeResultatSomOriginalBehandling,
}) => {
  const intl = useIntl();
  const isBehandlingsresultatOpphor =
    !!behandlingsresultat && behandlingsresultat.type === BehandlingResultatType.OPPHOR;
  const infoTextCode = utledInfoTextCode(
    allAksjonspunktApproved,
    behandlingStatusKode,
    behandlingTypeKode,
    behandlingsresultat,
    isBehandlingsresultatOpphor,
    harSammeResultatSomOriginalBehandling,
  );

  const altImgTextCode = utledAltImgTextCode(behandlingStatusKode);

  const modalDescriptionTextCode = utledModalDescriptionTextCode(
    behandlingStatusKode,
    behandlingTypeKode,
    isBehandlingsresultatOpphor,
  );

  return (
    <Modal width="small" open aria-label={intl.formatMessage({ id: modalDescriptionTextCode })} onClose={closeEvent}>
      <Modal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <CheckmarkCircleFillIcon className={styles.image} title={intl.formatMessage({ id: altImgTextCode })} />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id={infoTextCode} />
              </Label>
              <BodyShort size="small">
                <FormattedMessage id="FatterVedtakApprovalModal.GoToSearchPage" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
                <FormattedMessage id="FatterVedtakApprovalModal.Ok" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Body>
    </Modal>
  );
};

export default FatterVedtakApprovalModal;
