import { FormattedMessage } from 'react-intl';

import { ArrowUndoIcon, FileSearchIcon } from '@navikt/aksel-icons';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';

import { utledDelerFraBrev, utledStiler } from './redigeringsUtils';

import styles from './brevInnhold.module.css';

export const VARSEL_EDITOR_HOLDER_ID = 'rediger-varsel-brev';

interface Props {
  opprinneligHtml: string;
  setVisTilbakestillAdvarselModal: (skalVise: boolean) => void;
  lagreOgLukk: () => void;
  forhåndsvis: () => void;
  visForhåndsvisValideringsFeil: boolean;
}

export const VarselBrevInnhold = ({
  opprinneligHtml,
  setVisTilbakestillAdvarselModal,
  visForhåndsvisValideringsFeil,
  forhåndsvis,
  lagreOgLukk,
}: Props) => {
  const brevStiler = utledStiler(opprinneligHtml);
  const { navLogo, header, footer } = utledDelerFraBrev(opprinneligHtml);

  return (
    <>
      <div className={styles['dokument']}>
        <div className="brev-wrapper">
          <style>{` ${brevStiler} `}</style>
          <div className={styles['logo']} dangerouslySetInnerHTML={{ __html: navLogo }} />
          <div className={styles['header']} dangerouslySetInnerHTML={{ __html: header }} />
          <div id="content">
            <div id={VARSEL_EDITOR_HOLDER_ID} className={styles['redigerbartInnhold']} />
          </div>
          <div className={styles['footer']} dangerouslySetInnerHTML={{ __html: footer }} />
        </div>
      </div>
      <footer>
        <VStack gap="space-16">
          {visForhåndsvisValideringsFeil && (
            <Alert variant="error">
              <FormattedMessage id="VarselBrevInnhold.InnholdMangler" />
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
              <FormattedMessage id="VarselBrevInnhold.ForhandvisBrev" />
            </Button>
          </HStack>
          <HStack justify="space-between">
            <Button type="button" variant="primary" onClick={lagreOgLukk} size="small">
              <FormattedMessage id="VarselBrevInnhold.Lagre" />
            </Button>
            <Button
              variant="tertiary"
              icon={<ArrowUndoIcon aria-hidden />}
              type="button"
              onClick={() => setVisTilbakestillAdvarselModal(true)}
              size="small"
            >
              <FormattedMessage id="VarselBrevInnhold.Tilbakestill" />
            </Button>
          </HStack>
        </VStack>
      </footer>
    </>
  );
};
