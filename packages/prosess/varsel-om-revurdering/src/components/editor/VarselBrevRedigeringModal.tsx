import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert, Button, Dialog } from '@navikt/ds-react';

import type { ForhandsvisData } from '../VarselOmRevurderingForm';
import { VarselBrevInnhold, VARSEL_EDITOR_HOLDER_ID } from './VarselBrevInnhold';
import { useVarselEditorJs } from './useVarselEditorJs';

interface Props {
  opprinneligHtml: string;
  redigertHtml: string | null;
  forhåndsvisBrev: (data: ForhandsvisData) => void;
  setVisRedigeringModal: (vis: boolean) => void;
  onLagre: (redigertHtml: string) => Promise<void>;
}

export const VarselBrevRedigeringModal = ({
  opprinneligHtml,
  redigertHtml,
  forhåndsvisBrev,
  setVisRedigeringModal,
  onLagre,
}: Props) => {
  const [visTilbakestillAdvarselModal, setVisTilbakestillAdvarselModal] = useState(false);
  const [visValideringsFeil, setVisValideringsFeil] = useState(false);

  const { hentRedigertHtml, validerEndringer, tilbakestillEndringer } = useVarselEditorJs(
    VARSEL_EDITOR_HOLDER_ID,
    opprinneligHtml,
    redigertHtml,
  );

  const lagreOgLukk = async () => {
    const erValidertOk = await validerEndringer();
    if (erValidertOk) {
      setVisValideringsFeil(false);
      const html = await hentRedigertHtml();
      await onLagre(html);
      setVisRedigeringModal(false);
    } else {
      setVisValideringsFeil(true);
    }
  };

  const forhåndsvisEditertBrev = async () => {
    const erValidertOk = await validerEndringer();
    if (erValidertOk) {
      setVisValideringsFeil(false);
      const html = await hentRedigertHtml();
      forhåndsvisBrev({
        dokumentMal: 'FRIHTM',
        årsakskode: 'ANNET',
        fritekst: html,
      });
    } else {
      setVisValideringsFeil(true);
    }
  };

  const tilbakestill = () => {
    void tilbakestillEndringer();
    setVisTilbakestillAdvarselModal(false);
  };

  return (
    <>
      <Dialog open onOpenChange={() => setVisRedigeringModal(false)} size="small">
        <Dialog.Popup width="53.75rem">
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="VarselBrevRedigeringModal.Rediger" />
            </Dialog.Title>
            <Dialog.Description>
              <Alert variant="info" size="small" style={{ marginTop: '1rem' }}>
                <FormattedMessage id="VarselBrevRedigeringModal.Infotekst" />
              </Alert>
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <VarselBrevInnhold
              opprinneligHtml={opprinneligHtml}
              setVisTilbakestillAdvarselModal={setVisTilbakestillAdvarselModal}
              lagreOgLukk={lagreOgLukk}
              forhåndsvis={forhåndsvisEditertBrev}
              visForhåndsvisValideringsFeil={visValideringsFeil}
            />
          </Dialog.Body>
        </Dialog.Popup>
      </Dialog>
      <Dialog open={visTilbakestillAdvarselModal} onOpenChange={() => setVisTilbakestillAdvarselModal(false)}>
        <Dialog.Popup closeOnOutsideClick={false} withBackdrop>
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="VarselBrevRedigeringModal.BekreftTilbakestillTittel" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Alert variant="warning" inline>
              <FormattedMessage id="VarselBrevRedigeringModal.BekreftTilbakestill" />
            </Alert>
          </Dialog.Body>
          <Dialog.Footer>
            <Button size="small" type="button" variant="tertiary" onClick={() => setVisTilbakestillAdvarselModal(false)}>
              <FormattedMessage id="VarselBrevRedigeringModal.IkkeTilbakestill" />
            </Button>
            <Button size="small" type="button" variant="primary" onClick={tilbakestill}>
              <FormattedMessage id="VarselBrevRedigeringModal.Tilbakestill" />
            </Button>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </>
  );
};
