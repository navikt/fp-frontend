import { FormattedMessage } from 'react-intl';

import { ArrowUndoIcon, FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';

import { utledDelerFraBrev, utledStiler } from './redigeringsUtils';

import styles from './brevInnhold.module.css';

interface Props {
  opprinneligHtml: string;
  editorHolderId: string;
  footer?: string;
  isReadOnly?: boolean;
  visForhåndsvisValideringsFeil: boolean;
  setVisTilbakestillAdvarselModal: (skalVise: boolean) => void;
  lagreOgLukk: () => void;
  forhåndsvis: () => void;
}

export const BrevInnhold = ({
  opprinneligHtml,
  editorHolderId,
  footer,
  isReadOnly = false,
  visForhåndsvisValideringsFeil,
  setVisTilbakestillAdvarselModal,
  lagreOgLukk,
  forhåndsvis,
}: Props) => {
  const brevStiler = utledStiler(opprinneligHtml);
  const { navLogo, header } = utledDelerFraBrev(opprinneligHtml);

  return (
    <>
      <div className={styles['dokument']}>
        <div className="brev-wrapper">
          <style>{` ${brevStiler} `}</style>
          <div className={styles['logo']} dangerouslySetInnerHTML={{ __html: navLogo }} />
          <div className={styles['header']} dangerouslySetInnerHTML={{ __html: header }} />
          <div id="content">
            <div id={editorHolderId} className={styles['redigerbartInnhold']} />
          </div>
          {footer !== undefined && <div className={styles['footer']} dangerouslySetInnerHTML={{ __html: footer }} />}
        </div>
      </div>
      <footer>
        <VStack gap="space-16">
          {visForhåndsvisValideringsFeil && (
            <Alert variant="error">
              <FormattedMessage id="BrevEditor.InnholdMangler" />
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
              <FormattedMessage id="BrevEditor.ForhandvisBrev" />
            </Button>
          </HStack>
          <HStack justify="space-between">
            <Button type="button" variant="primary" onClick={lagreOgLukk} disabled={isReadOnly} size="small">
              <FormattedMessage id="BrevEditor.Lagre" />
            </Button>
            <Button
              variant="tertiary"
              icon={<ArrowUndoIcon aria-hidden />}
              type="button"
              onClick={() => setVisTilbakestillAdvarselModal(true)}
              disabled={isReadOnly}
              size="small"
            >
              <FormattedMessage id="BrevEditor.Tilbakestill" />
            </Button>
          </HStack>
        </VStack>
      </footer>
    </>
  );
};
