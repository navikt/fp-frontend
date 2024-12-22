import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Table, VStack } from '@navikt/ds-react';
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
  remove: () => void;
  open: boolean;
}

export const VirksomhetRad = ({ open, readOnly = false, alleKodeverk, index, remove }: Props) => {
  const { getFieldState, watch } = useFormContext<VirksomhetFormValues>();
  const { error } = getFieldState(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}`);
  const virksomhetNavn = watch(`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navn`);
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Table.Row shadeOnHover={false} style={{ backgroundColor: error && !isOpen ? 'var(--a-red-50)' : 'none' }}>
      <Table.DataCell valign="top">
        <Button
          type="button"
          variant="tertiary-neutral"
          onClick={() => setIsOpen(curr => !curr)}
          icon={isOpen ? <ChevronUpIcon aria-label="Vis mindre" /> : <ChevronDownIcon aria-label="Vis mer" />}
        />
      </Table.DataCell>
      <Table.DataCell valign="top">
        <Box hidden={isOpen} paddingBlock="3">
          <BodyShort weight="semibold">{virksomhetNavn}</BodyShort>
        </Box>
        <VStack gap="4" hidden={!isOpen}>
          <InputField
            name={`${VIRKSOMHET_FORM_NAME_PREFIX}.${index}.navn`}
            validate={[required]}
            label={<FormattedMessage id="Registrering.VirksomhetIdentifikasjonPanel.Name" />}
            readOnly={readOnly}
          />
          <VirksomhetIdentifikasjonPanel readOnly={readOnly} index={index} alleKodeverk={alleKodeverk} />
          <VirksomhetTypeNaringPanel readOnly={readOnly} index={index} alleKodeverk={alleKodeverk} />
          <VirksomhetStartetEndretPanel readOnly={readOnly} index={index} />
          <VirksomhetRegnskapPanel readOnly={readOnly} index={index} />
          <VirksomhetRelasjonPanel readOnly={readOnly} index={index} />
        </VStack>
      </Table.DataCell>
      <Table.DataCell valign="top" align="right">
        <Button
          type="button"
          variant="tertiary-neutral"
          onClick={remove}
          onKeyDown={remove}
          icon={<TrashIcon aria-label="Slett rad" />}
        />
      </Table.DataCell>
    </Table.Row>
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
