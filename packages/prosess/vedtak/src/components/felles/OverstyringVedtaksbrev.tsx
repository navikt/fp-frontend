import { useEffect, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Box, Button, Heading, HStack, VStack } from '@navikt/ds-react';
import { OkAvbrytModal } from '@navikt/ft-ui-komponenter';

import {
  BrevRedigeringModal,
  utledDelerFraBrev,
  utledRedigerbartInnhold,
} from '@navikt/fp-prosess-brev-editor';
import type { BrevOverstyring } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import { useVedtakEditeringContext } from '../../VedtakEditeringContext';

interface Props {
  forhåndsvisBrev: (data: VedtakForhåndsvisData) => void;
  setHarValgtÅRedigereVedtaksbrev: (harOverstyrtVedtaksbrev: boolean) => void;
}

export const OverstyringVedtaksbrev = ({ forhåndsvisBrev, setHarValgtÅRedigereVedtaksbrev }: Props) => {
  const intl = useIntl();
  const { isReadOnly, fagsak } = usePanelDataContext();

  const harPraksisUtsettelse = fagsak.fagsakMarkeringer.some(
    markering => markering.fagsakMarkering === 'PRAKSIS_UTSETTELSE',
  );

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
  const hasFetchedBrevOverstyring = useRef(false);

  useEffect(() => {
    if (!hasFetchedBrevOverstyring.current && harRedigertBrev && hentBrevOverstyring) {
      hasFetchedBrevOverstyring.current = true;
      void hentBrevOverstyring().then(setBrevOverstyring);
    }
  }, []);

  const visFritekstModalOgHentBrev = async () => {
    if (!brevOverstyring && hentBrevOverstyring) {
      const res = await hentBrevOverstyring();
      setBrevOverstyring(res);
    }
    setVisFritekstRedigeringModal(true);
  };

  const mellomlagreOgHentPåNytt = async (html: string | null) => {
    setHarRedigertBrev(html !== null);
    await mellomlagreBrevOverstyring(html);
    if (hentBrevOverstyring) {
      const res = await hentBrevOverstyring();
      setBrevOverstyring(res);
    }
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
        dokumentMal: 'FRIHTM',
        fritekst: brevOverstyring.redigertHtml,
      });
    }
  };

  const forhåndsvisRedigertBrevFraEditor = (html: string) => {
    const fritekst = harPraksisUtsettelse
      ? // For praksisUtsettelse: send kun innholdet (uten wrapper), p-tags er allerede lagt til av wrapperen
        new DOMParser().parseFromString(html, 'text/html').querySelector('[data-editable]')?.innerHTML ?? html
      : html;
    forhåndsvisBrev({
      automatiskVedtaksbrev: false,
      dokumentMal: 'FRIHTM',
      fritekst,
    });
  };

  const beregnEditorVerdier = (brevData: BrevOverstyring) => {
    const { footer } = harPraksisUtsettelse ? { footer: undefined } : utledDelerFraBrev(brevData.opprinneligHtml);
    const redigerbartInnhold = utledRedigerbartInnhold(
      brevData.redigertHtml ?? brevData.opprinneligHtml,
      harPraksisUtsettelse,
    );
    const opprinneligRedigerbartInnhold = utledRedigerbartInnhold(brevData.opprinneligHtml, harPraksisUtsettelse);
    return { footer, redigerbartInnhold, opprinneligRedigerbartInnhold };
  };

  const editorVerdier = brevOverstyring && visFritekstRedigeringModal ? beregnEditorVerdier(brevOverstyring) : null;

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
        <Box padding="space-16" borderRadius="4" background="neutral-soft">
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
        </Box>
      </VStack>
      {editorVerdier && brevOverstyring && visFritekstRedigeringModal && (
        <BrevRedigeringModal
          opprinneligHtml={brevOverstyring.opprinneligHtml}
          redigerbartInnhold={editorVerdier.redigerbartInnhold}
          opprinneligRedigerbartInnhold={editorVerdier.opprinneligRedigerbartInnhold}
          footer={editorVerdier.footer}
          mellomlagreOgHentPåNytt={mellomlagreOgHentPåNytt}
          forhåndsvisBrev={forhåndsvisRedigertBrevFraEditor}
          setVisRedigeringModal={setVisFritekstRedigeringModal}
          isReadOnly={isReadOnly}
          visÅpneINyFaneKnapp
        />
      )}
    </div>
  );
};

