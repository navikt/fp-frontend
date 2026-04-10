
import { useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { BarChartIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dialog } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { LukkedeOppgaverPanel } from '@navikt/fp-los-felles';

import { saksbehandlerKøStatistikkOptions } from '../../data/fplosSaksbehandlerApi';

interface Props {
  valgtSakslisteId: number;
  sakslisteNavn: string;
}

export const AvsluttedeOppgaverDialog = ({ valgtSakslisteId, sakslisteNavn }: Props) => {
  const [open, setOpen] = useState(false);
  const { data: køStatistikk = [] } = useQuery({
    ...saksbehandlerKøStatistikkOptions(valgtSakslisteId),
    enabled: open,
  });
  return (
    <Dialog open={open} onOpenChange={nextOpen => setOpen(nextOpen)}>
      <Dialog.Trigger>
        <Button variant="secondary" size="small" className="self-end" title="Åpne dialog" aria-label="Åpne dialog" icon={<BarChartIcon />}></Button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="AvsluttedeOppgaverDialog.Tittel" values={{ sakslisteNavn }} />
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
