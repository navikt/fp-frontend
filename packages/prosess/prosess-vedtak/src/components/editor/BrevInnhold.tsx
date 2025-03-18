import { FormattedMessage } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';

import type { OverstyrtDokument } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { utledReadonlyInnhold, utledStiler } from './redigeringsUtils';

import styles from './brevInnhold.module.css';

export const EDITOR_HOLDER_ID = 'rediger-brev';

interface Props {
  htmlMal: OverstyrtDokument;
  setVisTilbakestillAdvarsel: (skalVise: boolean) => void;
  lagreOgLukk: () => void;
  forhåndsvis: () => void;
  visForhåndsvisValideringsFeil: boolean;
}

export const BrevInnhold = ({
  htmlMal,
  setVisTilbakestillAdvarsel,
  visForhåndsvisValideringsFeil,
  forhåndsvis,
  lagreOgLukk,
}: Props) => {
  const { isReadOnly } = usePanelDataContext();

  const brevStiler = utledStiler(htmlMal.opprinneligHtml);
  const readonlyInnhold = utledReadonlyInnhold(htmlMal.opprinneligHtml);

  return (
    <>
      <div className={styles.dokument}>
        <div className="brev-wrapper">
          <style>{` ${brevStiler} `}</style>
          <div className={styles.logo} dangerouslySetInnerHTML={{ __html: readonlyInnhold.navLogo }} />
          <div className={styles.header} dangerouslySetInnerHTML={{ __html: readonlyInnhold.header }} />
          <div id="content">
            <div id={EDITOR_HOLDER_ID} className={styles.redigerbartInnhold} />
          </div>
          <div className={styles.footer} dangerouslySetInnerHTML={{ __html: readonlyInnhold.footer }} />
        </div>
      </div>
      <footer>
        <VStack gap="4">
          {visForhåndsvisValideringsFeil && (
            <>
              {/* TODO */}
              <Alert variant="error">TODO</Alert>
            </>
          )}
          <HStack justify="center">
            <Button
              variant="tertiary"
              size="small"
              onClick={() => forhåndsvis()}
              onKeyDown={e => (e.key === 'Enter' ? forhåndsvis() : null)}
              type="button"
            >
              <FormattedMessage id="VedtakForm.ForhandvisBrev" />
            </Button>
          </HStack>
          <HStack justify="space-between">
            <Button type="button" variant="primary" onClick={lagreOgLukk} disabled={isReadOnly} size="small">
              <FormattedMessage id="BrevInnhold.Lagre" />
            </Button>
            <Button
              variant="tertiary"
              icon={<XMarkIcon aria-hidden />}
              type="button"
              onClick={() => setVisTilbakestillAdvarsel(true)}
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
