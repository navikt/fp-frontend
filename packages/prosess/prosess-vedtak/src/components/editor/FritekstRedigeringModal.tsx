import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Button, Heading, Modal, VStack } from '@navikt/ds-react';

import type { ForhandsvisData } from '../forstegang/VedtakForm';
import { BrevInnhold, EDITOR_HOLDER_ID } from './BrevInnhold';
import { useEditorJs } from './useEditorJs';

interface Props {
  brevHtml: string;
  lagreManueltBrev: (html: string) => Promise<void>;
  forkastManueltBrev: () => Promise<void>;
  forhåndsvisBrev: (data: ForhandsvisData) => void;
  setVisRedigering: (visRedigering: boolean) => void;
}

export const FritekstRedigeringModal = ({
  brevHtml,
  lagreManueltBrev,
  setVisRedigering,
  forkastManueltBrev,
  forhåndsvisBrev,
}: Props) => {
  const [visTilbakestillAdvarsel, setVisTilbakestillAdvarsel] = useState(false);
  const [visForhåndsvisValideringsFeil, setVisForhåndsvisValideringsFeil] = useState(false);

  const { lagreEndringer, validerEndringer, tilbakestillEndringer, forhåndsvis } = useEditorJs(
    EDITOR_HOLDER_ID,
    brevHtml,
    forhåndsvisBrev,
    lagreManueltBrev,
  );

  const lagreOgLukk = () => {
    lagreEndringer();
    setVisRedigering(false);
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

  const tilbakestill = () => {
    forkastManueltBrev();
    tilbakestillEndringer();
    setVisTilbakestillAdvarsel(false);
  };

  return (
    <>
      <Modal open onClose={() => setVisRedigering(false)} width="53.75rem" aria-label="Rediger brev">
        <Modal.Header>
          <VStack gap="4">
            <Heading level="3" size="small">
              <FormattedMessage id="FritekstRedigeringModal.Rediger" />
            </Heading>
            <Alert variant="info" size="small">
              <FormattedMessage id="FritekstRedigeringModal.Infotekst" />
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
        aria-label="Tilbakestill brev"
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
