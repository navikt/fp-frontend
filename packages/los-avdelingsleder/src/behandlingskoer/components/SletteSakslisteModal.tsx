import React, { FunctionComponent } from 'react';
import { injectIntl, WrappedComponentProps, FormattedMessage } from 'react-intl';
import { Button, BodyShort } from '@navikt/ds-react';

import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';
import Modal from '../../components/Modal';
import Saksliste from '../../typer/sakslisteAvdelingTsType';

import styles from './sletteSakslisteModal.less';

interface OwnProps {
  intl: any;
  valgtSaksliste: Saksliste;
  cancel: () => void;
  submit: (saksliste: Saksliste) => void;
}

/**
 * SletteSakslisteModal
 *
 * Presentasjonskomponent. Modal som lar en avdelingsleder fjerne sakslister.
 */
export const SletteSakslisteModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  valgtSaksliste,
  cancel,
  submit,
}) => (
  <Modal
    className={styles.modal}
    closeButton={false}
    open
    aria-label={intl.formatMessage({ id: 'SletteSakslisteModal.SletteModal' })}
    onClose={cancel}
  >
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <Image
            className={styles.image}
            alt={intl.formatMessage({ id: 'SletteSakslisteModal.SletteModal' })}
            src={advarselImageUrl}
          />
          <div className={styles.divider} />
        </FlexColumn>
        <FlexColumn className={styles.text}>
          <BodyShort size="small">
            <FormattedMessage id="SletteSakslisteModal.SletteSaksliste" values={{ sakslisteNavn: valgtSaksliste.navn }} />
          </BodyShort>
        </FlexColumn>
        <FlexColumn>
          <Button
            className={styles.submitButton}
            size="small"
            variant="primary"
            onClick={() => submit(valgtSaksliste)}
            autoFocus
            type="button"
          >
            {intl.formatMessage({ id: 'SletteSakslisteModal.Ja' })}
          </Button>
        </FlexColumn>
        <FlexColumn>
          <Button
            className={styles.cancelButton}
            size="small"
            variant="secondary"
            onClick={cancel}
            type="button"
          >
            {intl.formatMessage({ id: 'SletteSakslisteModal.Nei' })}
          </Button>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </Modal>
);

export default injectIntl(SletteSakslisteModal);
