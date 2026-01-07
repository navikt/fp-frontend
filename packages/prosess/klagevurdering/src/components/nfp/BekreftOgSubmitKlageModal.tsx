import { FormattedMessage } from 'react-intl';

import { BodyShort, Button, Dialog, VStack } from '@navikt/ds-react';

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
  return (
    <Dialog open={erModalÅpen} onOpenChange={lukkModal} size="small">
      <Dialog.Popup closeOnOutsideClick={false} width="small">
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <FormattedMessage id="Klage.Modal.Overskrift" />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <VStack gap="space-12">
            <VStack gap="space-16">
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
          </VStack>
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            <FormattedMessage id="Klage.Modal.Avbryt" />
          </Button>
          <ProsessStegSubmitButton
            isReadOnly={readOnly}
            isSubmittable={isSubmittable}
            isSubmitting={isSubmitting}
            isDirty={isDirty}
          />
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
