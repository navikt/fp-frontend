import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label } from '@navikt/ds-react';
import { CheckboxField,Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';

import StoreValuesInLocalStorage from '../../../data/StoreValuesInLocalStorage';
import useLosKodeverk from '../../../data/useLosKodeverk';
import OppgaverSomErApneEllerPaVent from '../../../typer/oppgaverSomErApneEllerPaVentTsType';
import OppgaverSomErApneEllerPaVentGraf from './OppgaverSomErApneEllerPaVentGraf';

const formName = 'oppgaverSomErApneEllerPaVent';

interface OwnProps {
  height: number;
  oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[];
  getValueFromLocalStorage: (key: string) => string | undefined;
}

/**
 * OppgaverSomErApneEllerPaVentPanel.
 */
const OppgaverSomErApneEllerPaVentPanel: FunctionComponent<OwnProps> = ({
  height,
  oppgaverApneEllerPaVent,
  getValueFromLocalStorage,
}) => {
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
      <Label size="small">
        <FormattedMessage id="OppgaverSomErApneEllerPaVentPanel.Apne" />
      </Label>
      <VerticalSpacer sixteenPx />
      <HStack gap="4">
        {filtrerteBehandlingstyper.map(type => (
          <CheckboxField key={type.kode} name={type.kode} label={type.navn} />
        ))}
      </HStack>
      <VerticalSpacer sixteenPx />
      <OppgaverSomErApneEllerPaVentGraf
        height={height}
        oppgaverApneEllerPaVent={oppgaverApneEllerPaVent.filter(oav => values[oav.behandlingType])}
      />
    </Form>
  );
};

export default OppgaverSomErApneEllerPaVentPanel;
