import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import moment from 'moment';
import { Normaltekst } from 'nav-frontend-typografi';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';

import { formatCurrencyWithKr, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import {
  PeriodLabel, Table, TableColumn, TableRow,
} from '@fpsak-frontend/shared-components';
import { behandlingFormValueSelector } from '@fpsak-frontend/form';
import { ArbeidsgiverOpplysningerPerId, FagsakPerson, Medlemskap } from '@fpsak-frontend/types';

const headerTextCodes = [
  'InntektOgYtelserFaktaPanel.Person',
  'InntektOgYtelserFaktaPanel.Employer',
  'InntektOgYtelserFaktaPanel.Period',
  'InntektOgYtelserFaktaPanel.Amount',
];

type CustomInntekt = {
  person: string;
  employer: string;
  fom: string;
  tom: string;
  amount: number;
}

export type FormValues = {
  inntekter?: CustomInntekt[];
}

interface PureOwnProps {
  id: string;
  behandlingId: number;
  behandlingVersjon: number;
}

interface MappedOwnProps {
  inntekter: CustomInntekt[];
}

interface StaticFunctions {
  buildInitialValues?: (person: FagsakPerson, inntekt: Medlemskap['inntekt'], arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => FormValues;
}

/**
 * InntektOgYtelserFaktaPanel
 *
 * Presentasjonskomponent. Er tilknyttet faktapanelet for medlemskap.
 * Viser inntektene relevante for søker. ReadOnly.
 */
const InntektOgYtelserFaktaPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  inntekter,
}) => {
  const intl = useIntl();
  if (!inntekter || inntekter.length === 0) {
    return (
      <Ekspanderbartpanel
        tittel={intl.formatMessage({ id: 'InntektOgYtelserFaktaPanel.ApplicationInformation' })}
        border
      >
        <Normaltekst>
          <FormattedMessage id="InntektOgYtelserFaktaPanel.NoInformation" />
        </Normaltekst>
      </Ekspanderbartpanel>
    );
  }

  return (
    <Ekspanderbartpanel
      tittel={intl.formatMessage({ id: 'InntektOgYtelserFaktaPanel.ApplicationInformation' })}
      border
    >
      <Table headerTextCodes={headerTextCodes}>
        {inntekter.map((inntekt) => {
          const key = inntekt.person + inntekt.employer + inntekt.fom + inntekt.tom + inntekt.amount;
          return (
            <TableRow key={key} id={key}>
              <TableColumn>
                {inntekt.person}
              </TableColumn>
              <TableColumn>
                {inntekt.employer}
              </TableColumn>
              <TableColumn>
                <PeriodLabel showTodayString dateStringFom={inntekt.fom} dateStringTom={inntekt.tom} />
              </TableColumn>
              <TableColumn>
                {formatCurrencyWithKr(inntekt.amount)}
              </TableColumn>
            </TableRow>
          );
        })}
      </Table>
    </Ekspanderbartpanel>
  );
};

InntektOgYtelserFaktaPanelImpl.defaultProps = {
  inntekter: [],
};

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  inntekter: behandlingFormValueSelector(`OppholdInntektOgPeriodeForm-${ownProps.id}`, ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'inntekter'),
});

const InntektOgYtelserFaktaPanel = connect(mapStateToProps)(InntektOgYtelserFaktaPanelImpl);

const sortInntekter = (inntekt1: CustomInntekt, inntekt2: CustomInntekt): number => {
  const nameDiff = inntekt1.person.localeCompare(inntekt2.person);
  return nameDiff === 0 ? moment(inntekt2.fom, ISO_DATE_FORMAT).diff(moment(inntekt1.fom, ISO_DATE_FORMAT)) : nameDiff;
};

InntektOgYtelserFaktaPanel.buildInitialValues = (
  person: FagsakPerson,
  inntekt: Medlemskap['inntekt'],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FormValues => {
  if (inntekt === null) {
    return {} as FormValues;
  }

  const inntekter = inntekt
    .map((i) => {
      const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[i.utbetaler];
      return {
        person: arbeidsgiverOpplysninger ? arbeidsgiverOpplysninger.navn : i.utbetaler,
        employer: i.utbetaler,
        fom: i.fom,
        tom: i.tom,
        amount: i.belop,
      };
    });
  return {
    inntekter: inntekter.sort(sortInntekter),
  };
};

export default InntektOgYtelserFaktaPanel;
