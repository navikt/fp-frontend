import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHref, useLocation } from 'react-router-dom';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Alert, Button, Heading, Modal, VStack } from '@navikt/ds-react';

import type { OverstyrtDokument } from '@navikt/fp-types';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { BrevInnhold, EDITOR_HOLDER_ID } from './BrevInnhold';
import { useEditorJs } from './useEditorJs';

interface Props {
  brevHtml: OverstyrtDokument;
  hentBrev: () => Promise<void>;
  lagreManueltBrev: (html: string | null) => Promise<void>;
  forhåndsvisBrev: (data: ForhandsvisData) => void;
  setVisRedigering: (visRedigering: boolean) => void;
}

export const FritekstRedigeringModal = ({
  brevHtml,
  hentBrev,
  lagreManueltBrev,
  setVisRedigering,
  forhåndsvisBrev,
}: Props) => {
  const intl = useIntl();

  const [visTilbakestillAdvarsel, setVisTilbakestillAdvarsel] = useState(false);
  const [visForhåndsvisValideringsFeil, setVisForhåndsvisValideringsFeil] = useState(false);

  const { pathname } = useLocation();
  const href = useHref(pathname);

  const { lagreEndringer, validerEndringer, tilbakestillEndringer, forhåndsvis } = useEditorJs(
    EDITOR_HOLDER_ID,
    brevHtml,
    forhåndsvisBrev,
    lagreManueltBrev,
  );

  const lagreOgLukk = async () => {
    const erValidertOk = await validerEndringer();
    if (erValidertOk) {
      setVisForhåndsvisValideringsFeil(false);
      setVisRedigering(false);
      await lagreEndringer();
      hentBrev();
    } else {
      setVisForhåndsvisValideringsFeil(true);
    }
  };

  const forhåndsvisEditertBrev = async () => {
    const erValidertOk = await validerEndringer();
    if (!erValidertOk) {
      setVisForhåndsvisValideringsFeil(true);
    } else {
      setVisForhåndsvisValideringsFeil(false);
      forhåndsvis();
    }
  };

  const tilbakestill = async () => {
    lagreManueltBrev(null);
    tilbakestillEndringer();
    setVisTilbakestillAdvarsel(false);
  };

  const lukkModalOgHentBrevPåNytt = () => {
    setVisRedigering(false);
    hentBrev();
  };

  return (
    <>
      <Modal open onClose={lukkModalOgHentBrevPåNytt} width="53.75rem" aria-label="Rediger brev">
        <Modal.Header>
          <VStack gap="4">
            <Heading level="3" size="small">
              <FormattedMessage id="FritekstRedigeringModal.Rediger" />
            </Heading>
            <Alert variant="info" size="small">
              <FormattedMessage id="FritekstRedigeringModal.Infotekst" />
              <Button
                variant="tertiary"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  e.preventDefault();
                  window.open(href, '_blank');
                }}
                icon={<ExternalLinkIcon aria-hidden />}
                size="small"
              >
                <FormattedMessage id="FritekstRedigeringModal.ApneINyFane" />
              </Button>
            </Alert>
          </VStack>
        </Modal.Header>
        <Modal.Body>
          <BrevInnhold
            htmlMal={brevHtml}
            setVisTilbakestillAdvarsel={setVisTilbakestillAdvarsel}
            lagreOgLukk={lagreOgLukk}
            forhåndsvis={forhåndsvisEditertBrev}
            visForhåndsvisValideringsFeil={visForhåndsvisValideringsFeil}
          />
        </Modal.Body>
      </Modal>
      <Modal
        open={visTilbakestillAdvarsel}
        onClose={() => setVisTilbakestillAdvarsel(false)}
        aria-label={intl.formatMessage({ id: 'FritekstRedigeringModal.TilbakestillLabel' })}
      >
        <Modal.Header>
          <Heading as="h3" size="medium">
            <FormattedMessage id="FritekstRedigeringModal.BekreftTilbakestillTittel" />
          </Heading>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="warning" inline>
            <FormattedMessage id="FritekstRedigeringModal.BekreftTilbakestill" />
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" type="button" variant="tertiary" onClick={() => setVisTilbakestillAdvarsel(false)}>
            <FormattedMessage id="FritekstRedigeringModal.IkkeTilbakestill" />
          </Button>
          <Button size="small" type="button" variant="primary" onClick={tilbakestill}>
            <FormattedMessage id="FritekstRedigeringModal.Tilbakestill" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
