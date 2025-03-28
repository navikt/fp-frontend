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
  mellomlagreBrevOverstyring: (redigertInnhold: string | null) => Promise<void>;
  setVisForkastOverstyringModal: (visForkastOverstyring: boolean) => void;
}

export const OverstyringVedtaksbrev = ({
  forhåndsvisBrev,
  brevOverstyring,
  refetchBrevOverstyring,
  mellomlagreBrevOverstyring,
  setVisForkastOverstyringModal,
}: Props) => {
  const { isReadOnly } = usePanelDataContext();

  const [visFritekstRedigeringModal, setVisFritekstRedigeringModal] = useState(false);
  const [harRedigertBrev, setHarRedigertBrev] = useState(false);

  const mellomlagre = (html: string | null) => {
    setHarRedigertBrev(true);
    return mellomlagreBrevOverstyring(html);
  };

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
        <Box padding="4" borderRadius="medium" background="surface-subtle">
          <VStack gap="4">
            {!isReadOnly && !brevOverstyring?.redigertHtml && (
              <Alert variant="info" size="small">
                <FormattedMessage id="OverstyringVedtaksbrev.KanRedigeres" />
              </Alert>
            )}
            {!!brevOverstyring?.redigertHtml && (
              <Alert variant="success" size="small">
                <FormattedMessage id="OverstyringVedtaksbrev.ErOverstyrt" />
              </Alert>
            )}
            {!isReadOnly && (
              <>
                <Heading size="small">
                  <FormattedMessage id="OverstyringVedtaksbrev.RedigerBrevOverskrift" />
                </Heading>
                <HStack gap="4">
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => setVisFritekstRedigeringModal(true)}
                    size="small"
                    disabled={isReadOnly}
                  >
                    <FormattedMessage id="OverstyringVedtaksbrev.RedigerVedtaksbrev" />
                  </Button>
                  <Button
                    size="small"
                    variant="secondary"
                    onClick={() => setVisForkastOverstyringModal(true)}
                    type="button"
                  >
                    <FormattedMessage id="OverstyringVedtaksbrev.ForkastManueltBrev" />
                  </Button>
                </HStack>
              </>
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
                  {isReadOnly ? (
                    <FormattedMessage id="OverstyringVedtaksbrev.VisBrev" />
                  ) : (
                    <FormattedMessage id="OverstyringVedtaksbrev.ForhandvisBrev" />
                  )}
                </Button>
              </div>
            )}
            {!isReadOnly && !!brevOverstyring?.redigertHtml && !harRedigertBrev && (
              <Alert variant="info" size="small">
                <FormattedMessage id="OverstyringVedtaksbrev.SkjeddEndringIBehandling" />
              </Alert>
            )}
          </VStack>
        </Box>
      </VStack>
      {brevOverstyring && visFritekstRedigeringModal && (
        <FritekstRedigeringModal
          setVisFritekstRedigeringModal={setVisFritekstRedigeringModal}
          brevOverstyring={brevOverstyring}
          refetchBrevOverstyring={refetchBrevOverstyring}
          forhåndsvisBrev={forhåndsvisBrev}
          mellomlagreBrevOverstyring={mellomlagre}
        />
      )}
    </div>
  );
};
