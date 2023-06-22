import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Button, Modal, Heading, Label, BodyShort } from '@navikt/ds-react';
import { DateLabel, FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './settPaVentReadOnlyModal.module.css';

const finnFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};

export type FormValues = {
  frist?: string;
  ventearsak?: string;
};

interface PureOwnProps {
  lukkCallback: () => void;
  ventearsaker: KodeverkMedNavn[];
  ventearsak?: string;
}

const SettPaVentReadOnlyModal: FunctionComponent<PureOwnProps> = ({ lukkCallback, ventearsaker, ventearsak }) => {
  const intl = useIntl();

  return (
    <Modal
      className={styles.modal}
      open
      closeButton={false}
      aria-label={intl.formatMessage({
        id: 'SettPaVentReadOnlyModal.ModalDescriptionErPaVent',
      })}
      onClose={lukkCallback}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Heading size="small">
          <FormattedMessage id="SettPaVentReadOnlyModal.ModalDescriptionErPaVent" />
        </Heading>
        <VerticalSpacer sixteenPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Label>
                <FormattedMessage id="SettPaVentReadOnlyModal.Arsak" />
              </Label>
              <BodyShort>{ventearsaker.find(v => v.kode === ventearsak)?.navn}</BodyShort>
            </FlexColumn>
            <FlexColumn>
              <Label>
                <FormattedMessage id="SettPaVentReadOnlyModal.Frist" />
              </Label>
              <BodyShort>
                <DateLabel dateString={finnFrist()} />
              </BodyShort>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <VerticalSpacer twentyPx />
        <Button size="small" variant="primary" onClick={lukkCallback}>
          <FormattedMessage id="SettPaVentReadOnlyModal.Forsiden" />
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default SettPaVentReadOnlyModal;
