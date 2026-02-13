import { GlobalAlert } from '@navikt/ds-react';

import type { Driftsmelding } from '../typer/driftsmeldingTsType';

import styles from './driftsmeldingPanel.module.css';

interface Props {
  driftsmeldinger: Driftsmelding[];
}

export const DriftsmeldingPanel = ({ driftsmeldinger }: Props) => {
  if (driftsmeldinger.length === 0) {
    return null;
  }

  return (
    <>
      {driftsmeldinger.map(message => (
        <GlobalAlert size="small" status="warning" centered={false} key={message.id}>
          <GlobalAlert.Header>
            <GlobalAlert.Title as="div" className={styles['driftmeldingsTekst']}>
              {message.melding}
            </GlobalAlert.Title>
          </GlobalAlert.Header>
        </GlobalAlert>
      ))}
    </>
  );
};
