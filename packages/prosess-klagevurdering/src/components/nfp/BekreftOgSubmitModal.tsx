import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';

export type TransformedValues = {
  kode: string;
  klageMedholdArsak?: string;
  klageVurderingOmgjoer?: string;
  klageHjemmel?: string;
  fritekstTilBrev: string;
  begrunnelse: string;
  klageVurdering: string;
};

interface OwnProps {
  erModalÅpen: boolean;
  lukkModal: () => void;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  readOnly: boolean;
  opprettholdVedtak?: boolean;
  valgtHjemmel?: string;
}

const BekreftOgSubmitModal: FunctionComponent<OwnProps> = ({
  erModalÅpen,
  lukkModal,
  isSubmittable,
  isSubmitting,
  isDirty,
  readOnly,
  opprettholdVedtak,
  valgtHjemmel,
}) => {
  const intl = useIntl();
  return (
    <Modal
      width="500px"
      open={erModalÅpen}
      aria-label={intl.formatMessage({ id: 'Klage.Modal.Overskrift' })}
      onClose={lukkModal}
    >
      <Modal.Body>
        <VStack gap="3">
          <div>
            <Label size="medium">
              <FormattedMessage id="Klage.Modal.Overskrift" />
            </Label>
            <VerticalSpacer fourPx />
            <BodyShort>
              <FormattedMessage id="Klage.Modal.SendTilKlageinstans" />
            </BodyShort>
            <VerticalSpacer sixteenPx />
            <BodyShort>
              <FormattedMessage id="Klage.Modal.Valg" />
            </BodyShort>
            <VerticalSpacer eightPx />
            {opprettholdVedtak !== undefined && (
              <BodyShort>
                <FormattedMessage id={opprettholdVedtak ? 'Klage.Modal.Oppretthold' : 'Klage.Modal.Omgjør'} />
              </BodyShort>
            )}
            <VerticalSpacer fourPx />
            {valgtHjemmel && (
              <BodyShort>
                <FormattedMessage id="Klage.Modal.Hjemmel" values={{ hjemmel: valgtHjemmel }} />
              </BodyShort>
            )}
            <VerticalSpacer fourPx />
          </div>
          <div>
            <HStack gap="2">
              <ProsessStegSubmitButtonNew
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

export default BekreftOgSubmitModal;
