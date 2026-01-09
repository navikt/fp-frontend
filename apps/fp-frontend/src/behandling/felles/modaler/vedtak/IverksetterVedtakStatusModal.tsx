import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

import type { Behandlingsresultat } from '@navikt/fp-types';

interface Props {
  lukkModal: () => void;
  visModal: boolean;
  behandlingsresultat?: Behandlingsresultat;
}

/**
 * IverksetterVedtakStatusModal
 *
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir den Nav-ansatte tatt tilbake til sokesiden.
 */
export const IverksetterVedtakStatusModal = ({ lukkModal, visModal, behandlingsresultat }: Props) => {
  const erVedtakAvslatt = behandlingsresultat?.type === 'AVSLÅTT';

  return (
    <Dialog open={visModal} size="small">
      <Dialog.Popup>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="2" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              {erVedtakAvslatt ? (
                <FormattedMessage id="IverksetterVedtakStatusModal.VedtakAvslatt" />
              ) : (
                <FormattedMessage id="IverksetterVedtakStatusModal.VedtakInnvilet" />
              )}
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <FormattedMessage id="IverksetterVedtakStatusModal.GoToSearchPage" />
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            <FormattedMessage id="IverksetterVedtakStatusModal.Ok" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
