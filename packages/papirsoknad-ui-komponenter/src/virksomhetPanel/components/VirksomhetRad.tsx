import React, { useState } from 'react';
import { FieldArrayWithId, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Table, VStack } from '@navikt/ds-react';
import { InputField } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import { AlleKodeverk } from '@navikt/fp-types';

import { VIRKSOMHET_FORM_NAME_PREFIX } from '../constants';
import { RegistrerVirksomhetFormValues, VirksomhetFormValues } from '../types';
import { VirksomhetIdentifikasjonPanel } from './VirksomhetIdentifikasjonPanel';
import { VirksomhetRegnskapPanel } from './VirksomhetRegnskapPanel';
import { VirksomhetRelasjonPanel } from './VirksomhetRelasjonPanel';
import { VirksomhetStartetEndretPanel } from './VirksomhetStartetEndretPanel';
import { VirksomhetTypeNaringPanel } from './VirksomhetTypeNaringPanel';

interface Props {
  index: number;
  readOnly?: boolean;
  alleKodeverk: AlleKodeverk;
  field: FieldArrayWithId<VirksomhetFormValues, typeof VIRKSOMHET_FORM_NAME_PREFIX, 'id'>;
  remove: () => void;
  open: boolean;
}

export const VirksomhetRad = ({ open, readOnly = false, alleKodeverk, index, field, remove }: Props) => {
  const { getFieldState, watch } = useFormContext<VirksomhetFormValues>();
  const { error } = getFieldState(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}`);
  const virksomhetNavn = watch(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navn`);
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Table.ExpandableRow
      key={field.id}
      open={isOpen}
      style={{ backgroundColor: error && !isOpen ? 'var(--a-red-50)' : undefined }}
      onOpenChange={() => setIsOpen(!isOpen)}
      content={
        <VStack gap="4">
          <VirksomhetIdentifikasjonPanel readOnly={readOnly} index={index} alleKodeverk={alleKodeverk} />
          <VirksomhetTypeNaringPanel readOnly={readOnly} index={index} alleKodeverk={alleKodeverk} />
          <VirksomhetStartetEndretPanel readOnly={readOnly} index={index} />
          <VirksomhetRegnskapPanel readOnly={readOnly} index={index} />
          <VirksomhetRelasjonPanel readOnly={readOnly} index={index} />
        </VStack>
      }
    >
      <Table.DataCell>
        {isOpen ? (
          <InputField
            name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navn`}
            validate={[required]}
            label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
            readOnly={readOnly}
          />
        ) : (
          <BodyShort weight="semibold">{virksomhetNavn}</BodyShort>
        )}
      </Table.DataCell>
      <Table.DataCell align="right">
        <Button
          variant="tertiary"
          size="small"
          onClick={remove}
          onKeyDown={remove}
          icon={<TrashIcon aria-label="Slett virksomhet" />}
        />
      </Table.DataCell>
    </Table.ExpandableRow>
  );
};

VirksomhetRad.initialValues = (): RegistrerVirksomhetFormValues => ({
  varigEndretEllerStartetSisteFireArArsak: [],
  typeVirksomhet: [],
});

VirksomhetRad.transformValues = (values: RegistrerVirksomhetFormValues) => ({
  navn: values.navn,
  ...VirksomhetIdentifikasjonPanel.transformValues(values),
  ...VirksomhetTypeNaringPanel.transformValues(values),
  ...VirksomhetStartetEndretPanel.transformValues(values),
  ...VirksomhetRegnskapPanel.transformValues(values),
  familieEllerVennerTilknyttetNaringen: values.familieEllerVennerTilknyttetNaringen,
});
