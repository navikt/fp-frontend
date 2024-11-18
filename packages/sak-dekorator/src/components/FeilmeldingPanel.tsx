import React, { useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import { Button, Detail, Link } from '@navikt/ds-react';
import { XMarkIcon } from '@navikt/aksel-icons';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { FeilmeldingsdetaljerModal } from './FeilmeldingsdetaljerModal';
import { Feilmelding } from '../typer/feilmeldingTsType';

import styles from './feilmeldingPanel.module.css';

// TODO Dette er gjort fordi testen viste ein warning når ein dytta 'style.link' inn i a-tag'en. Bør ikkje vera naudsynt.
const classNames = classnames.bind(styles);

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
  const [erModalÅpen, setErModalÅpen] = useState(false);
  const [valgtFeilmeldingIndex, setValgtFeilmeldingIndex] = useState<number | undefined>(undefined);

  const toggleModalOnClick = useCallback(
    (event: React.MouseEvent | React.KeyboardEvent, index: number): void => {
      setErModalÅpen(!erModalÅpen);
      setValgtFeilmeldingIndex(index);
      if (event) {
        event.preventDefault();
      }
    },
    [erModalÅpen],
  );

  const toggleModalOnKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleModalOnClick(event, index);
      } else {
        event.preventDefault();
      }
    },
    [toggleModalOnClick],
  );

  if (feilmeldinger.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {feilmeldinger.map((message, index) => (
        <React.Fragment key={message.melding}>
          <Detail className={styles.wordWrap}>{`${decodeHtmlEntity(message.melding)} `}</Detail>
          {message.tilleggsInfo && (
            <Detail>
              <Link
                href="#"
                className={classNames('link')}
                onClick={event => toggleModalOnClick(event, index)}
                onKeyDown={event => toggleModalOnKeyDown(event, index)}
              >
                <FormattedMessage id="FeilmeldingPanel.ErrorDetails" />
              </Link>
            </Detail>
          )}
        </React.Fragment>
      ))}
      <div className={styles.lukkContainer}>
        <Button variant="tertiary" icon={<XMarkIcon color="white" />} onClick={fjernFeilmeldinger} type="button" />
      </div>
      {erModalÅpen && (
        <FeilmeldingsdetaljerModal
          skalViseModal={erModalÅpen}
          lukkModal={toggleModalOnClick as () => void}
          feilmeldingsdetaljer={
            valgtFeilmeldingIndex !== undefined ? feilmeldinger[valgtFeilmeldingIndex].tilleggsInfo : undefined
          }
        />
      )}
    </div>
  );
};
