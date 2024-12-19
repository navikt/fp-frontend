import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { CheckboxField, Form } from '@navikt/ft-form-hooks';
import { useQuery } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';

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

  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);
  const stringFromStorage = getValueFromLocalStorage(formName);
  const lagredeVerdier = stringFromStorage ? JSON.parse(stringFromStorage) : undefined;

  const filtrerteBehandlingstyper = useMemo(
    () =>
      behandlingTyper.filter(
        type => type.kode !== BehandlingType.TILBAKEKREVING && type.kode !== BehandlingType.TILBAKEKREVING_REVURDERING,
      ),
    [],
  );

  const formDefaultValues = useMemo(
    () =>
      Object.values(filtrerteBehandlingstyper).reduce(
        (app, type) => ({
          ...app,
          [type.kode]: true,
        }),
        {},
      ),
    [],
  );

  const formMethods = useForm({
    defaultValues: lagredeVerdier || formDefaultValues,
  });

  const values = formMethods.watch();

  return (
    <Form formMethods={formMethods}>
      <StoreValuesInLocalStorage stateKey={formName} values={values} />
      <VStack gap="4">
        <Label size="small">
          <FormattedMessage id="OppgaverSomErApneEllerPaVentPanel.Apne" />
        </Label>
        <HStack gap="4">
          {filtrerteBehandlingstyper.map(type => (
            <CheckboxField key={type.kode} name={type.kode} label={type.navn} />
          ))}
        </HStack>
        <OppgaverSomErApneEllerPaVentGraf
          height={height}
          oppgaverApneEllerPaVent={oppgaverApneEllerPaVent.filter(oav => values[oav.behandlingType])}
        />
      </VStack>
    </Form>
  );
};
