import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { type BehandlingType, BehandlingTypeEnum } from '@navikt/fp-kodeverk';

import { oppgaverÅpneEllerPåVentOptions } from '../../data/fplosAvdelingslederApi';
import { StoreValuesInLocalStorage } from '../../data/StoreValuesInLocalStorage';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import { OppgaverSomErApneEllerPaVentGraf } from './OppgaverSomErApneEllerPaVentGraf';

const formName = 'oppgaverSomErApneEllerPaVent';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
  getValueFromLocalStorage: (key: string) => string | undefined;
}

export const OppgaverSomErApneEllerPaVentPanel = ({ height, valgtAvdelingEnhet, getValueFromLocalStorage }: Props) => {
  const { data: oppgaverApneEllerPaVent } = useQuery(oppgaverÅpneEllerPåVentOptions(valgtAvdelingEnhet));

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const filtrerteBehandlingstyper = behandlingTyper.filter(
    type =>
      type.kode !== BehandlingTypeEnum.TILBAKEKREVING && type.kode !== BehandlingTypeEnum.TILBAKEKREVING_REVURDERING,
  );

  const formDefaultValues = Object.values(filtrerteBehandlingstyper).reduce(
    (app, type) => ({
      ...app,
      [type.kode]: true,
    }),
    {},
  );

  // TODO (TOR) Mangler typing for useForm
  const formMethods = useForm({
    defaultValues: lagredeVerdier ?? formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <RhfForm formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
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
