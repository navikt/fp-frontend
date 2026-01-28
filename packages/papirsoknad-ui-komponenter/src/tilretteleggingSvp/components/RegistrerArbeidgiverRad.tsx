import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ChevronDownIcon, ChevronUpIcon, TrashIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, Table, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfTextField } from '@navikt/ft-form-hooks';
import { hasNoWhiteSpace, hasValidOrgNumberOrFodselsnr, required } from '@navikt/ft-form-validators';

import {
  BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME,
  TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from '../constants';
import type { FormValues } from '../types';
import { BehovForTilretteleggingFieldArray } from './BehovForTilretteleggingFieldArray';

const FA_PREFIX = `${TILRETTELEGGING_NAME_PREFIX}.${TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME}`;

interface Props {
  index: number;
  readOnly?: boolean;
  remove: () => void;
  open: boolean;
}

export const RegistrerArbeidsgiverRad = ({ open, readOnly = false, index, remove }: Props) => {
  const { getFieldState, watch, control } = useFormContext<FormValues>();
  const { error } = getFieldState(`${FA_PREFIX}.${index}`);
  const organisasjonsnummer = watch(`${FA_PREFIX}.${index}.organisasjonsnummer`);
  const [isOpen, setIsOpen] = useState(open);
  const intl = useIntl();

  return (
    <Table.Row shadeOnHover={false} style={{ backgroundColor: error && !isOpen ? 'var(--ax-danger-100)' : 'none' }}>
      <Table.DataCell valign="top">
        <Button
          data-color="neutral"
          type="button"
          variant="tertiary"
          onClick={() => setIsOpen(curr => !curr)}
          icon={isOpen ? <ChevronUpIcon aria-label="Vis mindre" /> : <ChevronDownIcon aria-label="Vis mer" />} />
      </Table.DataCell>
      <Table.DataCell valign="top">
        <Box hidden={isOpen} paddingBlock="space-12">
          <BodyShort weight="semibold">{organisasjonsnummer}</BodyShort>
        </Box>
        <VStack gap="space-16" hidden={!isOpen}>
          <HStack gap="space-16">
            <RhfTextField
              name={`${FA_PREFIX}.${index}.organisasjonsnummer`}
              control={control}
              readOnly={readOnly}
              label={intl.formatMessage({ id: 'RegistrerArbeidsgiverRad.OrgNr' })}
              validate={[
                required,
                (value: string | number) => hasNoWhiteSpace(value.toString()),
                hasValidOrgNumberOrFodselsnr,
              ]}
              maxLength={99}
            />
            <RhfDatepicker
              name={`${FA_PREFIX}.${index}.behovsdato`}
              control={control}
              label={intl.formatMessage({ id: 'RegistrerArbeidsgiverRad.TilretteleggingFra' })}
              validate={[required]}
              readOnly={readOnly}
            />
          </HStack>
          <BehovForTilretteleggingFieldArray
            name={`${FA_PREFIX}.${index}.${BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME}`}
            readOnly={readOnly}
          />
        </VStack>
      </Table.DataCell>
      <Table.DataCell valign="top" align="right">
        <Button
          data-color="neutral"
          type="button"
          variant="tertiary"
          onClick={remove}
          onKeyDown={remove}
          icon={<TrashIcon aria-label="Slett rad" />} />
      </Table.DataCell>
    </Table.Row>
  );
};
