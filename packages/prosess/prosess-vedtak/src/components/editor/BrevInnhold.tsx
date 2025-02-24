import { FormattedMessage } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { Alert, Button, HStack, VStack } from '@navikt/ds-react';

import { usePanelDataContext } from '@navikt/fp-utils';

import {
  utledPrefiksInnhold,
  utledSeksjonerSomKanRedigeres,
  utledStiler,
  utledSuffiksInnhold,
} from './redigeringsUtils';

import styles from './brevInnhold.module.css';

export const EDITOR_HOLDER_ID = 'rediger-brev';

interface Props {
  htmlMal: string;
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

  const brevStiler = utledStiler(htmlMal);

  const seksjonerSomKanRedigeres = utledSeksjonerSomKanRedigeres(htmlMal);
  const prefiksInnhold = utledPrefiksInnhold(seksjonerSomKanRedigeres);
  const suffiksInnhold = utledSuffiksInnhold(seksjonerSomKanRedigeres);

  return (
    <>
      <div className={styles.papir}>
        <div className={styles.nullstillCss}>
          <div className="brev-wrapper">
            <style>{` ${brevStiler} `}</style>
            <div className={styles.ikkeRedigerbartInnhold} dangerouslySetInnerHTML={{ __html: prefiksInnhold }} />
            <div id="content">
              <div id={EDITOR_HOLDER_ID} className={styles.redigerbartInnhold} style={{ width: '100%' }} />
            </div>
            <div className={styles.ikkeRedigerbartInnhold} dangerouslySetInnerHTML={{ __html: suffiksInnhold }} />
          </div>
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
          <Button
            variant="tertiary"
            size="small"
            onClick={() => forhåndsvis()}
            onKeyDown={e => (e.keyCode === 13 ? forhåndsvis() : null)}
            type="button"
          >
            <FormattedMessage id="VedtakForm.ForhandvisBrev" />
          </Button>
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
