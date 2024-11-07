import React from 'react';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { ErrorMessage, HStack, Search, VStack } from '@navikt/ds-react';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';
import { Form, CheckboxField } from '@navikt/ft-form-hooks';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import styles from './SøkForm.module.css';

type FormValues = {
  skalReservere: boolean;
  searchString: string;
};

interface Props {
  onSubmit: (values: { searchString: string; skalReservere: boolean }) => void;
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
  const formMethods = useForm<FormValues>();

  const searchStringValue = formMethods.watch('searchString');
  const skalReservereValue = formMethods.watch('skalReservere');

  const feilmelding = hasValidSaksnummerOrFodselsnummerFormat(searchStringValue);

  return (
    <Form formMethods={formMethods}>
      <VStack gap="4">
        <HStack gap="4" align="end">
          <div className={styles.searchWidth}>
            <Search
              label={intl.formatMessage({ id: 'Search.Search' })}
              description={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
              hideLabel={false}
              variant="primary"
              onSearchClick={value => {
                formMethods.setValue('searchString', value);
                if (hasValidSaksnummerOrFodselsnummerFormat(value) === null) {
                  onSubmit({ searchString: value, skalReservere: skalReservereValue });
                }
              }}
            >
              <Search.Button type="button" loading={!searchResultAccessDenied?.feilmelding && searchStarted} />
            </Search>
          </div>
          {kanSaksbehandle && (
            <CheckboxField
              name="skalReservere"
              label={intl.formatMessage({ id: 'Search.ReserverBehandling' })}
              onClick={resetSearch}
              className={styles.checkbox}
            />
          )}
        </HStack>
        {feilmelding && <ErrorMessage>{feilmelding}</ErrorMessage>}
        {searchResultAccessDenied?.feilmelding && (
          <HStack gap="2">
            <ExclamationmarkTriangleFillIcon className={styles.advarselIcon} />
            {searchResultAccessDenied.feilmelding}
          </HStack>
        )}
      </VStack>
    </Form>
  );
};
