import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, BodyShort, Modal as NavModal } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';

import advarselImageUrl from '../../images/advarsel.svg';
import Saksliste from '../../typer/sakslisteAvdelingTsType';

import styles from './sletteSakslisteModal.module.css';

interface OwnProps {
  valgtSaksliste: Saksliste;
  cancel: () => void;
  submit: (saksliste: Saksliste) => void;
}

/**
 * SletteSakslisteModal
 *
 * Modal som lar en avdelingsleder fjerne sakslister.
 */
const SletteSakslisteModal: FunctionComponent<OwnProps> = ({ valgtSaksliste, cancel, submit }) => {
  const intl = useIntl();
  return (
    <NavModal
      className={styles.modal}
      closeButton={false}
      open
      aria-label={intl.formatMessage({ id: 'SletteSakslisteModal.SletteModal' })}
      onClose={cancel}
    >
      <NavModal.Content>
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
                <FormattedMessage
                  id="SletteSakslisteModal.SletteSaksliste"
                  values={{ sakslisteNavn: valgtSaksliste.navn }}
                />
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
              <Button className={styles.cancelButton} size="small" variant="secondary" onClick={cancel} type="button">
                {intl.formatMessage({ id: 'SletteSakslisteModal.Nei' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </NavModal.Content>
    </NavModal>
  );
};

export default SletteSakslisteModal;
