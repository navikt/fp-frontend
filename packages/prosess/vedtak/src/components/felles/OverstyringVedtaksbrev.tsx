import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import { DokumentMalType } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';
import { FritekstRedigeringModal } from '../editor/FritekstRedigeringModal';

interface Props {
  forhåndsvisBrev: (data: VedtakForhåndsvisData) => void;
  setHarValgtÅRedigereVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
}

export const OverstyringVedtaksbrev = ({ forhåndsvisBrev, setHarValgtÅRedigereVedtaksbrev }: Props) => {
  const intl = useIntl();
  const { isReadOnly } = usePanelDataContext();

  const {
    harRedigertBrev,
    setHarRedigertBrev,
    hentBrevOverstyring,
    hentBrevOverstyringIsPending,
    mellomlagreBrevOverstyring,
  } = useVedtakEditeringContext();

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
    setHarRedigertBrev(false);
    setHarValgtÅRedigereVedtaksbrev(false);

    await mellomlagreBrevOverstyring(null);
  };

  const forhåndsvisRedigertHtmlBrev = () => {
    if (brevOverstyring?.redigertHtml) {
      forhåndsvisBrev({
        automatiskVedtaksbrev: false,
        dokumentMal: DokumentMalType.FRITEKST_HTML,
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
      <VStack gap="space-16">
        <Box.New padding="4" borderRadius="medium" background="neutral-soft">
          <VStack gap="space-16">
            {!isReadOnly && !brevOverstyring?.redigertHtml && !hentBrevOverstyringIsPending && (
              <Alert variant="info" size="small">
                <FormattedMessage id="OverstyringVedtaksbrev.KanRedigeres" />
              </Alert>
            )}
            {!!brevOverstyring?.redigertHtml && !hentBrevOverstyringIsPending && (
              <Alert variant="success" size="small">
                <FormattedMessage id="OverstyringVedtaksbrev.ErOverstyrt" />
              </Alert>
            )}
            {!isReadOnly && (
              <>
                <Heading size="small" level="2">
                  <FormattedMessage id="OverstyringVedtaksbrev.RedigerBrevOverskrift" />
                </Heading>
                <HStack gap="space-16">
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
        </Box.New>
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
