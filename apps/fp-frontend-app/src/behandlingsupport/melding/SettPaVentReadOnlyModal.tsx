import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Heading, HStack, Label, Modal, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { KodeverkMedNavn } from '@navikt/fp-types';

import styles from './settPaVentReadOnlyModal.module.css';

const lagFramtidigFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};

interface Props {
  lukkCallback: () => void;
  ventearsaker: KodeverkMedNavn[];
  ventearsak?: string;
  frist?: string;
}

export const SettPaVentReadOnlyModal = ({ lukkCallback, ventearsaker, ventearsak, frist }: Props) => {
  const intl = useIntl();

  return (
    <Modal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({
        id: 'SettPaVentReadOnlyModal.ModalDescriptionErPaVent',
      })}
      onClose={lukkCallback}
    >
      <Modal.Header>
        <Heading size="small">
          <FormattedMessage id="SettPaVentReadOnlyModal.ModalDescriptionErPaVent" />
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <HStack gap="6">
          <VStack gap="1">
            <Label>
              <FormattedMessage id="SettPaVentReadOnlyModal.Arsak" />
            </Label>
            <BodyShort>{ventearsaker.find(v => v.kode === ventearsak)?.navn}</BodyShort>
          </VStack>
          <VStack gap="1">
            <Label>
              <FormattedMessage id="SettPaVentReadOnlyModal.Frist" />
            </Label>
            <BodyShort>
              <DateLabel dateString={frist ?? lagFramtidigFrist()} />
            </BodyShort>
          </VStack>
        </HStack>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="primary" onClick={lukkCallback}>
          <FormattedMessage id="SettPaVentReadOnlyModal.Forsiden" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
