import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Modal, Button, BodyShort } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';
import { BehandlingResultatType } from '@navikt/ft-kodeverk';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './iverksetterVedtakStatusModal.less';

interface OwnProps {
  lukkModal: () => void;
  visModal: boolean;
  behandlingsresultat?: {
    type: string;
  };
}

/**
 * IverksetterVedtakStatusModal
 *
 * Presentasjonskomponent. Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir den NAV-ansatte tatt tilbake til sokesiden.
 */
const IverksetterVedtakStatusModal: FunctionComponent<OwnProps> = ({
  lukkModal,
  visModal,
  behandlingsresultat,
}) => {
  const intl = useIntl();
  const erVedtakAvslatt = behandlingsresultat && behandlingsresultat.type === BehandlingResultatType.AVSLATT;
  const imageAltText = intl.formatMessage({ id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.Avslatt' : 'IverksetterVedtakStatusModal.Innvilget' });

  return (
    <Modal
      className={styles.modal}
      open={visModal}
      closeButton={false}
      aria-label={imageAltText}
      onClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Row className="">
          <Column xs="1">
            <Image
              className={styles.image}
              alt={imageAltText}
              src={innvilgetImageUrl}
            />
            <div className={styles.divider} />
          </Column>
          <Column xs="9">
            <BodyShort size="small">
              {intl.formatMessage({ id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.VedtakAvslatt' : 'IverksetterVedtakStatusModal.VedtakInnvilet' })}
            </BodyShort>
            <BodyShort size="small">
              {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.GoToSearchPage' })}
            </BodyShort>
          </Column>
          <Column xs="2">
            <Button
              size="small"
              variant="primary"
              className={styles.button}
              onClick={lukkModal}
              autoFocus
              type="button"
            >
              {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.Ok' })}
            </Button>
          </Column>

        </Row>
      </Modal.Content>
    </Modal>
  );
};

export default IverksetterVedtakStatusModal;
