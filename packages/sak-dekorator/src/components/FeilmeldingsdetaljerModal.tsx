import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal, Button, BodyShort, Detail, Heading, HStack, VStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Feilmelding } from '../typer/feilmeldingTsType';

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
          <VStack>
            {feilmeldingsdetaljer &&
              Object.keys(feilmeldingsdetaljer).map(edKey => (
                <React.Fragment key={edKey}>
                  <Detail>{`${capitalizeFirstLetters(edKey)}:`}</Detail>
                  <div>
                    {/* @ts-ignore Fiks */}
                    <BodyShort size="small">{feilmeldingsdetaljer[edKey]}</BodyShort>
                  </div>
                  <VerticalSpacer eightPx />
                </React.Fragment>
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
