import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { FritekstRedigeringModal } from '../editor/FritekstRedigeringModal';
import type { ForhandsvisData } from '../forstegang/VedtakForm';

interface Props {
  forhåndsvisBrev: (data: ForhandsvisData) => void;
  hentBrevOverstyring: () => Promise<BrevOverstyring>;
  mellomlagreBrevOverstyring: (redigertInnhold: string | null) => Promise<void>;
  setHarRedigertBrev: (harRedigert: boolean) => void;
  harRedigertBrev: boolean;
  setHarValgtÅRedigereVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
}

export const OverstyringVedtaksbrev = ({
  forhåndsvisBrev,
  hentBrevOverstyring,
  mellomlagreBrevOverstyring,
  setHarRedigertBrev,
  harRedigertBrev,
  setHarValgtÅRedigereVedtaksbrev,
}: Props) => {
  const intl = useIntl();
  const { isReadOnly } = usePanelDataContext();

  const [visForkastOverstyringModal, setVisForkastOverstyringModal] = useState(false);

  const [visFritekstRedigeringModal, setVisFritekstRedigeringModal] = useState(false);

  const [brevOverstyring, setBrevOverstyring] = useState<BrevOverstyring | null>(null);

  useEffect(() => {
    if (harRedigertBrev) {
      hentBrevOverstyring().then(setBrevOverstyring);
    }
  }, []);

  const visFritekstModalOgHentBrev = async () => {
    if (!brevOverstyring) {
      const res = await hentBrevOverstyring();
      setBrevOverstyring(res);
    }
    setVisFritekstRedigeringModal(true);
  };

  const mellomlagreOgHentPåNytt = async (html: string | null) => {
    setHarRedigertBrev(html !== null);
    await mellomlagreBrevOverstyring(html);
    const res = await hentBrevOverstyring();
    setBrevOverstyring(res);
  };

  const forkastOverstyrtBrev = async () => {
    setVisForkastOverstyringModal(false);
    setHarValgtÅRedigereVedtaksbrev(false);

    await mellomlagreBrevOverstyring(null);
  };

  const forhåndsvisRedigertHtmlBrev = () => {
    if (brevOverstyring?.redigertHtml) {
      forhåndsvisBrev({
        automatiskVedtaksbrev: false,
        dokumentMal: DokumentMalType.FRITEKST_HTML,
        gjelderVedtak: true,
        fritekst: brevOverstyring.redigertHtml,
      });
    }
  };

  return (
    <div style={{ maxWidth: '500px' }}>
      <OkAvbrytModal
        text={intl.formatMessage({ id: 'VedtakFellesPanel.Forkast' })}
        okButtonText={intl.formatMessage({ id: 'VedtakFellesPanel.Ok' })}
        showModal={visForkastOverstyringModal}
        cancel={() => setVisForkastOverstyringModal(false)}
        submit={forkastOverstyrtBrev}
      />
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
                    onClick={visFritekstModalOgHentBrev}
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
                  onClick={() => forhåndsvisRedigertHtmlBrev()}
                  onKeyDown={e => (e.key === 'Enter' ? forhåndsvisRedigertHtmlBrev() : null)}
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
          forhåndsvisBrev={forhåndsvisBrev}
          mellomlagreOgHentPåNytt={mellomlagreOgHentPåNytt}
        />
      )}
    </div>
  );
};
