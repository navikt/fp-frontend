import { useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { BehandlingResultatType } from '@navikt/fp-kodeverk';

import styles from './iverksetterVedtakStatusModal.module.css';

interface Props {
  lukkModal: () => void;
  visModal: boolean;
  behandlingsresultat?: {
    type: string;
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
          <div>
            <Label size="small">
              {intl.formatMessage({
                id: erVedtakAvslatt
                  ? 'IverksetterVedtakStatusModal.VedtakAvslatt'
                  : 'IverksetterVedtakStatusModal.VedtakInnvilet',
              })}
            </Label>
            <VerticalSpacer fourPx />
            <BodyShort size="small">
              {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.GoToSearchPage' })}
            </BodyShort>
          </div>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.Ok' })}
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
