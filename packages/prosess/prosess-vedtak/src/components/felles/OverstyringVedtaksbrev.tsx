import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FritekstRedigeringModal } from '../editor/FritekstRedigeringModal';
import type { ForhandsvisData } from '../forstegang/VedtakForm';

interface Props {
  forhåndsvisBrev: (data: ForhandsvisData) => void;
  brevOverstyring?: BrevOverstyring;
  refetchBrevOverstyring: () => void;
  mellomlagreBrevOverstyring: (html: string | null) => Promise<void>;
}

export const OverstyringVedtaksbrev = ({
  forhåndsvisBrev,
  brevOverstyring,
  refetchBrevOverstyring,
  mellomlagreBrevOverstyring,
}: Props) => {
  const { isReadOnly } = usePanelDataContext();

  const [visFritekstRedigeringModal, setVisFritekstRedigeringModal] = useState(false);

  const forhåndsvisOverstyrtHtmlBrev = () => {
    forhåndsvisBrev({
      automatiskVedtaksbrev: false,
      dokumentMal: DokumentMalType.FRITEKST_HTML,
      gjelderVedtak: true,
      fritekst: brevOverstyring?.redigertHtml ?? '',
    });
  };

  return (
    <div style={{ maxWidth: '500px' }}>
      <VStack gap="4">
        {!isReadOnly && !brevOverstyring?.redigertHtml && (
          <Alert variant="info" size="small">
            <FormattedMessage id="VedtakFellesPanel.KanRedigeres" />
          </Alert>
        )}
        {!!brevOverstyring?.redigertHtml && (
          <Alert variant="info" size="small">
            <FormattedMessage id="VedtakFellesPanel.ErOverstyrt" />
          </Alert>
        )}
        <Box padding="4" borderRadius="medium" background="surface-subtle">
          <HStack gap="2" align="end">
            {!isReadOnly && (
              <VStack gap="4">
                <Heading size="small">
                  <FormattedMessage id="VedtakFellesPanel.RedigerBrevOverskrift" />
                </Heading>
                <HStack>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => setVisFritekstRedigeringModal(true)}
                    size="small"
                    disabled={isReadOnly}
                  >
                    <FormattedMessage id="VedtakFellesPanel.RedigerVedtaksbrev" />
                  </Button>
                </HStack>
              </VStack>
            )}
            {(isReadOnly || !!brevOverstyring?.redigertHtml) && (
              <div>
                <Button
                  variant="tertiary"
                  size="small"
                  icon={<FileSearchIcon aria-hidden />}
                  onClick={() => forhåndsvisOverstyrtHtmlBrev()}
                  onKeyDown={e => (e.key === 'Enter' ? forhåndsvisOverstyrtHtmlBrev() : null)}
                  type="button"
                >
                  <FormattedMessage id="VedtakForm.ForhandvisBrev" />
                </Button>
              </div>
            )}
          </HStack>
        </Box>
      </VStack>
      {brevOverstyring && visFritekstRedigeringModal && (
        <FritekstRedigeringModal
          setVisFritekstRedigeringModal={setVisFritekstRedigeringModal}
          brevOverstyring={brevOverstyring}
          refetchBrevOverstyring={refetchBrevOverstyring}
          forhåndsvisBrev={forhåndsvisBrev}
          mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
        />
      )}
    </div>
  );
};
