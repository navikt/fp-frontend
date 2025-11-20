import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import type { BehandlingType } from '@navikt/fp-types';

import { oppgaverÅpneEllerPåVentOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { OppgaverSomErApneEllerPaVentGraf } from './OppgaverSomErApneEllerPaVentGraf';

const formName = 'oppgaverSomErApneEllerPaVent';

type ValgteVerdier = {
  [key in BehandlingType]?: boolean;
};

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const OppgaverSomErApneEllerPaVentPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: oppgaverApneEllerPaVent } = useQuery(oppgaverÅpneEllerPåVentOptions(valgtAvdelingEnhet));

  const behandlingTyper = useLosKodeverk('BehandlingType');

  const lagretFilter = getParsedValueFromLocalStorage<ValgteVerdier>(formName);

  const filtrerteBehandlingstyper = behandlingTyper.filter(type => type.kode !== 'BT-007' && type.kode !== 'BT-009');

  const formDefaultValues = filtrerteBehandlingstyper.reduce<ValgteVerdier>(
    (app, type) => ({
      ...app,
      [type.kode]: true,
    }),
    {},
  );

  const formMethods = useForm<ValgteVerdier>({
    defaultValues: lagretFilter ?? formDefaultValues,
  });

  const values = formMethods.watch();

  useStoreValuesInLocalStorage(formName, values);

  return (
    <RhfForm formMethods={formMethods}>
      <VStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="OppgaverSomErApneEllerPaVentPanel.Apne" />
        </Label>
        <HStack gap="space-16">
          {filtrerteBehandlingstyper.map(type => (
            <RhfCheckbox key={type.kode} name={type.kode} control={formMethods.control} label={type.navn} />
          ))}
        </HStack>
        <OppgaverSomErApneEllerPaVentGraf
          height={height}
          oppgaverApneEllerPaVent={oppgaverApneEllerPaVent.filter(oav => values[oav.behandlingType])}
        />
      </VStack>
    </RhfForm>
  );
};
