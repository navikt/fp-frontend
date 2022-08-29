import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';
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
      isOpen={visModal}
      closeButton={false}
      contentLabel={imageAltText}
      onRequestClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
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
          <Normaltekst>
            {intl.formatMessage({ id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.VedtakAvslatt' : 'IverksetterVedtakStatusModal.VedtakInnvilet' })}
          </Normaltekst>
          <Normaltekst>
            {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.GoToSearchPage' })}
          </Normaltekst>
        </Column>
        <Column xs="2">
          <Hovedknapp
            mini
            className={styles.button}
            onClick={lukkModal}
            autoFocus
          >
            {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.Ok' })}
          </Hovedknapp>
        </Column>

      </Row>
    </Modal>
  );
};

export default IverksetterVedtakStatusModal;
