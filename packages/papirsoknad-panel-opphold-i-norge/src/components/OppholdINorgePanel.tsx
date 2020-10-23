import React, { FunctionComponent } from 'react';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Undertekst } from 'nav-frontend-typografi';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import { NavFieldGroup, RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { isRequiredMessage } from '@fpsak-frontend/utils';
import { ArrowBox, BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import useIntl from '../useIntl';
import UtenlandsOppholdField, { FormValues as FormValuesFieldArray } from './UtenlandsOppholdField';

import styles from './oppholdINorgePanel.less';

interface PureOwnProps {
  soknadData: SoknadData;
  readOnly: boolean;
  form: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  harFremtidigeOppholdUtenlands?: boolean;
  harTidligereOppholdUtenlands?: boolean;
}

export type FormValues = {
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
  mottattDato?: string;
};

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate?: (values: FormValues) => any,
}

/**
 * OppholdINorgePanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
 * Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const OppholdINorgePanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
  harFremtidigeOppholdUtenlands,
  harTidligereOppholdUtenlands,
  soknadData,
}) => {
  const { formatMessage } = useIntl();
  const sortedCountriesByName = alleKodeverk[kodeverkTyper.LANDKODER].slice().sort((a, b) => a.navn.localeCompare(b.navn));

  return (
    <BorderBox>
      <SkjemaGruppe className={styles.fullWidth} legend={formatMessage({ id: 'Registrering.Opphold' })}>
        <NavFieldGroup>
          {soknadData.getFamilieHendelseType() === familieHendelseType.ADOPSJON
          && (
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdVedAdopsjon' })} `}
          </Undertekst>
          )}
          {soknadData.getFamilieHendelseType() !== familieHendelseType.ADOPSJON
          && (
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdVedFodsel' })} `}
          </Undertekst>
          )}
          <VerticalSpacer eightPx />
          <RadioGroupField name="oppholdINorge" readOnly={readOnly}>
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value />
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value={false} />
          </RadioGroupField>
        </NavFieldGroup>
        <NavFieldGroup>
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdSisteTolv' })} `}
          </Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField name="harTidligereOppholdUtenlands" readOnly={readOnly}>
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value={false} />
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value />
          </RadioGroupField>
          {harTidligereOppholdUtenlands
            ? (
              <ArrowBox alignOffset={64}>
                <UtenlandsOppholdField
                  name="tidligereOppholdUtenlands"
                  countryCodes={sortedCountriesByName}
                  readOnly={readOnly}
                />
              </ArrowBox>
            )
            : null}
        </NavFieldGroup>
        <NavFieldGroup>
          <Undertekst>
            {` ${formatMessage({ id: 'Registrering.OppholdNesteTolv' })} `}
          </Undertekst>
          <VerticalSpacer eightPx />
          <RadioGroupField name="harFremtidigeOppholdUtenlands" readOnly={readOnly}>
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.Yes' })} value={false} />
            <RadioOption label={formatMessage({ id: 'Registrering.Opphold.No' })} value />
          </RadioGroupField>
          {harFremtidigeOppholdUtenlands
            ? (
              <ArrowBox alignOffset={64}>
                <UtenlandsOppholdField
                  name="fremtidigeOppholdUtenlands"
                  countryCodes={sortedCountriesByName}
                  readOnly={readOnly}
                />
              </ArrowBox>
            )
            : null}
        </NavFieldGroup>
      </SkjemaGruppe>
    </BorderBox>
  );
};

OppholdINorgePanelImpl.defaultProps = {
  harFremtidigeOppholdUtenlands: false,
  harTidligereOppholdUtenlands: false,
  readOnly: true,
};

const mapStateToProps = (state, initialProps: PureOwnProps) => ({
  ...formValueSelector(initialProps.form)(state, 'harTidligereOppholdUtenlands', 'harFremtidigeOppholdUtenlands'),
});

const OppholdINorgePanel = connect(mapStateToProps)(OppholdINorgePanelImpl);

OppholdINorgePanel.validate = (values: FormValues) => {
  const errors = {
    oppholdINorge: undefined,
    harTidligereOppholdUtenlands: undefined,
    tidligereOppholdUtenlands: undefined,
    harFremtidigeOppholdUtenlands: undefined,
    fremtidigeOppholdUtenlands: undefined,
  };
  if (values.oppholdINorge === undefined) {
    errors.oppholdINorge = isRequiredMessage();
  }
  if (values.harTidligereOppholdUtenlands === undefined) {
    errors.harTidligereOppholdUtenlands = isRequiredMessage();
  } else if (values.harTidligereOppholdUtenlands) {
    errors.tidligereOppholdUtenlands = UtenlandsOppholdField.validate(values.tidligereOppholdUtenlands, { todayOrBefore: true });
  }
  if (values.harFremtidigeOppholdUtenlands === undefined) {
    errors.harFremtidigeOppholdUtenlands = isRequiredMessage();
  } else if (values.harFremtidigeOppholdUtenlands) {
    errors.fremtidigeOppholdUtenlands = UtenlandsOppholdField.validate(values.fremtidigeOppholdUtenlands, { tidligstDato: values.mottattDato });
  }
  return errors;
};

OppholdINorgePanel.buildInitialValues = () => ({
  tidligereOppholdUtenlands: [{}],
  fremtidigeOppholdUtenlands: [{}],
});

export default OppholdINorgePanel;
