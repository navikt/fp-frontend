import { FormattedMessage } from 'react-intl';

import { ArrowUndoIcon, FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';

import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';
import type { BrevOverstyring } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { utledDelerFraBrev, utledStiler } from './redigeringsUtils';

import styles from './brevInnhold.module.css';

export const EDITOR_HOLDER_ID = 'rediger-brev';

interface Props {
  brevOverstyring: BrevOverstyring;
  setVisTilbakestillAdvarselModal: (skalVise: boolean) => void;
  lagreOgLukk: () => void;
  forhåndsvis: () => void;
  visForhåndsvisValideringsFeil: boolean;
}

export const BrevInnhold = ({
  brevOverstyring,
  setVisTilbakestillAdvarselModal,
  visForhåndsvisValideringsFeil,
  forhåndsvis,
  lagreOgLukk,
}: Props) => {
  const { isReadOnly, fagsak } = usePanelDataContext();

  const harPraksisUtsettelse = !!fagsak.fagsakMarkeringer?.some(
    markering => markering.fagsakMarkering === FagsakMarkeringKode.PRAKSIS_UTSETTELSE,
  );

  const brevStiler = utledStiler(brevOverstyring.opprinneligHtml);
  const { navLogo, header, footer } = utledDelerFraBrev(brevOverstyring.opprinneligHtml);

  return (
    <>
      <div className={styles.dokument}>
        <div className="brev-wrapper">
          <style>{` ${brevStiler} `}</style>
          <div className={styles.logo} dangerouslySetInnerHTML={{ __html: navLogo }} />
          <div className={styles.header} dangerouslySetInnerHTML={{ __html: header }} />
          <div id="content">
            <div id={EDITOR_HOLDER_ID} className={styles.redigerbartInnhold} />
          </div>
          {!harPraksisUtsettelse && <div className={styles.footer} dangerouslySetInnerHTML={{ __html: footer }} />}
        </div>
      </div>
      <footer>
        <VStack gap="4">
          {visForhåndsvisValideringsFeil && (
            <Alert variant="error">
              <FormattedMessage id="BrevInnhold.InnholdMangler" />
            </Alert>
          )}
          <HStack justify="center">
            <Button
              variant="tertiary"
              icon={<FileSearchIcon aria-hidden />}
              size="small"
              onClick={() => forhåndsvis()}
              onKeyDown={e => (e.key === 'Enter' ? forhåndsvis() : null)}
              type="button"
            >
              <FormattedMessage id="BrevInnhold.ForhandvisBrev" />
            </Button>
          </HStack>
          <HStack justify="space-between">
            <Button type="button" variant="primary" onClick={lagreOgLukk} disabled={isReadOnly} size="small">
              <FormattedMessage id="BrevInnhold.Lagre" />
            </Button>
            <Button
              variant="tertiary"
              icon={<ArrowUndoIcon aria-hidden />}
              type="button"
              onClick={() => setVisTilbakestillAdvarselModal(true)}
              disabled={isReadOnly}
              size="small"
            >
              <FormattedMessage id="BrevInnhold.Tilbakestill" />
            </Button>
          </HStack>
        </VStack>
      </footer>
    </>
  );
};
