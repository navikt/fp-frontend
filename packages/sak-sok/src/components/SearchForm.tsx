import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';

import { VerticalSpacer, Image } from '@navikt/ft-ui-komponenter';
import advarselIcon from '@fpsak-frontend/assets/images/advarsel.svg';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-utils';
import { Form, InputField } from '@fpsak-frontend/form-hooks';
import { Fagsak } from '@fpsak-frontend/types';

import styles from './searchForm.less';

const isButtonDisabled = (searchStarted: boolean, searchString: string): boolean => !!(searchStarted
  || searchString.length < 1);

interface OwnProps {
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding: string;
  };
  searchFagsakCallback: (params?: { searchString: string }) => Promise<Fagsak[]>;
}

/**
 * SearchForm
 *
 * Presentasjonskomponent. Definerer søkefelt og tilhørende søkeknapp.
 */
export const SearchForm: FunctionComponent<OwnProps> = ({
  searchStarted,
  searchResultAccessDenied,
  searchFagsakCallback,
}) => {
  const intl = useIntl();
  const formMethods = useForm({
    defaultValues: {
      searchString: '',
    },
  });

  const searchString = formMethods.watch('searchString');

  return (
    <Form formMethods={formMethods} onSubmit={searchFagsakCallback} className={styles.container}>
      <Undertittel>{intl.formatMessage({ id: 'Search.SearchFagsakOrPerson' })}</Undertittel>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="7">
          <InputField
            name="searchString"
            label={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
            bredde="L"
            validate={[hasValidSaksnummerOrFodselsnummerFormat]}
          />
        </Column>
        <Column xs="5">
          <Hovedknapp
            mini
            className={styles.button}
            spinner={searchStarted}
            disabled={isButtonDisabled(searchStarted, searchString)}
          >
            <FormattedMessage id="Search.Search" />
          </Hovedknapp>
        </Column>
      </Row>
      {searchResultAccessDenied && (
        <>
          <Image className={styles.advarselIcon} src={advarselIcon} />
          <FormattedMessage id={searchResultAccessDenied.feilmelding} />
        </>
      )}
    </Form>
  );
};

export default SearchForm;
