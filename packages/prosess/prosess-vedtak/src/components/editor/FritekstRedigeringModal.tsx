import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Button, Heading, Modal, VStack } from '@navikt/ds-react';

import type { Vedtaksbrev } from '../../types/Vedtaksbrev';
import { BrevInnhold, EDITOR_HOLDER_ID } from './BrevInnhold';
import { useEditorJs } from './useEditorJs';

interface Props {
  htmlMal: string;
  vedtaksbrev: Vedtaksbrev;
}

export const FritekstRedigeringModal = ({ htmlMal }: Props) => {
  const [visRedigering, setVisRedigering] = useState(false);
  const [visTilbakestillAdvarsel, setVisTilbakestillAdvarsel] = useState(false);
  const [visForhåndsvisValideringsFeil, setVisForhåndsvisValideringsFeil] = useState(false);

  const { lagreEndringer, validerEndringer, tilbakestillEndringer } = useEditorJs(EDITOR_HOLDER_ID, htmlMal);

  const lagreOgLukk = () => {
    lagreEndringer();
    setVisRedigering(false);
  };

  const forhåndsvis = async () => {
    const erValidertOk = await validerEndringer();
    if (!erValidertOk) {
      setVisForhåndsvisValideringsFeil(true);
    } else {
      setVisForhåndsvisValideringsFeil(false);
      // FIXME: previewCallback
    }
  };

  const tilbakestill = () => {
    tilbakestillEndringer();
    setVisTilbakestillAdvarsel(false);
  };

  return (
    <>
      <Button variant="secondary" type="button" onClick={() => setVisRedigering(true)} size="small">
        Rediger
      </Button>
      <Modal open={visRedigering} onClose={() => setVisRedigering(false)} width="53.75rem" aria-label="Rediger brev">
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
            htmlMal={htmlMal}
            setVisTilbakestillAdvarsel={setVisTilbakestillAdvarsel}
            lagreOgLukk={lagreOgLukk}
            forhåndsvis={forhåndsvis}
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
