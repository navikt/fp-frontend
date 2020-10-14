import React from 'react';
import { injectIntl } from 'react-intl';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import {
  BorderBox, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { RadioGroupField, RadioOption, TextAreaField } from '@fpsak-frontend/form';
import { hasValidText, maxLength as maxLengthValidator, required } from '@fpsak-frontend/utils';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './tilleggsopplysningerPanel.le... Remove this comment to see the full error message
import styles from './tilleggsopplysningerPanel.less';

const maxLength = 1500;
const validate = [maxLengthValidator(maxLength), hasValidText];

const sprakvalg = {
  BOKMAL: 'NB',
  NYNORSK: 'NN',
  ENGELSK: 'EN',
};

type Props = {
    intl: {};
    readOnly: boolean;
};

/**
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */

export const TilleggsopplysningerPanel = ({ readOnly, intl }: Props) => (
  <BorderBox>
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.halfWidth}>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
          <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.SokerensTilleggsopplysninger' })}>
            <TextAreaField
              name="tilleggsopplysninger"
              label=""
              maxLength={maxLength}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type '({ id: stri... Remove this comment to see the full error message
              validate={validate}
              readOnly={readOnly}
            />
          </SkjemaGruppe>
        </FlexColumn>
        <FlexColumn>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
          <SkjemaGruppe legend={intl.formatMessage({ id: 'Registrering.Sprak' })}>
            <RadioGroupField
              name="språkkode"
              direction="vertical"
              readOnly={readOnly}
              // @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string; }[]' is not assignable to type... Remove this comment to see the full error message
              validate={required}
            >
              <RadioOption
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                label={intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' })}
                value={sprakvalg.BOKMAL}
              />
              <RadioOption
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                label={intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' })}
                value={sprakvalg.NYNORSK}
              />
              <RadioOption
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
                label={intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' })}
                value={sprakvalg.ENGELSK}
              />
            </RadioGroupField>
          </SkjemaGruppe>
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </BorderBox>
);

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ readOnly, intl }: Props) => JSX.Element' ... Remove this comment to see the full error message
export default injectIntl(TilleggsopplysningerPanel);
