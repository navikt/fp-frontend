import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import { BehandlingResultatType } from '@navikt/fp-kodeverk';
import type { Behandlingsresultat } from '@navikt/fp-types';

import styles from './iverksetterVedtakStatusModal.module.css';

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
  const intl = useIntl();
  const erVedtakAvslatt = behandlingsresultat && behandlingsresultat.type === BehandlingResultatType.AVSLATT;
  const imageAltText = intl.formatMessage({
    id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.Avslatt' : 'IverksetterVedtakStatusModal.Innvilget',
  });

  return (
    <Modal open={visModal} aria-label={imageAltText} onClose={lukkModal}>
      <Modal.Body>
        <HStack gap="space-24">
          <CheckmarkCircleFillIcon className={styles['image']} />
          <VStack gap="space-4">
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
