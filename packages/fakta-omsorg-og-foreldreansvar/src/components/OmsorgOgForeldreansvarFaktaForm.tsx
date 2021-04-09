import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, WrappedComponentProps } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import {
  AksjonspunktHelpTextTemp, EditedIcon, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { SelectField, behandlingFormValueSelector } from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import VilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import { isFieldEdited, FieldEditedInfo } from '@fpsak-frontend/fakta-felles';
import {
  Aksjonspunkt, FamilieHendelse, InntektArbeidYtelse, Kodeverk, KodeverkMedNavn, Personoversikt, RelatertTilgrensedYtelse, Soknad,
} from '@fpsak-frontend/types';
import { AvklarFaktaForForeldreansvarAksjonspunktAp, AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OmsorgsovertakelseFaktaPanel, { FormValues as OmsorgFormValues } from './OmsorgsovertakelseFaktaPanel';
import RettighetFaktaPanel, { FormValues as RettighetFormValues } from './RettighetFaktaPanel';
import BarnPanel from './BarnPanel';
import ForeldrePanel from './ForeldrePanel';

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

export type FormValues = OmsorgFormValues & RettighetFormValues & {
  vilkarType?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  soknad: Soknad;
  gjeldendeFamiliehendelse: FamilieHendelse;
  readOnly: boolean;
  vilkarTypes: KodeverkMedNavn[];
  hasOpenAksjonspunkter: boolean;
  relatertYtelseTypes: KodeverkMedNavn[];
  erAksjonspunktForeldreansvar: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  personoversikt: Personoversikt;
}

interface MappedOwnProps {
  vilkarType: string;
  editedStatus: FieldEditedInfo;
}

interface StaticFunctions {
  buildInitialValues?: (soknad: Soknad, familiehendelse: FamilieHendelse,
    innvilgetRelatertTilgrensendeYtelserForAnnenForelder: RelatertTilgrensedYtelse[],
    getKodeverknavn: (kodeverk: Kodeverk) => string) => FormValues,
  validate?: (intl: IntlShape, values: FormValues) => any,
  transformValues?: (
    values: FormValues,
    aksjonspunkt: Aksjonspunkt,
  ) => AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp,
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
  soknad,
  vilkarType,
  relatertYtelseTypes,
  editedStatus,
  erAksjonspunktForeldreansvar,
  behandlingId,
  behandlingVersjon,
  alleMerknaderFraBeslutter,
  personoversikt,
  gjeldendeFamiliehendelse,
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
          soknad={soknad}
          familiehendelse={gjeldendeFamiliehendelse}
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
        <BarnPanel
          soknad={soknad}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          intl={intl}
        />
      </Column>
      <Column xs="6">
        <ForeldrePanel
          personoversikt={personoversikt}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          intl={intl}
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
    (ownProps: PureOwnProps) => ownProps.gjeldendeFamiliehendelse],
  (soknad, gjeldendeFamiliehendelse): FieldEditedInfo => (
    isFieldEdited(soknad, gjeldendeFamiliehendelse)
  ),
);

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  editedStatus: getEditedStatus(ownProps),
  vilkarType: behandlingFormValueSelector('OmsorgOgForeldreansvarInfoPanel', ownProps.behandlingId, ownProps.behandlingVersjon)(state, 'vilkarType'),
});

const OmsorgOgForeldreansvarFaktaForm = connect(mapStateToProps)(OmsorgOgForeldreansvarFaktaFormImpl);

OmsorgOgForeldreansvarFaktaForm.buildInitialValues = (soknad: Soknad, gjeldendeFamiliehendelse: FamilieHendelse,
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: InntektArbeidYtelse['innvilgetRelatertTilgrensendeYtelserForAnnenForelder'],
  getKodeverknavn: (kodeverk: Kodeverk) => string): FormValues => ({
  vilkarType: gjeldendeFamiliehendelse.vilkarType ? gjeldendeFamiliehendelse.vilkarType.kode : '',
  ...OmsorgsovertakelseFaktaPanel.buildInitialValues(soknad, gjeldendeFamiliehendelse),
  ...RettighetFaktaPanel.buildInitialValues(soknad, innvilgetRelatertTilgrensendeYtelserForAnnenForelder, getKodeverknavn),
});

OmsorgOgForeldreansvarFaktaForm.transformValues = (
  values: FormValues,
  aksjonspunkt: Aksjonspunkt,
): AvklarFaktaForForeldreansvarAksjonspunktAp | AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp => (
  aksjonspunkt.definisjon.kode === aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR
    ? {
      omsorgsovertakelseDato: values.omsorgsovertakelseDato,
      foreldreansvarDato: values.foreldreansvarDato,
      kode: aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR,
    } as AvklarFaktaForForeldreansvarAksjonspunktAp
    : {
      omsorgsovertakelseDato: values.omsorgsovertakelseDato,
      vilkarType: values.vilkarType,
      kode: aksjonspunktCodes.OMSORGSOVERTAKELSE,
    } as AvklarFaktaForOmsorgOgForeldreansvarAksjonspunktAp);

export default OmsorgOgForeldreansvarFaktaForm;
