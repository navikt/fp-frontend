import React, { useCallback, KeyboardEvent, MouseEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, HStack, Link } from '@navikt/ds-react';

interface Props {
  previewVedtakCallback: () => Promise<any>;
  behandlingPaaVent: boolean;
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
}

export const VedtakKlageSubmitPanel = ({
  behandlingPaaVent,
  previewVedtakCallback,
  readOnly,
  lagreVedtak,
  isSubmitting,
}: Props) => {
  const forhåndsvis = useCallback((e: KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    previewVedtakCallback();
  }, []);

  return (
    <HStack gap="2" align="center">
      {!readOnly && (
        <Button
          variant="primary"
          size="small"
          onClick={lagreVedtak}
          disabled={behandlingPaaVent || isSubmitting}
          loading={isSubmitting}
          type="button"
        >
          <FormattedMessage id="VedtakKlageForm.TilGodkjenning" />
        </Button>
      )}
      <Link href="#" onClick={forhåndsvis} onKeyDown={e => (e.key === 'Enter' ? forhåndsvis(e) : null)}>
        <FormattedMessage id="VedtakKlageForm.ForhandvisBrev" />
      </Link>
    </HStack>
  );
};
