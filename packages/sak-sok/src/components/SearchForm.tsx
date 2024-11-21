import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, BodyShort, HStack, VStack } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { FagsakEnkel } from '@navikt/fp-types';

import styles from './searchForm.module.css';

const isButtonDisabled = (searchStarted: boolean, searchString?: string): boolean =>
  !!(searchStarted || searchString === undefined || searchString.length < 1);

interface Props {
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  searchFagsakCallback: (params?: { searchString: string }) => Promise<FagsakEnkel[] | undefined>;
}

/**
 * SearchForm
 *
 * Definerer søkefelt og tilhørende søkeknapp.
 */
export const SearchForm = ({ searchStarted, searchResultAccessDenied, searchFagsakCallback }: Props) => {
  const intl = useIntl();
  const formMethods = useForm({
    defaultValues: {
      searchString: '',
    },
  });

  const searchString = formMethods.watch('searchString');

  return (
    <Form formMethods={formMethods} onSubmit={searchFagsakCallback} className={styles.container}>
      <VStack gap="2">
        <BodyShort size="small">
          <FormattedMessage id="Search.SearchFagsakOrPerson" />
        </BodyShort>
        <HStack gap="2" align="end">
          <InputField
            name="searchString"
            label={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
            validate={[hasValidSaksnummerOrFodselsnummerFormat]}
          />
          <Button
            variant="primary"
            size="small"
            loading={searchStarted}
            disabled={isButtonDisabled(searchStarted, searchString)}
          >
            <FormattedMessage id="Search.Search" />
          </Button>
        </HStack>
        {searchResultAccessDenied && (
          <>
            <HStack gap="2" align="end">
              <ExclamationmarkTriangleFillIcon className={styles.advarselIcon} />
              <BodyShort size="small">
                <FormattedMessage id={searchResultAccessDenied.feilmelding} />
              </BodyShort>
            </HStack>
          </>
        )}
      </VStack>
    </Form>
  );
};
