import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Dialog, HStack, Label, VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type { KodeverkMedNavn, VenteArsakType } from '@navikt/fp-types';

interface Props {
  lukkCallback: () => void;
  ventearsaker: KodeverkMedNavn<'Venteårsak'>[];
  ventearsak?: VenteArsakType;
  frist?: string;
}

export const SettPaVentReadOnlyModal = ({ lukkCallback, ventearsaker, ventearsak, frist }: Props) => {
  return (
    <Dialog open size="small" onOpenChange={() => lukkCallback()}>
      <Dialog.Popup closeOnOutsideClick={false} width="small">
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="SettPaVentReadOnlyModal.ModalDescriptionErPaVent" />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
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
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={lukkCallback}>
            <FormattedMessage id="SettPaVentReadOnlyModal.Forsiden" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};

const lagFramtidigFrist = (): string => {
  const date = dayjs().toDate();
  date.setDate(date.getDate() + 28);
  return dayjs(date).format(ISO_DATE_FORMAT);
};
