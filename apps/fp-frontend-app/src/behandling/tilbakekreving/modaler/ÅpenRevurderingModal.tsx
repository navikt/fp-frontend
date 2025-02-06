import { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, Modal } from '@navikt/ds-react';

export const ÅpenRevurderingModal = ({ harÅpenRevurdering }: { harÅpenRevurdering: boolean }) => {
  const intl = useIntl();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (harÅpenRevurdering) {
      ref.current?.showModal();
    }
  }, [harÅpenRevurdering]);

  return (
    <Modal
      ref={ref}
      width="small"
      aria-label={intl.formatMessage({ id: 'ÅpenRevurderingModal.ApenRevurderingHeader' })}
    >
      <Modal.Header closeButton={false}>
        <HStack gap="4" align="center">
          <ExclamationmarkTriangleFillIcon width={35} height={35} color="var(--a-orange-600)" />
          <Heading size="small">{intl.formatMessage({ id: 'ÅpenRevurderingModal.ApenRevurderingHeader' })}</Heading>
        </HStack>
      </Modal.Header>
      <Modal.Body>
        <BodyShort size="small">{intl.formatMessage({ id: 'ÅpenRevurderingModal.ApenRevurdering' })}</BodyShort>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="primary" onClick={() => ref.current?.close()} autoFocus type="button">
          {intl.formatMessage({ id: 'ÅpenRevurderingModal.Ok' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
