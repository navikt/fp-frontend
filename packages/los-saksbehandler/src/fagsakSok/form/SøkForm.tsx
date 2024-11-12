import React from 'react';
import { CheckboxField, Form, InputField } from '@navikt/ft-form-hooks';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { MagnifyingGlassIcon, ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import styles from './SøkForm.module.css';
import { Button, HStack, VStack } from '@navikt/ds-react';

const isButtonDisabled = (
  searchString: string,
  searchStarted: boolean,
  searchResultAccessDenied?: {
    feilmelding?: string;
  },
) => (!searchResultAccessDenied?.feilmelding && searchStarted) || !searchString;

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

  return (
    <Form<FormValues> onSubmit={onSubmit} formMethods={formMethods}>
      <VStack gap="2">
        <HStack gap="8">
          <HStack gap="0">
            <InputField
              name="searchString"
              label={intl.formatMessage({ id: 'Search.SearchHeader' })}
              description={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
              validate={[hasValidSaksnummerOrFodselsnummerFormat]}
              parse={(s = '') => s.toString().trim()}
              className={styles.searchInput}
              size="medium"
            />
            <Button
              size="small"
              variant="primary"
              icon={<MagnifyingGlassIcon aria-hidden />}
              loading={!searchResultAccessDenied?.feilmelding && searchStarted}
              disabled={isButtonDisabled(searchStringValue, searchStarted, searchResultAccessDenied)}
              className={styles.searchButton}
            />
          </HStack>
          {kanSaksbehandle && (
            <CheckboxField
              name="skalReservere"
              label={intl.formatMessage({ id: 'Search.ReserverBehandling' })}
              onClick={resetSearch}
              className={styles.checkbox}
            />
          )}
        </HStack>
        {searchResultAccessDenied?.feilmelding && (
          <HStack gap="2">
            <ExclamationmarkTriangleFillIcon className={styles.advarselIcon} />
            <FormattedMessage id={searchResultAccessDenied.feilmelding} />
          </HStack>
        )}
      </VStack>
    </Form>
  );
};
