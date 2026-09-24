import { useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, VStack } from '@navikt/ds-react';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import type { Feilmelding } from '../typer/feilmeldingTsType';
import { FeilmeldingsdetaljerModal } from './FeilmeldingsdetaljerModal';

interface Props {
  feilmeldinger: Feilmelding[];
  fjernFeilmeldinger: () => void;
}

/**
 * FeilmeldingPanel
 *
 * Definerer hvordan feilmeldinger vises under header.
 */
export const FeilmeldingPanel = ({ feilmeldinger, fjernFeilmeldinger }: Props) => {
  const intl = useIntl();

  if (feilmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={containerClassName}>
      <HStack wrap={false} justify="space-between">
        <VStack gap="space-8">
          {feilmeldinger.map(message => (
            <div key={message.melding}>
              <BodyShort size="small" className="whitespace-pre-line">
                {decodeHtmlEntity(message.melding)}
              </BodyShort>
              {message.tilleggsInfo && <FeilmeldingsdetaljerModal feilmeldingsdetaljer={message.tilleggsInfo} />}
            </div>
          ))}
        </VStack>

        <Button
          variant="primary"
          data-color="danger"
          size="small"
          type="button"
          icon={<XMarkIcon aria-hidden />}
          title={intl.formatMessage({ id: 'FeilmeldingPanel.Close' })}
          onClick={fjernFeilmeldinger}
        />
      </HStack>
    </div>
  );
};

const containerClassName =
  'relative block max-h-[120px] min-h-[53px] overflow-x-hidden overflow-y-auto ' +
  'bg-[var(--ax-bg-danger-strong)] px-[24px] py-[8px] text-[var(--ax-text-danger-contrast)]';
