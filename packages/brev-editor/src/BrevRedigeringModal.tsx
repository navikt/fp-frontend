import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { useHref, useLocation } from 'react-router-dom';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Alert, Button, Dialog } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { BrevInnhold } from './BrevInnhold';
import { useBrevEditorJs } from './useBrevEditorJs';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const BREV_EDITOR_HOLDER_ID = 'brev-rediger-innhold';

interface Props {
  /** Opprinnelig HTML fra backend – brukes til å hente ut CSS-stiler, logo og header */
  opprinneligHtml: string;
  /** Pre-beregnet redigerbart innhold (kallende kode håndterer domenregler som harPraksisUtsettelse) */
  redigerbartInnhold: string;
  /** Pre-beregnet opprinnelig redigerbart innhold – brukes ved tilbakestilling */
  opprinneligRedigerbartInnhold: string;
  /** Valgfri readonly-seksjon som vises under editoren (undefined = ingen separat footer) */
  footer?: string;
  /** Kalles med pakket HTML ved auto-mellomlagring og eksplisitt lagring */
  mellomlagreOgHentPåNytt: (html: string | null) => Promise<void>;
  /** Kalles med pakket HTML for forhåndsvisning */
  forhåndsvisBrev: (html: string) => void;
  setVisRedigeringModal: (vis: boolean) => void;
  isReadOnly?: boolean;
  visÅpneINyFaneKnapp?: boolean;
}

/**
 * Generisk modal for redigering av brev med Editor.js.
 *
 * Kallende kode er ansvarlig for å pre-beregne `redigerbartInnhold`, `opprinneligRedigerbartInnhold`
 * og `footer` ut fra domeneregler (f.eks. harPraksisUtsettelse for vedtak).
 */
export const BrevRedigeringModal = ({
  opprinneligHtml,
  redigerbartInnhold,
  opprinneligRedigerbartInnhold,
  footer,
  mellomlagreOgHentPåNytt,
  forhåndsvisBrev,
  setVisRedigeringModal,
  isReadOnly = false,
  visÅpneINyFaneKnapp = false,
}: Props) => {
  const [visTilbakestillAdvarselModal, setVisTilbakestillAdvarselModal] = useState(false);
  const [visValideringsFeil, setVisValideringsFeil] = useState(false);

  const { pathname } = useLocation();
  const href = useHref(pathname);

  const { tilbakestillEndringer, hentEditorStatus } = useBrevEditorJs(
    BREV_EDITOR_HOLDER_ID,
    redigerbartInnhold,
    footer,
    { onAutoSave: mellomlagreOgHentPåNytt },
  );

  const lagreOgLukk = async () => {
    const { erGyldig, erEndret, redigertHtml } = await hentEditorStatus();
    if (erGyldig) {
      setVisValideringsFeil(false);
      if (erEndret) {
        await mellomlagreOgHentPåNytt(redigertHtml);
      }
      setVisRedigeringModal(false);
    } else {
      setVisValideringsFeil(true);
    }
  };

  const forhåndsvisEditertBrev = async () => {
    const { erGyldig, redigertHtml } = await hentEditorStatus();
    if (erGyldig) {
      setVisValideringsFeil(false);
      forhåndsvisBrev(redigertHtml);
    } else {
      setVisValideringsFeil(true);
    }
  };

  const tilbakestill = () => {
    void tilbakestillEndringer(opprinneligRedigerbartInnhold);
    setVisTilbakestillAdvarselModal(false);
  };

  return (
    <RawIntlProvider value={intl}>
      <Dialog
        open
        onOpenChange={() => {
          setVisRedigeringModal(false);
        }}
        size="small"
      >
        <Dialog.Popup width="53.75rem">
          <Dialog.Header>
            <Dialog.Title>
              <FormattedMessage id="BrevRedigeringModal.Tittel" />
            </Dialog.Title>
            <Dialog.Description>
              <Alert variant="info" size="small" style={{ marginTop: '1rem' }}>
                <FormattedMessage id="BrevRedigeringModal.Infotekst" />
                {visÅpneINyFaneKnapp && (
                  <Button
                    variant="tertiary"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      e.preventDefault();
                      globalThis.open(href, '_blank');
                    }}
                    iconPosition="right"
                    icon={<ExternalLinkIcon aria-hidden />}
                    size="small"
                  >
                    <FormattedMessage id="BrevRedigeringModal.ApneINyFane" />
                  </Button>
                )}
              </Alert>
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <BrevInnhold
              opprinneligHtml={opprinneligHtml}
              editorHolderId={BREV_EDITOR_HOLDER_ID}
              footer={footer}
              isReadOnly={isReadOnly}
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
              <FormattedMessage id="BrevRedigeringModal.BekreftTilbakestillTittel" />
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Alert variant="warning" inline>
              <FormattedMessage id="BrevRedigeringModal.BekreftTilbakestill" />
            </Alert>
          </Dialog.Body>
          <Dialog.Footer>
            <Button
              size="small"
              type="button"
              variant="tertiary"
              onClick={() => setVisTilbakestillAdvarselModal(false)}
            >
              <FormattedMessage id="BrevRedigeringModal.IkkeTilbakestill" />
            </Button>
            <Button size="small" type="button" variant="primary" onClick={tilbakestill}>
              <FormattedMessage id="BrevRedigeringModal.Tilbakestill" />
            </Button>
          </Dialog.Footer>
        </Dialog.Popup>
      </Dialog>
    </RawIntlProvider>
  );
};

