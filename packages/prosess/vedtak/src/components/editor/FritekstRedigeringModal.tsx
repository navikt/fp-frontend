import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useHref, useLocation } from 'react-router-dom';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Alert, Button, Heading, Modal, VStack } from '@navikt/ds-react';

import type { BrevOverstyring } from '@navikt/fp-types';

import type { VedtakForhåndsvisData } from '../../types/VedtakForhåndsvisData';
import { BrevInnhold, EDITOR_HOLDER_ID } from './BrevInnhold';
import { useEditorJs } from './useEditorJs';

interface Props {
  brevOverstyring: BrevOverstyring;
  mellomlagreOgHentPåNytt: (redigertInnhold: string | null) => Promise<void>;
  forhåndsvisBrev: (data: VedtakForhåndsvisData) => void;
  setVisFritekstRedigeringModal: (visRedigering: boolean) => void;
}

export const FritekstRedigeringModal = ({
  brevOverstyring,
  mellomlagreOgHentPåNytt,
  setVisFritekstRedigeringModal,
  forhåndsvisBrev,
}: Props) => {
  const intl = useIntl();

  const [visTilbakestillAdvarselModal, setVisTilbakestillAdvarselModal] = useState(false);
  const [visValideringsFeil, setVisValideringsFeil] = useState(false);

  const { pathname } = useLocation();
  const href = useHref(pathname);

  const { lagreEndringer, validerEndringer, tilbakestillEndringer, forhåndsvis } = useEditorJs(
    EDITOR_HOLDER_ID,
    brevOverstyring,
    mellomlagreOgHentPåNytt,
    forhåndsvisBrev,
  );

  const lagreOgLukk = async () => {
    const erValidertOk = await validerEndringer();
    if (erValidertOk) {
      setVisValideringsFeil(false);
      setVisFritekstRedigeringModal(false);
      lagreEndringer();
    } else {
      setVisValideringsFeil(true);
    }
  };

  const forhåndsvisEditertBrev = async () => {
    const erValidertOk = await validerEndringer();
    if (erValidertOk) {
      setVisValideringsFeil(false);
      forhåndsvis();
    } else {
      setVisValideringsFeil(true);
    }
  };

  const tilbakestill = async () => {
    tilbakestillEndringer();
    setVisTilbakestillAdvarselModal(false);
  };

  return (
    <>
      <Modal
        open
        onClose={() => {
          setVisFritekstRedigeringModal(false);
        }}
        width="53.75rem"
        aria-label="Rediger brev"
      >
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
                iconPosition="right"
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
            brevOverstyring={brevOverstyring}
            setVisTilbakestillAdvarselModal={setVisTilbakestillAdvarselModal}
            lagreOgLukk={lagreOgLukk}
            forhåndsvis={forhåndsvisEditertBrev}
            visForhåndsvisValideringsFeil={visValideringsFeil}
          />
        </Modal.Body>
      </Modal>
      <Modal
        open={visTilbakestillAdvarselModal}
        onClose={() => setVisTilbakestillAdvarselModal(false)}
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
          <Button size="small" type="button" variant="tertiary" onClick={() => setVisTilbakestillAdvarselModal(false)}>
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
