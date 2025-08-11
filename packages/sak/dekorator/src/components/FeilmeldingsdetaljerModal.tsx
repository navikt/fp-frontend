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
        <HStack gap="space-16">
          <ExclamationmarkTriangleFillIcon className={styles.image} />
          <Heading size="small" level="2">
            <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
          </Heading>
        </HStack>
      </Modal.Header>
      <Modal.Body>
        <HStack gap="space-40">
          <div />
          <VStack gap="space-16">
            {feilmeldingsdetaljer &&
              Object.keys(feilmeldingsdetaljer).map(edKey => (
                <div key={edKey}>
                  <Detail>{`${capitalizeFirstLetters(edKey)}:`}</Detail>
                  <div>
                    {/* @ts-expect-error Fiks. Dette vil kreve at vi lager en rekursiv rendering av objectet */}
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
