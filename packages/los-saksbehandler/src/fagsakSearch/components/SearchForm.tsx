import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Heading, Button } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer, Image,
} from '@navikt/ft-ui-komponenter';
import { hasValidSaksnummerOrFodselsnummerFormat } from '@navikt/ft-form-validators';
import { Form, InputField, CheckboxField } from '@navikt/ft-form-hooks';

import advarselIcon from '../../images/advarsel.svg';

import styles from './searchForm.less';

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

interface OwnProps {
  onSubmit: (values: { searchString: string, skalReservere: boolean }) => void;
  searchStarted: boolean;
  searchResultAccessDenied?: {
    feilmelding?: string;
  };
  resetSearch: () => void;
  kanSaksbehandle: boolean;
}

/**
 * SearchForm
 *
 * Presentasjonskomponent. Definerer søkefelt og tilhørende søkeknapp.
 */
const SearchForm: FunctionComponent<OwnProps> = ({
  onSubmit,
  searchResultAccessDenied,
  searchStarted,
  resetSearch,
  kanSaksbehandle,
}) => {
  const intl = useIntl();
  const formMethods = useForm<FormValues>();

  const searchStringValue = formMethods.watch('searchString');

  return (
    <Form<FormValues> onSubmit={onSubmit} formMethods={formMethods}>
      <div className={styles.container}>
        <Heading size="small">{intl.formatMessage({ id: 'Search.SearchFagsakOrPerson' })}</Heading>
        {kanSaksbehandle && (
        <>
          <VerticalSpacer sixteenPx />
          <CheckboxField name="skalReservere" label={intl.formatMessage({ id: 'Search.ReserverBehandling' })} onClick={resetSearch} />
        </>
        )}
        <VerticalSpacer eightPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <InputField
                name="searchString"
                label={intl.formatMessage({ id: 'Search.SaksnummerOrPersonId' })}
                validate={[hasValidSaksnummerOrFodselsnummerFormat]}
                parse={(s = '') => s.toString().trim()}
              />
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button
                size="small"
                variant="secondary"
                loading={!searchResultAccessDenied?.feilmelding && searchStarted}
                disabled={isButtonDisabled(searchStringValue, searchStarted, searchResultAccessDenied)}
              >
                <FormattedMessage id="Search.Search" />
              </Button>
            </FlexColumn>
          </FlexRow>
          {searchResultAccessDenied?.feilmelding && (
            <>
              <VerticalSpacer eightPx />
              <FlexRow>
                <FlexColumn>
                  <Image className={styles.advarselIcon} src={advarselIcon} />
                </FlexColumn>
                <FlexColumn>
                  <FormattedMessage id={searchResultAccessDenied.feilmelding} />
                </FlexColumn>
              </FlexRow>
            </>
          )}
        </FlexContainer>
      </div>
    </Form>
  );
};

export default SearchForm;
