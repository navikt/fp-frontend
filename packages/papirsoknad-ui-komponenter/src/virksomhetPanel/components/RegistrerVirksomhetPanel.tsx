import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button, ErrorMessage, Table } from '@navikt/ds-react';
import { AlleKodeverk } from '@navikt/fp-types';

import { VirksomhetRad } from './VirksomhetRad';

import { VirksomhetFormValues } from '../types';
import { EGEN_VIRKSOMHET_NAME_PREFIX } from '../constants';

interface Props {
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * RegistrererVirksomhetPanel
 *
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
 * foreldrepenger og søker har arbeidet i egen virksomhet.
 * Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.
 */
export const RegistrerVirksomhetPanel = ({ readOnly = false, alleKodeverk }: Props) => {
  const intl = useIntl();

  const {
    control,
    formState: { errors },
  } = useFormContext<VirksomhetFormValues>();

  const { fields, remove, append } = useFieldArray({
    control,
    name: `${EGEN_VIRKSOMHET_NAME_PREFIX}.virksomheter`,
    rules: {
      required: intl.formatMessage({ id: 'Registrering.RegistrerVirksomhetPanel.ArrayMinLength' }),
    },
  });

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>
              <FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Name" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => (
            <VirksomhetRad
              key={field.id}
              field={field}
              index={index}
              open={index + 1 === fields.length}
              remove={() => remove(index)}
              alleKodeverk={alleKodeverk}
              readOnly={readOnly}
            />
          ))}
        </Table.Body>
      </Table>

      {errors[EGEN_VIRKSOMHET_NAME_PREFIX]?.virksomheter?.root?.message && (
        <ErrorMessage>{errors[EGEN_VIRKSOMHET_NAME_PREFIX]?.virksomheter.root?.message}</ErrorMessage>
      )}
      <div>
        <Button
          size="small"
          variant="tertiary"
          type="button"
          onClick={() => append(VirksomhetRad.initialValues())}
          icon={<PlusCircleIcon aria-hidden />}
        >
          <FormattedMessage id="Registrering.RegistrerVirksomhetPanel.Add" />
        </Button>
      </div>
    </>
  );
};

RegistrerVirksomhetPanel.transformValues = ({
  egenVirksomhet: { harArbeidetIEgenVirksomhet, virksomheter },
}: VirksomhetFormValues) => ({
  egenVirksomhet: {
    harArbeidetIEgenVirksomhet,
    virksomheter: harArbeidetIEgenVirksomhet ? virksomheter.map(v => VirksomhetRad.transformValues(v)) : undefined,
  },
});
