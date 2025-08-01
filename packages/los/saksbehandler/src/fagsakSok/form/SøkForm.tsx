import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { Button, HStack, VStack } from '@navikt/ds-react';
import { RhfCheckbox, RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
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

  const searchStringValue = formMethods.watch('searchString');

  return (
    <RhfForm<SøkFormValues> onSubmit={onSubmit} formMethods={formMethods}>
      <VStack gap="space-8">
        <HStack gap="space-32">
          <HStack gap="space-0">
            <RhfTextField
              name="searchString"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'Search.SearchHeader' })}
              description={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
              validate={[hasValidSaksnummerOrFodselsnummerFormat]}
              parse={(s = '') => s.toString().trim()}
              className={styles.searchInput}
              size="medium"
            />
            <div className={styles.searchButtonDiv}>
              <Button
                size="small"
                variant="primary"
                icon={<MagnifyingGlassIcon aria-hidden />}
                loading={!searchResultAccessDenied?.feilmelding && searchStarted}
                disabled={(!searchResultAccessDenied?.feilmelding && searchStarted) || !searchStringValue}
                className={styles.searchButton}
              />
            </div>
          </HStack>
          {kanSaksbehandle && (
            <RhfCheckbox
              name="skalReservere"
              control={formMethods.control}
              label={intl.formatMessage({ id: 'Search.ReserverBehandling' })}
              onClick={resetSearch}
              className={styles.checkbox}
            />
          )}
        </HStack>
        {searchResultAccessDenied?.feilmelding && (
          <HStack gap="space-8">
            <ExclamationmarkTriangleFillIcon className={styles.advarselIcon} />
            {searchResultAccessDenied.feilmelding}
          </HStack>
        )}
      </VStack>
    </RhfForm>
  );
};
