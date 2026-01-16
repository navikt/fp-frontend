import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { Button, Modal } from '@navikt/ds-react';

import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';
import { AktiveOgTilgjengligeOppgaverGraf } from './AktiveOgTilgjengligeOppgaverGraf.tsx';

interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengligeOppgaverGrafModal = ({ aktiveOgLedigeTidslinje }: Props) => {
  const intl = useIntl();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        icon={<LineGraphDotIcon title="a11y-title" fontSize="1.5rem" />}
        iconPosition="right"
        variant="tertiary"
        onClick={() => setIsModalOpen(true)}
        title={intl.formatMessage({ id: 'AktiveOgTilgjengligeOppgaverGrafModal.ÅpneGraf' })}
      >
        <FormattedMessage id="AktiveOgTilgjengligeOppgaverGrafModal.ÅpneGraf" />
      </Button>

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        header={{
          heading: intl.formatMessage({ id: 'AktiveOgTilgjengligeOppgaverGraf.Overskrift' }),
        }}
        width="medium"
      >
        <Modal.Body>
          <AktiveOgTilgjengligeOppgaverGraf aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />
        </Modal.Body>
        <Modal.Footer>
          <Button size="small" variant="secondary" onClick={() => setIsModalOpen(false)} type="button">
            Lukk
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
