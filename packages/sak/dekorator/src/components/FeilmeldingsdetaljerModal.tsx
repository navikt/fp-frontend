import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, Heading, HStack, Modal, VStack } from '@navikt/ds-react';

import type { Feilmelding } from '../typer/feilmeldingTsType';

import styles from './feilmeldingsdetaljerModal.module.css';

const capitalizeFirstLetters = (key: string): string => key.charAt(0).toUpperCase() + key.substring(1);

interface Props {
  skalViseModal: boolean;
  lukkModal: () => void;
  feilmeldingsdetaljer?: Feilmelding['tilleggsInfo'];
}

/**
 * FeilmeldingsdetaljerModal
 *
 * Modal som viser en feildetaljer.
 */
export const FeilmeldingsdetaljerModal = ({ skalViseModal, lukkModal, feilmeldingsdetaljer }: Props) => {
  const intl = useIntl();
  return (
    <Modal
      width="medium"
      open={skalViseModal}
      aria-label={intl.formatMessage({ id: 'FeilmeldingsdetaljerModal.ErrorDetails' })}
      onClose={lukkModal}
    >
      <Modal.Header>
        <HStack gap="4">
          <ExclamationmarkTriangleFillIcon className={styles.image} />
          <Heading size="small">
            <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
          </Heading>
        </HStack>
      </Modal.Header>
      <Modal.Body>
        <HStack gap="10">
          <div />
          <VStack gap="4">
            {feilmeldingsdetaljer &&
              Object.keys(feilmeldingsdetaljer).map(edKey => (
                <div key={edKey}>
                  <Detail>{`${capitalizeFirstLetters(edKey)}:`}</Detail>
                  <div>
                    {/* @ts-expect-error Fiks */}
                    <BodyShort size="small">{feilmeldingsdetaljer[edKey]}</BodyShort>
                  </div>
                </div>
              ))}
          </VStack>
        </HStack>
      </Modal.Body>
      <Modal.Footer>
        <Button size="small" variant="secondary" onClick={lukkModal} type="button">
          <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
