import { useController, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack, Search, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm } from '@navikt/ft-form-hooks';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';

import styles from './SøkForm.module.css';

export type SøkFormValues = {
  skalReservere: boolean;
  searchString: string;
};

interface Props {
  onSubmit: (values: SøkFormValues) => void;
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding?: string;
  };
  resetSearch: () => void;
  kanSaksbehandle: boolean;
}

/**
 * SøkForm
 *
 * Definerer søkefelt og tilhørende søkeknapp.
 */
export const SøkForm = ({ onSubmit, searchResultAccessDenied, searchStarted, resetSearch, kanSaksbehandle }: Props) => {
  const intl = useIntl();
  const formMethods = useForm<SøkFormValues>();

  const { field } = useController({
    name: 'searchString',
    control: formMethods.control,
    rules: {
      validate: val => hasValidSaksnummerOrFodselsnummerFormat(val.trim()) || true,
    },
  });

  return (
    <RhfForm<SøkFormValues> onSubmit={onSubmit} formMethods={formMethods}>
      <VStack gap="space-8">
        <Search
          label={<FormattedMessage id="Search.SearchHeader" />}
          description={<FormattedMessage id="Search.SaksnummerOrPersonId" />}
          variant="primary"
          value={field.value}
          error={formMethods.formState.errors['searchString']?.message}
          onChange={field.onChange}
          hideLabel={false}
          htmlSize="30"
          clearButton
          onClear={() => {
            field.onChange('');
            resetSearch();
          }}
        >
          <Search.Button
            type="submit"
            loading={!searchResultAccessDenied?.feilmelding && searchStarted}
            disabled={(!searchResultAccessDenied?.feilmelding && searchStarted) || !field.value || field.value === ''}
          />
        </Search>
        {kanSaksbehandle && (
          <RhfCheckbox
            name="skalReservere"
            control={formMethods.control}
            label={intl.formatMessage({ id: 'Search.ReserverBehandling' })}
            onClick={resetSearch}
          />
        )}
        {searchResultAccessDenied?.feilmelding && (
          <HStack gap="space-8">
            <ExclamationmarkTriangleFillIcon className={styles['advarselIcon']} />
            {searchResultAccessDenied.feilmelding}
          </HStack>
        )}
      </VStack>
    </RhfForm>
  );
};
