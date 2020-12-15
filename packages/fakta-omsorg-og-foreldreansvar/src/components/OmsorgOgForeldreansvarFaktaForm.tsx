import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  AksjonspunktHelpTextTemp, EditedIcon, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { SelectField, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { hasValidInteger, isObjectEmpty, required } from '@fpsak-frontend/utils';
import VilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { isFieldEdited, FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, FamilieHendelse, InntektArbeidYtelse, Kodeverk, KodeverkMedNavn, Personopplysninger, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';

import OmsorgsovertakelseFaktaPanel, { FormValues as OmsorgFormValues } from './OmsorgsovertakelseFaktaPanel';
import RettighetFaktaPanel, { FormValues as RettighetFormValues } from './RettighetFaktaPanel';
import BarnPanel, { FormValues as BarnFormValues } from './BarnPanel';
import ForeldrePanel, { FormValues as ForeldreFormValues } from './ForeldrePanel';

import styles from './omsorgOgForeldreansvarFaktaForm.less';

const getDescriptionText = (vilkarCode: string): ReactElement => {
  if (vilkarCode === VilkarType.OMSORGSVILKARET) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextOmsorgTredjeLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_2_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreAndreLedd" />;
  }
  if (vilkarCode === VilkarType.FORELDREANSVARSVILKARET_4_LEDD) {
    return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.HelpTextForeldreFjerdeLedd" />;
  }
  return <FormattedMessage id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkarToSeeDescription" />;
};

const findAksjonspunktHelpTexts = (erAksjonspunktForeldreansvar: boolean): ReactElement[] => (erAksjonspunktForeldreansvar
  ? [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformationForeldreansvar" />]
  : [<FormattedMessage key="CheckInformation" id="OmsorgOgForeldreansvarFaktaForm.CheckInformation" />,
    <FormattedMessage key="ChooseVilkar" id="OmsorgOgForeldreansvarFaktaForm.ChooseVilkar" />]);

export type FormValues = OmsorgFormValues & RettighetFormValues & BarnFormValues & ForeldreFormValues & {
  originalAntallBarn?: number;
  vilkarType?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  personopplysninger: Personopplysninger;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn[];
  hasOpenAksjonspunkter: boolean;
  relatertYtelseTypes: KodeverkMedNavn[];
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}

interface MappedOwnProps {
  antallBarn: number;
  vilkarType: string;
  editedStatus: FieldEditedInfo;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse, personopplysning: Personopplysninger,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kodeverk: Kodeverk) => string) => FormValues,
  validate?: (intl: IntlShape, values: FormValues) => any,
  transformValues?: (values: FormValues, aksjonspunkt: Aksjonspunkt) => any,
}

/**
 * OmsorgOgForeldreansvarFaktaForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av fakta for omsorgs og foreldreansvarsvilkåret.
 */
const OmsorgOgForeldreansvarFaktaFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps> & StaticFunctions = ({
  intl,
  readOnly,
  vilkarTypes,
  hasOpenAksjonspunkter,
  antallBarn,
  vilkarType,
  relatertYtelseTypes,
  editedStatus,
  erAksjonspunktForeldreansvar,
  behandlingId,
  behandlingVersjon,
  alleMerknaderFraBeslutter,
}) => (
  <>
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>
      {findAksjonspunktHelpTexts(erAksjonspunktForeldreansvar)}
    </AksjonspunktHelpTextTemp>
    <Row>
      <Column xs={erAksjonspunktForeldreansvar ? '12' : '6'}>
        <OmsorgsovertakelseFaktaPanel
          readOnly={readOnly}
          erAksjonspunktForeldreansvar={erAksjonspunktForeldreansvar}
          editedStatus={editedStatus}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
      </Column>
      {!erAksjonspunktForeldreansvar && (
        <Column xs="6">
          <RettighetFaktaPanel
            relatertYtelseTypes={relatertYtelseTypes}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          />
        </Column>
      )}
    </Row>
    <Row>
      <Column xs="6">
        <FieldArray
          name="barn"
          // @ts-ignore Fiks
          component={BarnPanel}
          antallBarn={antallBarn}
          readOnly={readOnly}
          isFodselsdatoerEdited={editedStatus.fodselsdatoer}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          intl={intl}
        />
      </Column>
      <Column xs="6">
        <FieldArray
          name="foreldre"
          component={ForeldrePanel}
          readOnly={readOnly}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        />
      </Column>
    </Row>
    {!erAksjonspunktForeldreansvar && (
      <FaktaGruppe
        title={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.VelgVilkaarSomSkalAnvendes' })}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.OMSORGSOVERTAKELSE]}
      >
        {!readOnly && (
          <SelectField
            name="vilkarType"
            validate={[required]}
            label=""
            placeholder={intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.SelectVIlkar' })}
            selectValues={vilkarTypes.map((d) => (<option key={d.kode} value={d.kode}>{d.navn}</option>))}
            bredde="xxl"
            readOnly={readOnly}
            disabled={readOnly}
          />
        )}
        {(readOnly && vilkarType) && (
          <div className={styles.vilkarTypeReadOnly}>
            <Element tag="span">
              {(vilkarTypes.find((d) => d.kode === vilkarType) || {}).navn}
            </Element>
            {editedStatus.vilkarType
              && <EditedIcon />}
          </div>
        )}
        <VerticalSpacer eightPx />
        <Normaltekst>
          {getDescriptionText(vilkarType)}
        </Normaltekst>
      </FaktaGruppe>
    )}
  </>
);

const getEditedStatus = createSelector(
  [(ownProps: PureOwnProps) => ownProps.soknad,
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse,
    (ownProps: PureOwnProps) => ownProps.personopplysninger],
  (soknad, familiehendelse, personopplysning): FieldEditedInfo => (
    isFieldEdited(soknad, familiehendelse, personopplysning)
  ),
);

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  editedStatus: getEditedStatus(ownProps),
  ...behandlingFormValueSelector('OmsorgOgForeldreansvarInfoPanel', ownProps.behandlingId, ownProps.behandlingVersjon)(
    state, 'antallBarn', 'vilkarType',
  ),
});

const OmsorgOgForeldreansvarFaktaForm = connect(mapStateToProps)(OmsorgOgForeldreansvarFaktaFormImpl);

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (soknad: Soknad, familiehendelse: FamilieHendelse, personopplysning: Personopplysninger,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: InntektArbeidYtelse['innvilgetRelatertTilgrensendeYtelserForAnnenForelder'],
  getKodeverknavn: (kodeverk: Kodeverk) => string): FormValues => ({
  vilkarType: familiehendelse.vilkarType ? familiehendelse.vilkarType.kode : '',
  originalAntallBarn: soknad.antallBarn,
  ...ForeldrePanel.buildInitialValues(personopplysning),
  ...BarnPanel.buildInitialValues(personopplysning, soknad),
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(soknad, familiehendelse),
  ...RettighetFaktaPanel.buildInitialValues(soknad, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, getKodeverknavn),
});

OmsorgOgForeldreansvarFaktaForm.validate = (intl: IntlShape, values: FormValues): any => {
  const errors = {};
  if (!values) {
    return errors;
  }
  const { originalAntallBarn, antallBarn } = values;
  if (antallBarn < 1 || antallBarn > originalAntallBarn) {
    return {
      antallBarn: intl.formatMessage({ id: 'OmsorgOgForeldreansvarFaktaForm.AntallBarnValidation' }),
    };
  }
  if (isObjectEmpty(errors)) {
    const res = hasValidInteger(antallBarn);
    if (res !== null) {
      return {
        antallBarn: res,
      };
    }
  }
  return errors;
};

OmsorgOgForeldreansvarFaktaForm.transformValues = (values: FormValues, aksjonspunkt: Aksjonspunkt): any => {
  const newValues = {
    omsorgsovertakelseDato: values.omsorgsovertakelseDato,
    antallBarn: values.antallBarn,
    barn: values.barn,
    foreldre: values.foreldre,
  };
  if (aksjonspunkt.definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR) {
    return {
      ...newValues,
      foreldreansvarDato: values.foreldreansvarDato,
      kode: aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    };
  }
  return {
    ...newValues,
    vilkarType: values.vilkarType,
    kode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
  };
};

export default OmsorgOgForeldreansvarFaktaForm;
