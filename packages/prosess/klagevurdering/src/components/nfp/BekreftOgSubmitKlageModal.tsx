import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import { ProsessStegSubmitButton } from '@navikt/fp-prosess-felles';

interface Props {
  erModalÅpen: boolean;
  lukkModal: () => void;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  readOnly: boolean;
  valgtHjemmel?: string;
}

export const BekreftOgSubmitKlageModal = ({
  erModalÅpen,
  lukkModal,
  isSubmittable,
  isSubmitting,
  isDirty,
  readOnly,
  valgtHjemmel,
}: Props) => {
  const intl = useIntl();
  return (
    <Modal
      width="500px"
      open={erModalÅpen}
      aria-label={intl.formatMessage({ id: 'Klage.Modal.Overskrift' })}
      onClose={lukkModal}
    >
      <Modal.Body>
        <VStack gap="space-12">
          <VStack gap="space-16">
            <Label size="medium">
              <FormattedMessage id="Klage.Modal.Overskrift" />
            </Label>
            <BodyShort>
              <FormattedMessage id="Klage.Modal.SendTilKlageinstans" />
            </BodyShort>
            <BodyShort>
              <FormattedMessage id="Klage.Modal.Valg" />
            </BodyShort>
            <BodyShort>
              <FormattedMessage id="Klage.Modal.Oppretthold" />
            </BodyShort>
            {valgtHjemmel && (
              <BodyShort>
                <FormattedMessage id="Klage.Modal.Hjemmel" values={{ hjemmel: valgtHjemmel }} />
              </BodyShort>
            )}
          </VStack>
          <div>
            <HStack gap="space-8">
              <ProsessStegSubmitButton
                isReadOnly={readOnly}
                isSubmittable={isSubmittable}
                isSubmitting={isSubmitting}
                isDirty={isDirty}
              />
              <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
                <FormattedMessage id="Klage.Modal.Avbryt" />
              </Button>
            </HStack>
          </div>
        </VStack>
      </Modal.Body>
    </Modal>
  );
};
