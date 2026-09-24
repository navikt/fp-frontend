import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, CopyButton, Dialog, HStack, Label, Link, VStack } from '@navikt/ds-react';
import { capitalizeFirstLetter } from '@navikt/ft-utils';

import type { Feilmelding, Feilmeldingsdetaljer } from '../typer/feilmeldingTsType';

interface Props {
  feilmeldingsdetaljer: Feilmelding['tilleggsInfo'];
}

export const FeilmeldingsdetaljerModal = ({ feilmeldingsdetaljer }: Props) => {
  const intl = useIntl();
  return (
    <Dialog>
      <Dialog.Trigger>
        <Link as="button" type="button" className={triggerClassName}>
          <FormattedMessage id="FeilmeldingPanel.ShowErrorDetails" />
        </Link>
      </Dialog.Trigger>
      <Dialog.Popup width="fit-content" style={{ minWidth: 'min(90dvw, 640px)', maxWidth: 'min(92dvw, 1600px)' }}>
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
          <Dialog.CloseTrigger>
            <Button variant="primary" type="button">
              <FormattedMessage id="FeilmeldingsdetaljerModal.Close" />
            </Button>
          </Dialog.CloseTrigger>
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
      <VStack as="ul" className="mx-(--ax-space-20) list-disc">
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
      <pre className="m-0 whitespace-pre-wrap wrap-break-word text-[0.75rem]">
        <code>{String(verdi)}</code>
      </pre>
    );
  }

  return <BodyShort size="small">{String(verdi)}</BodyShort>;
};

const triggerClassName =
  'cursor-pointer appearance-none border-0 bg-transparent p-0 ' +
  'font-[inherit] text-[0.875rem] text-[var(--ax-text-danger-contrast)]';
