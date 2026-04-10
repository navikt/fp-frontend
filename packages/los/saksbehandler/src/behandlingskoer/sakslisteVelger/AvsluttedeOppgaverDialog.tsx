import { BarChartIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dialog } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { LukkedeOppgaverPanel } from '@navikt/fp-los-felles';
import { useQuery } from '@tanstack/react-query';

import { saksbehandlerKøStatistikkOptions } from '../../data/fplosSaksbehandlerApi';

interface Props {
  valgtSakslisteId: number;
}

export const AvsluttedeOppgaverDialog = ({ valgtSakslisteId }: Props) => {
  const { data: køStatistikk = [] } = useQuery(saksbehandlerKøStatistikkOptions(valgtSakslisteId));
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button title="Åpne dialog" aria-label="Åpne dialog" icon={<BarChartIcon />}></Button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="AvsluttedeOppgaverDialog.Tittel" />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          {køStatistikk.length === 0 ? (
            <BodyShort>
              <FormattedMessage id="AvsluttedeOppgaverDialog.IngenData" />
            </BodyShort>
          ) : (
            <LukkedeOppgaverPanel køStatistikk={køStatistikk} />
          )}
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button>
              <FormattedMessage id="Label.Avbryt" />
            </Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
