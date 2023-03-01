import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import {
  Modal, Button, BodyShort, Label,
} from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { BehandlingResultatType } from '@navikt/ft-kodeverk';

import innvilgetImageUrl from '../../../../images/innvilget_valgt.svg';

import styles from './iverksetterVedtakStatusModal.module.css';

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
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image
                className={styles.image}
                alt={imageAltText}
                src={innvilgetImageUrl}
              />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                {intl.formatMessage({ id: erVedtakAvslatt ? 'IverksetterVedtakStatusModal.VedtakAvslatt' : 'IverksetterVedtakStatusModal.VedtakInnvilet' })}
              </Label>
              <VerticalSpacer fourPx />
              <BodyShort size="small">
                {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.GoToSearchPage' })}
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button
                size="small"
                variant="primary"
                onClick={lukkModal}
                autoFocus
                type="button"
              >
                {intl.formatMessage({ id: 'IverksetterVedtakStatusModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default IverksetterVedtakStatusModal;
