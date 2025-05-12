import { type KeyboardEvent, type MouseEvent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, Link } from '@navikt/ds-react';

import { type VedtakKlageForhandsvisData } from './VedtakKlageForm';

interface Props {
  previewVedtakCallback: (data: VedtakKlageForhandsvisData) => void;
  behandlingPåVent: boolean;
  readOnly: boolean;
  lagreVedtak: () => void;
  isSubmitting: boolean;
}

export const VedtakKlageSubmitPanel = ({
  behandlingPåVent,
  previewVedtakCallback,
  readOnly,
  lagreVedtak,
  isSubmitting,
}: Props) => {
  const forhåndsvis = useCallback((e: KeyboardEvent | MouseEvent) => {
    e.preventDefault();
    previewVedtakCallback({
      gjelderVedtak: true,
    });
  }, []);

  return (
    <HStack gap="2" align="center">
      {!readOnly && (
        <Button
          variant="primary"
          size="small"
          onClick={lagreVedtak}
          disabled={behandlingPåVent || isSubmitting}
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
