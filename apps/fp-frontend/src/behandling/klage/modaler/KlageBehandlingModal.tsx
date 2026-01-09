import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

interface Props {
  visModal?: boolean;
  lukkModal: () => void;
}

/**
 * KlageBehandlingModal
 *
 * Denne komponenten vises ved en klagevurdering hvor saksbehandler
 * i aksjonspunkt '' velger at ytelsesvedtaket skal stadfestes. Ved å trykke på knapp blir saksbehandler
 * tatt tilbake til sokesiden.
 */
export const KlageBehandlingModal = ({ visModal = false, lukkModal }: Props) => {
  const intl = useIntl();

  return (
    <Dialog open={visModal} size="small">
      <Dialog.Popup closeOnOutsideClick={false}>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="2" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              <FormattedMessage id="KlageVurderingModal.VedtakOversendt" />
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <FormattedMessage id="KlageVurderingModal.GoToSearchPage" />
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="primary" size="small" onClick={lukkModal} autoFocus type="button">
            {intl.formatMessage({ id: 'KlageVurderingModal.Ok' })}
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
