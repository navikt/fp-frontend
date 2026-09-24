import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, Detail, Dialog, HStack, Label, VStack } from '@navikt/ds-react';
import { capitalizeFirstLetter } from '@navikt/ft-utils';

import type { Feilmelding, Feilmeldingsdetaljer } from '../typer/feilmeldingTsType';

import styles from './feilmeldingPanel.module.css';

interface Props {
  skalViseModal: boolean;
  lukkModal: () => void;
  feilmeldingsdetaljer?: Feilmelding['tilleggsInfo'];
}

export const FeilmeldingsdetaljerModal = ({ skalViseModal, lukkModal, feilmeldingsdetaljer }: Props) => {
  const intl = useIntl();
  return (
    <Dialog open={skalViseModal} onOpenChange={lukkModal}>
      <Dialog.Popup width="large">
        <Dialog.Header>
          <HStack gap="space-16">
            <ExclamationmarkTriangleFillIcon
              aria-hidden
              width={32}
              height={32}
              color="var(--ax-text-warning-decoration)"
            />
            <Dialog.Title>
              <FormattedMessage id="FeilmeldingsdetaljerModal.ErrorDetails" />
            </Dialog.Title>
          </HStack>
        </Dialog.Header>
        <Dialog.Body>
          <VStack gap="space-16">
            {feilmeldingsdetaljer !== undefined && <FeilmeldingsdetaljerVerdi verdi={feilmeldingsdetaljer} />}
          </VStack>
        </Dialog.Body>
        <Dialog.Footer>
          <CopyButton
            data-color="accent"
            text={intl.formatMessage({ id: 'FeilmeldingsdetaljerModal.KopierFeil' })}
            copyText={feilmeldingsdetaljer ? JSON.stringify(feilmeldingsdetaljer, null, 2) : ''}
          />
          <Button variant="primary" onClick={lukkModal} type="button">
            <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};

const FeilmeldingsdetaljerVerdi = ({
  nøkkelForVerdi,
  verdi,
}: {
  nøkkelForVerdi?: string;
  verdi: Feilmeldingsdetaljer;
}) => {
  if (verdi === null) {
    return <BodyShort size="small">-</BodyShort>;
  }

  if (Array.isArray(verdi)) {
    return (
      <VStack as="ul" className={styles['list']}>
        {verdi.map((element, index) => (
          // eslint-disable-next-line @eslint-react/no-array-index-key -- feildetaljer manglar stabil id, indeks trengs for unik nøkkel
          <li key={index}>
            <FeilmeldingsdetaljerVerdi verdi={element} />
          </li>
        ))}
      </VStack>
    );
  }

  if (typeof verdi === 'object') {
    return (
      <VStack gap="space-8" marginInline={nøkkelForVerdi ? 'space-16' : undefined}>
        {Object.entries(verdi).map(([nøkkel, element]) => (
          <div key={nøkkel}>
            <Label size="small">{`${capitalizeFirstLetter(nøkkel)}:`}</Label>
            <FeilmeldingsdetaljerVerdi nøkkelForVerdi={nøkkel} verdi={element} />
          </div>
        ))}
      </VStack>
    );
  }

  if (nøkkelForVerdi === 'stacktrace') {
    return (
      <Detail>
        <pre>{String(verdi)}</pre>
      </Detail>
    );
  }

  return <BodyShort size="small">{String(verdi)}</BodyShort>;
};
