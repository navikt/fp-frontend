import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

import type {
  Behandlingsresultat,
  BehandlingsresultatDtoFpTilbake,
  BehandlingStatus,
  BehandlingType,
} from '@navikt/fp-types';

const getInfoTextCode = (
  behandlingtypeKode: BehandlingType,
  isOpphor: boolean,
  harSammeResultatSomOriginalBehandling?: boolean,
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake,
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
  if (behandlingsresultat?.type === 'AVSLÅTT') {
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

const isStatusFatterVedtak = (behandlingStatusKode: BehandlingStatus) => behandlingStatusKode === 'FVED';

const utledInfoTextCode = (
  allAksjonspunktApproved: boolean,
  behandlingStatusKode: BehandlingStatus,
  behandlingTypeKode: BehandlingType,
  isBehandlingsresultatOpphor: boolean,
  harSammeResultatSomOriginalBehandling?: boolean,
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake,
) => {
  if (allAksjonspunktApproved) {
    return isStatusFatterVedtak(behandlingStatusKode)
      ? getInfoTextCode(
          behandlingTypeKode,
          isBehandlingsresultatOpphor,
          harSammeResultatSomOriginalBehandling,
          behandlingsresultat,
        )
      : '';
  }
  return 'FatterVedtakApprovalModal.VedtakReturneresTilSaksbehandler';
};

interface Props {
  closeEvent: () => void;
  allAksjonspunktApproved: boolean;
  behandlingsresultat?: Behandlingsresultat | BehandlingsresultatDtoFpTilbake;
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
  const isBehandlingsresultatOpphor = !!behandlingsresultat && behandlingsresultat.type === 'OPPHØR';
  const infoTextCode = utledInfoTextCode(
    allAksjonspunktApproved,
    behandlingStatusKode,
    behandlingTypeKode,
    isBehandlingsresultatOpphor,
    harSammeResultatSomOriginalBehandling,
    behandlingsresultat,
  );

  return (
    <Dialog open onOpenChange={closeEvent} size="small">
      <Dialog.Popup closeOnOutsideClick={false}>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="2" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              <FormattedMessage id={infoTextCode} />
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <FormattedMessage id="FatterVedtakApprovalModal.GoToSearchPage" />
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="FatterVedtakApprovalModal.Ok" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
