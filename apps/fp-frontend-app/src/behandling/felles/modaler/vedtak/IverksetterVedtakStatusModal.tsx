import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import { BehandlingResultatType, BehandlingResultatTypeTilbakekreving } from '@navikt/fp-kodeverk';

import styles from './iverksetterVedtakStatusModal.module.css';

interface Props {
  lukkModal: () => void;
  visModal: boolean;
  behandlingsresultat?: {
    type: BehandlingResultatType | BehandlingResultatTypeTilbakekreving;
  };
}

/**
 * IverksetterVedtakStatusModal
 *
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir den Nav-ansatte tatt tilbake til sokesiden.
 */
export const IverksetterVedtakStatusModal = ({ lukkModal, visModal, behandlingsresultat }: Props) => {
  const intl = useIntl();
  const erVedtakAvslatt = behandlingsresultat && behandlingsresultat.type === BehandlingResultatType.AVSLATT;
  const imageAltText = intl.formatMessage({
    id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.Avslatt' : 'IverksetterVedtakStatusModal.Innvilget',
  });

  return (
    <Modal open={visModal} aria-label={imageAltText} onClose={lukkModal}>
      <Modal.Body>
        <HStack gap="6">
          <CheckmarkCircleFillIcon className={styles.image} />
          <VStack gap="1">
            <Label size="small">
              {erVedtakAvslatt ? (
                <FormattedMessage id="IverksetterVedtakStatusModal.VedtakAvslatt" />
              ) : (
                <FormattedMessage id="IverksetterVedtakStatusModal.VedtakInnvilet" />
              )}
            </Label>
            <BodyShort size="small">
              <FormattedMessage id="IverksetterVedtakStatusModal.GoToSearchPage" />
            </BodyShort>
          </VStack>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            <FormattedMessage id="IverksetterVedtakStatusModal.Ok" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
