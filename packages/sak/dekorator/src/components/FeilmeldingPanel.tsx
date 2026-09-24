import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Link, VStack } from '@navikt/ds-react';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import type { Feilmelding } from '../typer/feilmeldingTsType';
import { FeilmeldingsdetaljerModal } from './FeilmeldingsdetaljerModal';

import styles from './feilmeldingPanel.module.css';

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
  const [erModalÅpen, setErModalÅpen] = useState(false);
  const [valgtFeilmeldingIndex, setValgtFeilmeldingIndex] = useState<number | undefined>(undefined);

  const toggleModalOnClick = (event: React.MouseEvent | React.KeyboardEvent, index: number): void => {
    setErModalÅpen(!erModalÅpen);
    setValgtFeilmeldingIndex(index);
    event.preventDefault();
  };

  const toggleModalOnKeyDown = (event: React.KeyboardEvent, index: number): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleModalOnClick(event, index);
    } else {
      event.preventDefault();
    }
  };

  if (feilmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={styles['container']}>
      <HStack wrap={false} justify="space-between">
        <VStack gap="space-8">
          {feilmeldinger.map((message, index) => (
            <div key={message.melding}>
              <BodyShort size="small" className={styles['wordWrap']}>
                {decodeHtmlEntity(message.melding)}
              </BodyShort>
              {message.tilleggsInfo && (
                <BodyShort size="small">
                  <Link
                    href="#"
                    className={styles['link']}
                    onClick={event => toggleModalOnClick(event, index)}
                    onKeyDown={event => toggleModalOnKeyDown(event, index)}
                  >
                    <FormattedMessage id="FeilmeldingPanel.ShowErrorDetails" />
                  </Link>
                </BodyShort>
              )}
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

      <FeilmeldingsdetaljerModal
        skalViseModal={erModalÅpen}
        lukkModal={() => setErModalÅpen(false)}
        feilmeldingsdetaljer={
          valgtFeilmeldingIndex === undefined ? undefined : feilmeldinger[valgtFeilmeldingIndex]?.tilleggsInfo
        }
      />
    </div>
  );
};
