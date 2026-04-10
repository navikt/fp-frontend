import { BarChartIcon } from '@navikt/aksel-icons';
import { Button, Dialog } from '@navikt/ds-react';

import { LukkedeOppgaverPanel } from '@navikt/fp-los-felles';
import { useQuery } from '@tanstack/react-query';

import { saksbehandlerKøStatistikkOptions } from '../../data/fplosSaksbehandlerApi';

interface Props {
  valgtSakslisteId: number;
}

export const AvsluttedeOppgaverDialog = ({ valgtSakslisteId }: Props) => {
  const køStatistikk = useQuery(saksbehandlerKøStatistikkOptions(valgtSakslisteId)).data ?? [];
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button title="Åpne dialog" aria-label="Åpne dialog" icon={<BarChartIcon />}></Button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>Overskrift</Dialog.Title>
          <Dialog.Description>En kort beskrivelse av dialogen.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <LukkedeOppgaverPanel køStatistikk={køStatistikk} />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button>Lukk</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
