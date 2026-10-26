import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';

import styles from './searchForm.module.css';

import messages from '../../i18n/nb_NO.json';

const erMeldingId = (id: string): id is keyof typeof messages => Object.hasOwn(messages, id);

const isButtonDisabled = (searchStarted: boolean, searchString?: string): boolean =>
  !!(searchStarted || searchString === undefined || searchString.length === 0);

interface Props {
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  searchFagsakCallback: (params: { searchString: string }) => void;
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

  const searchString = useWatch({ control: formMethods.control, name: 'searchString' });

  return (
    <RhfForm formMethods={formMethods} onSubmit={searchFagsakCallback} className={styles['container']}>
      <VStack gap="space-8">
        <BodyShort size="small">
          <FormattedMessage id="Search.SearchFagsakOrPerson" />
        </BodyShort>
        <HStack gap="space-8" align="end">
          <RhfTextField
            name="searchString"
            control={formMethods.control}
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
          <HStack gap="space-8" align="end">
            <ExclamationmarkTriangleFillIcon className={styles['advarselIcon']} />
            <BodyShort size="small">
              {erMeldingId(searchResultAccessDenied.feilmelding) ? (
                <FormattedMessage id={searchResultAccessDenied.feilmelding} />
              ) : (
                searchResultAccessDenied.feilmelding
              )}
            </BodyShort>
          </HStack>
        )}
      </VStack>
    </RhfForm>
  );
};
