import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, Heading, HStack, Label, Modal, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { VenteArsakType } from '@navikt/fp-kodeverk';
import type { KodeverkMedNavn } from '@navikt/fp-types';

interface Props {
  lukkCallback: () => void;
  ventearsaker: KodeverkMedNavn<'Venteårsak'>[];
  ventearsak?: VenteArsakType;
  frist: string | null;
}

export const SettPaVentReadOnlyModal = ({ lukkCallback, ventearsaker, ventearsak, frist }: Props) => {
  const intl = useIntl();

  return (
    <Modal
      open
      width="small"
      aria-label={intl.formatMessage({
        id: 'SettPaVentReadOnlyModal.ModalDescriptionErPaVent',
      })}
      onClose={lukkCallback}
    >
      <Modal.Header>
        <Heading size="small" level="1">
          <FormattedMessage id="SettPaVentReadOnlyModal.ModalDescriptionErPaVent" />
        </Heading>
      </Modal.Header>
      <Modal.Body>
        <HStack gap="space-24">
          <VStack gap="space-4">
            <Label>
              <FormattedMessage id="SettPaVentReadOnlyModal.Arsak" />
            </Label>
            <BodyShort>{ventearsaker.find(v => v.kode === ventearsak)?.navn}</BodyShort>
          </VStack>
          <VStack gap="space-4">
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

const lagFramtidigFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};
