import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import {
  BehandlingResultatType,
  type BehandlingStatus,
  BehandlingStatusEnum,
  type BehandlingType,
} from '@navikt/fp-kodeverk';
import type { Behandling } from '@navikt/fp-types';

import styles from './fatterVedtakApprovalModal.module.css';

const getInfoTextCode = (
  behandlingtypeKode: BehandlingType,
  behandlingsresultat: Behandling['behandlingsresultat'],
  isOpphor: boolean,
  harSammeResultatSomOriginalBehandling?: boolean,
) => {
  if (behandlingtypeKode === 'BT-007') {
    return 'FatterVedtakApprovalModal.Tilbakekreving';
  }
  if (behandlingtypeKode === 'BT-009') {
    return 'FatterVedtakApprovalModal.TilbakekrevingRevurdering';
  }
  if (behandlingtypeKode === 'BT-003') {
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingtypeKode === 'BT-008') {
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

const getModalDescriptionTextCode = (isOpphor: boolean, behandlingTypeKode: BehandlingType) => {
  if (behandlingTypeKode === 'BT-003') {
    return 'FatterVedtakApprovalModal.ModalDescriptionKlage';
  }
  if (behandlingTypeKode === 'BT-008') {
    return 'FatterVedtakApprovalModal.ModalDescriptionAnke';
  }
  if (isOpphor) {
    return 'FatterVedtakApprovalModal.ModalDescriptionOpphort';
  }
  return 'FatterVedtakApprovalModal.ModalDescriptionApproval';
};

const isStatusFatterVedtak = (behandlingStatusKode: BehandlingStatus) =>
  behandlingStatusKode === BehandlingStatusEnum.FATTER_VEDTAK;

const utledInfoTextCode = (
  allAksjonspunktApproved: boolean,
  behandlingStatusKode: BehandlingStatus,
  behandlingTypeKode: BehandlingType,
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

const utledAltImgTextCode = (behandlingStatusKode: BehandlingStatus) =>
  isStatusFatterVedtak(behandlingStatusKode) ? 'FatterVedtakApprovalModal.Innvilget' : '';

const utledModalDescriptionTextCode = (
  behandlingStatusKode: BehandlingStatus,
  behandlingTypeKode: BehandlingType,
  isBehandlingsresultatOpphor: boolean,
) =>
  isStatusFatterVedtak(behandlingStatusKode)
    ? getModalDescriptionTextCode(isBehandlingsresultatOpphor, behandlingTypeKode)
    : 'FatterVedtakApprovalModal.ModalDescription';

interface Props {
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  behandlingStatusKode: BehandlingStatus;
  behandlingTypeKode: BehandlingType;
  harSammeResultatSomOriginalBehandling?: boolean;
}

/**
 * FatterVedtakApprovalModal
 *
 * Denne modalen vises en lightbox etter at en beslutter har godkjent alle aksjonspunkter
 * med totrinnskontroll. Ved å trykke på knapp blir beslutter tatt tilbake til sokesiden.
 */
export const FatterVedtakApprovalModal = ({
  closeEvent,
  allAksjonspunktApproved,
  behandlingStatusKode,
  behandlingTypeKode,
  behandlingsresultat,
  harSammeResultatSomOriginalBehandling,
}: Props) => {
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
    <Modal
      className={styles['modal']}
      open
      aria-label={intl.formatMessage({ id: modalDescriptionTextCode })}
      onClose={closeEvent}
    >
      <Modal.Body>
        <HStack justify="space-between" align="center" wrap={false}>
          <HStack gap="space-8">
            <CheckmarkCircleFillIcon className={styles['image']} title={intl.formatMessage({ id: altImgTextCode })} />
            <VStack gap="space-4">
              <Label size="small">
                <FormattedMessage id={infoTextCode} />
              </Label>
              <BodyShort size="small">
                <FormattedMessage id="FatterVedtakApprovalModal.GoToSearchPage" />
              </BodyShort>
            </VStack>
          </HStack>
          <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="FatterVedtakApprovalModal.Ok" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
