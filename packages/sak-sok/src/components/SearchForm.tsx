import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Button, BodyShort } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import { VerticalSpacer, FlexContainer, FlexRow, FlexColumn } from '@navikt/ft-ui-komponenter';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { FagsakEnkel } from '@navikt/fp-types';

import styles from './searchForm.module.css';

const isButtonDisabled = (searchStarted: boolean, searchString?: string): boolean =>
  !!(searchStarted || searchString === undefined || searchString.length < 1);

interface OwnProps {
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
const SearchForm: FunctionComponent<OwnProps> = ({ searchStarted, searchResultAccessDenied, searchFagsakCallback }) => {
  const intl = useIntl();
  const formMethods = useForm({
    defaultValues: {
      searchString: '',
    },
  });

  const searchString = formMethods.watch('searchString');

  return (
    <Form formMethods={formMethods} onSubmit={searchFagsakCallback} className={styles.container}>
      <BodyShort size="small">{intl.formatMessage({ id: 'Search.SearchFagsakOrPerson' })}</BodyShort>
      <VerticalSpacer eightPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <InputField
              name="searchString"
              label={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
              validate={[hasValidSaksnummerOrFodselsnummerFormat]}
            />
          </FlexColumn>
          <FlexColumn className={styles.button}>
            <Button
              variant="primary"
              size="small"
              loading={searchStarted}
              disabled={isButtonDisabled(searchStarted, searchString)}
            >
              <FormattedMessage id="Search.Search" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {searchResultAccessDenied && (
        <>
          <VerticalSpacer fourPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <ExclamationmarkTriangleFillIcon className={styles.advarselIcon} />
              </FlexColumn>
              <FlexColumn className={styles.feilmelding}>
                <BodyShort size="small">
                  <FormattedMessage id={searchResultAccessDenied.feilmelding} />
                </BodyShort>
              </FlexColumn>
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </Form>
  );
};

export default SearchForm;
