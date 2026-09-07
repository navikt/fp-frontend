import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Detail, Dialog, Heading, HStack, VStack } from '@navikt/ds-react';
import { capitalizeFirstLetter } from '@navikt/ft-utils';

import type { Feilmelding, Feilmeldingsdetaljer } from '../typer/feilmeldingTsType';

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
              {feilmeldingsdetaljer !== undefined && <FeilmeldingsdetaljerVerdi verdi={feilmeldingsdetaljer} />}
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

const FeilmeldingsdetaljerVerdi = ({ verdi }: { verdi: Feilmeldingsdetaljer }) => {
  if (verdi === null) {
    return <BodyShort size="small">-</BodyShort>;
  }

  if (Array.isArray(verdi)) {
    return (
      <VStack gap="space-8">
        {verdi.map((element, index) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key -- feildetaljer manglar stabil id, indeks trengs for unik nøkkel
          <FeilmeldingsdetaljerVerdi key={index} verdi={element} />
        ))}
      </VStack>
    );
  }

  if (typeof verdi === 'object') {
    return (
      <VStack gap="space-8">
        {Object.entries(verdi).map(([nøkkel, element]) => (
          <div key={nøkkel}>
            <Detail>{`${capitalizeFirstLetter(nøkkel)}:`}</Detail>
            <FeilmeldingsdetaljerVerdi verdi={element} />
          </div>
        ))}
      </VStack>
    );
  }

  return <BodyShort size="small">{String(verdi)}</BodyShort>;
};
