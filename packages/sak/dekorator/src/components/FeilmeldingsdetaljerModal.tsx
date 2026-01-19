import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, Dialog, Heading, HStack, VStack } from '@navikt/ds-react';

import type { Feilmelding } from '../typer/feilmeldingTsType';
import { capitalizeFirstLetter } from '@navikt/ft-utils';

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
  return (
    <Dialog open={skalViseModal} onOpenChange={lukkModal}>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <HStack gap="space-16">
              <ExclamationmarkTriangleFillIcon aria-hidden width={30} height={30} color="var(--ax-warning-600)" />
              <Heading size="small" level="2">
                <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
              </Heading>
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <HStack gap="space-40">
            <div />
            <VStack gap="space-16">
              {feilmeldingsdetaljer &&
                Object.keys(feilmeldingsdetaljer).map(edKey => (
                  <div key={edKey}>
                    <Detail>{`${capitalizeFirstLetter(edKey)}:`}</Detail>
                    <div>
                      {/* @ts-expect-error Fiks. Dette vil kreve at vi lager en rekursiv rendering av objectet */}
                      <BodyShort size="small">{feilmeldingsdetaljer[edKey]}</BodyShort>
                    </div>
                  </div>
                ))}
            </VStack>
          </HStack>
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="secondary" onClick={lukkModal} type="button">
            <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
