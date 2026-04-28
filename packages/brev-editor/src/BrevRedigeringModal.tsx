import { useMemo, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { useHref, useLocation } from 'react-router-dom';

import { ExternalLinkIcon } from '@navikt/aksel-icons';
import { Alert, Button, Dialog } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { BrevInnhold } from './BrevInnhold';
import { utledDelerFraBrev, utledRedigerbartInnhold } from './redigeringsUtils';
import { useBrevEditorJs } from './useBrevEditorJs';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const BREV_EDITOR_HOLDER_ID = 'brev-rediger-innhold';

interface Props {
  /** Full opprinnelig HTML fra backend */
  opprinneligHtml: string;
  /** Redigert HTML fra mellomlagring, eller null hvis ikke redigert */
  redigertHtml: string | null;
  /** Kalles med pakket HTML ved auto-mellomlagring og eksplisitt lagring */
  mellomlagreOgHentPåNytt: (html: string | null) => Promise<void>;
  /** Kalles med ferdig HTML for forhåndsvisning */
  forhåndsvisBrev: (html: string) => void;
  setVisRedigeringModal: (vis: boolean) => void;
  isReadOnly?: boolean;
}

/**
 * Generisk modal for redigering av brev med Editor.js.
 *
 * HTML-parsing skjer internt. Backend-malene (fp-dokgen) bestemmer hva som er
 * redigerbart (`[data-editable]`) og hva som er readonly (`#readonly-innhold`).
 * Eventuelt readonly-innhold vises som footer under editoren.
 */
export const BrevRedigeringModal = ({
  opprinneligHtml,
  redigertHtml,
  mellomlagreOgHentPåNytt,
  forhåndsvisBrev,
  setVisRedigeringModal,
  isReadOnly = false,
}: Props) => {
  const [visTilbakestillAdvarselModal, setVisTilbakestillAdvarselModal] = useState(false);
  const [visValideringsFeil, setVisValideringsFeil] = useState(false);

  const { pathname } = useLocation();
  const href = useHref(pathname);

  const { footer, redigerbartInnhold, opprinneligRedigerbartInnhold } = useMemo(() => {
    const { footer: detectedFooter } = utledDelerFraBrev(opprinneligHtml);
    return {
      footer: detectedFooter,
      redigerbartInnhold: utledRedigerbartInnhold(redigertHtml ?? opprinneligHtml),
      opprinneligRedigerbartInnhold: utledRedigerbartInnhold(opprinneligHtml),
    };
  }, [opprinneligHtml, redigertHtml]);

  const { tilbakestillEndringer, hentEditorStatus } = useBrevEditorJs(
    BREV_EDITOR_HOLDER_ID,
    redigerbartInnhold,
    footer,
    mellomlagreOgHentPåNytt,
  );

  const lagreOgLukk = async () => {
    const { erGyldig, erEndret, redigertHtml: editorHtml } = await hentEditorStatus();
    if (erGyldig) {
      setVisValideringsFeil(false);
      if (erEndret) {
        await mellomlagreOgHentPåNytt(editorHtml);
      }
      setVisRedigeringModal(false);
    } else {
      setVisValideringsFeil(true);
    }
  };

  const forhåndsvisEditertBrev = async () => {
    const { erGyldig, redigertHtml: editorHtml } = await hentEditorStatus();
    if (erGyldig) {
      setVisValideringsFeil(false);
      forhåndsvisBrev(editorHtml);
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

